import React from "react";

function Contact() {
  return (
    <>
      <div>Contact</div>
      <form action="https://api.web3forms.con/submit " method="POST">
        <input
          type="hidden"
          name="access_key"
          value="c338fe11-d03b-4c90-ad3e-b873d21ced80"
        />

        <input type="text" name="name" required />

        <input type="email" name="email" required />

        <textarea name="message" />

        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}

export default Contact;
