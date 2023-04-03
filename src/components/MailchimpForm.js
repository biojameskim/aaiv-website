
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
      {status === "sending" && <div className="email-message">Sending...</div>}
      {status === "success" && <div className="email-message">Thanks for subscribing!</div>}
      {status === "error" && <div className="email-message" dangerouslySetInnerHTML={{ __html: message.substring(4) }} />}
      <button onClick={() => subscribe({ EMAIL: email })}>
        Subscribe
      </button>
    </div>
  );

  return (
    <MailchimpSubscribe url={url} render={render} />
  );
}
