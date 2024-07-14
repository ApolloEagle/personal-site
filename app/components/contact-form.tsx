"use client";
import { useState } from "react";
import { Email } from "./icons";

const ContactForm = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("Connect");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendEmail = async () => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValid.test(email)) {
      setEmailError("Please use a valid email address.");
    }
    if (!message.length) {
      setMessageError("Please add a message.");
    }
    if (emailValid.test(email) && message.length) {
      try {
        setLoading(true);
        setButtonText("Loading...");
        const { ok } = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            message: message,
          }),
        });

        if (ok) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setButtonText("Sent!");
          await new Promise((resolve) => setTimeout(resolve, 1500));
          setButtonText("Connect");
        }
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false);
        setEmail("");
        setMessage("");
      }
    }
  };

  const handleInput = (field: string, value: string) => {
    if (field === "email") {
      setEmailError("");
      setEmail(value);
    }

    if (field === "message") {
      setMessageError("");
      setMessage(value);
    }
  };

  return (
    <div className="mx-auto grid max-w-xl grid-cols-1 lg:max-w-none lg:grid-cols-2 my-8">
      <div className="flex flex-col gap-16" />
      <div className="space-y-10 lg:pl-16 xl:pl-24">
        <form className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 ">
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 items-center">
            <Email />
            <span className="ml-3">Contact Me</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Feel free to reach out for any inquiries or to start a conversation!
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <input
              value={email}
              onChange={(e) => handleInput("email", e.target.value)}
              type="email"
              placeholder="Email Address"
              className="min-w-0 p-3 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
            />
            {emailError && (
              <span className="text-sm text-red-500">{emailError}</span>
            )}
            <textarea
              value={message}
              onChange={(e) => handleInput("message", e.target.value)}
              rows={5}
              placeholder="Message..."
              className="min-w-0 p-3 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
            />
            {messageError && (
              <span className="text-sm text-red-500">{messageError}</span>
            )}
            <button
              onClick={handleSendEmail}
              type="button"
              className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 flex-none"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
