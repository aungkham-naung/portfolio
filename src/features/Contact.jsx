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
    <div className="container mx-auto p-4 mb-15 flex flex-col items-center justify-center">
      <div className="w-full max-w-lg md:max-w-3xl flex flex-col  ">
        <h2 className="text-5xl mb-8 ju">Contact me</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col border-zinc-400 border-2 px-4 py-4 rounded-2xl"
          method="POST"
        >
          <label htmlFor="email" className=" mb-1 text-white font-bold">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="name@aol.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded-md bg-neutral-900 text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <label htmlFor="message" className="mt-10 mb-1 text-white font-bold">
            Your Message
          </label>
          <textarea
            className="w-full border px-3 py-2 rounded-md resize-y h-40 bg-neutral-900 text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
            value={message}
            name="message"
            id="message"
            placeholder="Leave a comment ..."
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            className="inline-flex justify-start border-2 w-fit px-4 py-2 mt-10 rounded-md  bg-zinc-800 text-neutral-400 hover:bg-zinc-200
            disabled:bg-zinc-900 disabled:cursor-not-allowed"
            disabled={disabled}
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center">
          <SocialIconDiv size={"text-3xl"} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
