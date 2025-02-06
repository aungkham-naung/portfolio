import emailjs from "emailjs-com";
import { useState } from "react";
import SocialIconDiv from "./SocialIconDiv";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const disabled = email === "" || message === "";

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
    <div className="container mx-auto p-4 mb-20 flex flex-col items-center justify-center ">
      <div className="w-full max-w-2xl flex flex-col bg-white/5 px-2 py-4 rounded-4xl">
        <h2 className="text-5xl mb-8 self-start px-6  ">Contact me</h2>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-4xl px-6 py-6 rounded-2xl flex flex-col justify-center mx-auto"
            method="POST"
          >
            <label htmlFor="email" className="mb-2 text-indigo-500 font-bold">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="name@aol.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  px-3 py-2 rounded-md bg-neutral-200 text-black focus:outline-none focus:ring-4 focus:ring-indigo-500  placeholder: italic"
            />

            <label
              htmlFor="message"
              className="mt-10 mb-2 text-indigo-500 font-bold"
            >
              Your Message
            </label>
            <textarea
              className="placeholder: italic w-full  px-3 py-2 rounded-md resize-y h-40 bg-neutral-200 text-black focus:outline-none focus:ring-4 focus:ring-indigo-500 "
              value={message}
              name="message"
              id="message"
              placeholder="Leave a comment ..."
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              className="inline-flex justify-start  w-fit px-4 py-2 mt-10 rounded-md bg-zinc-800 text-indigo-500 hover:bg-indigo-500
          disabled:bg-zinc-900 disabled:cursor-not-allowed hover:text-white hover:disabled:text-indigo-500 border-1 border-indigo-500 transition-colors"
              disabled={disabled}
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <SocialIconDiv size={"text-3xl"} />
      </div>
    </div>
  );
}

export default Contact;
