import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Sanjay = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uf5q6nt', 'template_n73gy3b', form.current, 'D0vSWOc5Q7DiboNXA')
      .then((result) => {
        alert("Submit")
        //   console.log(result.text);
      }, (error) => {
        alert("Not submitted")
        //   console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};