
import "./css/MailchimpForm.css";

import MailchimpSubscribe from 'react-mailchimp-subscribe';
import React from 'react';
import { useState } from 'react';

export default function MailchimpForm() {
  const url = process.env.REACT_APP_MAILCHIMP_KEY

  const [email, setEmail] = useState("");

  const render = ({ subscribe, status, message }) => (
    <div className="chimp-forms">
      <input type="email" name="EMAIL" placeholder="Your email address" onChange={(e) => setEmail(e.target.value)} value={email} />
      <button onClick={() => subscribe({ EMAIL: email })}>
        Subscribe
      </button>
      {status === "sending" && <div>Sending...</div>}
      {status === "success" && <div>Thanks for subscribing!</div>}
      {status === "error" && <div dangerouslySetInnerHTML={{ __html: message }} />}
    </div>
  );

  return (
    <MailchimpSubscribe url={url} render={render} />
  );
}
