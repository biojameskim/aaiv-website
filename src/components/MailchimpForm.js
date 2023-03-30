import Mailchimp from "react-mailchimp-form";
import React from "react";
import "./css/MailchimpForm.css";

export default function MailchimpForm() {
  return (
    <Mailchimp
      action={process.env.REACT_APP_MAILCHIMP_KEY}
      className="chimp-forms"
      fields={[
        {
          name: "EMAIL",
          placeholder: "Email Address",
          type: "email",
          required: true,
        }
      ]}
    />
  )
}
