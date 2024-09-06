import os
import json
from googleapiclient.discovery import build
from google.oauth2 import service_account
import io
from googleapiclient.http import MediaIoBaseDownload

# Fetch secrets from environment variables (set in GitHub Actions)
SERVICE_ACCOUNT_INFO = os.getenv('GOOGLE_APPLICATION_CREDENTIALS')
FOLDER_ID = os.getenv('GOOGLE_DRIVE_FOLDER_ID')

# Load service account info from the environment variable
service_account_info = json.loads(SERVICE_ACCOUNT_INFO)

SCOPES = ['https://www.googleapis.com/auth/drive.readonly']

def get_latest_file(service, folder_id):
    # Query to get files in the folder
    results = service.files().list(
        q=f"'{folder_id}' in parents and mimeType='image/png'",
        orderBy='createdTime desc',  # Sort by newest first
        pageSize=1,
        fields="files(id, name, createdTime)"
    ).execute()
    
    items = results.get('files', [])
    if not items:
        print('No files found in folder.')
        return None
    else:
        # Return the latest file's ID and name
        return items[0]['id'], items[0]['name']

def download_flyer(file_id, destination, service):
    request = service.files().get_media(fileId=file_id)
    fh = io.FileIO(destination, 'wb')
    downloader = MediaIoBaseDownload(fh, request)
    
    done = False
    while not done:
        status, done = downloader.next_chunk()
        print(f"Download {int(status.progress() * 100)}% complete.")
    
def main():
    # Create credentials using the service account info
    creds = service_account.Credentials.from_service_account_info(service_account_info, scopes=SCOPES)
    service = build('drive', 'v3', credentials=creds)

    # Get the latest flyer file from the folder
    try:
        file_id, file_name = get_latest_file(service, FOLDER_ID)
        if file_id:
            print(f"Downloading latest flyer: {file_name}")
            destination = 'src/assets/large_group/lg_graphics/lg_flyer.png'
            download_flyer(file_id, destination, service)
        else:
            print("No flyer found.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == '__main__':
    main()
