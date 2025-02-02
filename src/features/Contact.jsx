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
    <div className="container mx-auto p-4">
      {/* Wrap the heading and form in a container with a common max width */}
      <div className="w-full max-w-lg md:max-w-2xl mx-auto">
        <h2 className="text-5xl mb-8">Contact me</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col"
          method="POST"
        >
          <label htmlFor="email" className="mt-10 mb-1">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="name@aol.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
          />

          <label htmlFor="message" className="mt-10 mb-1">
            Your Message
          </label>
          <textarea
            className="w-full border px-3 py-2 rounded-md resize-y h-40"
            value={message}
            name="message"
            id="message"
            placeholder="Leave a comment ..."
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            className="inline-flex justify-start border-2 w-fit px-4 py-2 mt-10 rounded-md bg-blue-600 text-white hover:bg-blue-500"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <SocialIconDiv size={"text-3xl"} />
      </div>
    </div>
  );
}

export default Contact;
