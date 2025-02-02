import emailjs from "emailjs-com";
import { useState } from "react";
import SocialIconDiv from "./SocialIconDiv";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_email: email,
      message: message
    };
    setEmail("");
    setMessage("");
    console.log(email, message);

    emailjs
      .send(
        "service_9uvrgqw", // Replace with your EmailJS service ID
        "template_4rfkx6d", // Replace with your EmailJS template ID
        templateParams,
        "3eb1_Vaf_9T4NQbc0" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="flex flex-col flex-wrap min-h-screen justify-center content-center">
      <h2 className="text-5xl">Contact Me</h2>
      <form
        action="https://formsubmit.co/aung.k.naung@gmail.com"
        className="flex flex-wrap flex-col"
        method="POST"
      >
        <label htmlFor="email" className="mt-10 mb-1" onSubmit={handleSubmit}>
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="name@aol.com"
          onChange={(e) => setEmail(e.target.value)}
          className="border-1 px-1.5 rounded-md resize-none h-8"
        ></input>

        <label htmlFor="message" className="mt-10 mb-1">
          Your Message
        </label>
        <textarea
          className="border-1 px-1.5 rounded-md resize-y h-40"
          value={message}
          name="message"
          id="message"
          placeholder="Leave a comment ..."
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          className="inline-flex justify-start border-2 w-fit px-4 py-2 mt-10 rounded-md"
          type="submit"
        >
          Send Message
        </button>
      </form>
      <SocialIconDiv size={"text-3xl"} />
    </div>
  );
}

export default Contact;
