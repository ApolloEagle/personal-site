import React, { useState } from "react";
import { X } from "lucide-react";

interface ContactFormProps {
  name: {
    value: string;
    error?: string;
  };
  email: {
    value: string;
    error?: string;
  };
}

interface ModalProps {
  setModalOpen: (modalOpen: boolean) => void;
  song: string;
}

const Modal = ({ setModalOpen, song }: ModalProps) => {
  const [form, setForm] = useState<ContactFormProps>({
    name: { value: "", error: "" },
    email: { value: "", error: "" },
  });
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = () => {
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    let updateForm = form;

    if (form.email.value === "" || !emailRegex.test(form.email.value)) {
      updateForm = {
        ...updateForm,
        name: {
          ...updateForm.name,
        },
        email: {
          ...updateForm.email,
          error: "Please enter a valid email (example@gmail.com).",
        },
      };
    }

    if (form.name.value === "") {
      updateForm = {
        ...updateForm,
        name: {
          ...updateForm.name,
          error: "Please enter your name.",
        },
      };
    }

    setForm(updateForm);

    return updateForm.name.error === "" && updateForm.email.error === ""
      ? true
      : false;
  };

  const handleSubscribe = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await fetch("/api/subscription", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name.value,
            email: form.email.value,
            song,
          }),
        });

        if (response.ok) {
          await response.json();
        } else {
          console.error("Subscription error.");
        }
      } catch (error) {
        setLoading(false);
        console.error("Subscription error.");
      }

      setLoading(false);
      setSubscribed(true);
    } else {
      console.log(form.name.error, form.email.error);
    }
  };

  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center animate-fade-in-quick">
      <div className="flex flex-row justify-center items-center fixed w-full h-full z-20 bg-slate-400 opacity-50" />
      <div className="overflow-hidden duration-700 border rounded-none sm:rounded-xl bg-zinc-700 sm:bg-zinc-800/80 group md:gap-8 hover:border-zinc-300 border-none sm:border-zinc-400 h-full w-full md:w-2/3 lg:w-1/3 md:h-auto opacity-100 fixed z-20 flex flex-col md:rounded-lg p-6">
        <div className="flex justify-between items-center">
          <X color="transparent" />
          <h2 className="self-center text-zinc-100 font-semibold text-lg tracking-[0.15em]">
            WANT TO HEAR MORE?
          </h2>
          <button onClick={() => setModalOpen(false)}>
            <X color="white" />
          </button>
        </div>
        <div className="flex sm:grid flex-col sm:grid-cols-1 justify-center sm:justify-normal gap-0 sm:gap-6 h-full">
          <div className="mb-6 sm:mb-0">
            <label className="text-zinc-100 tracking-[0.10em]">Name</label>
            <p className="text-rose-600 text-sm mt-2 animate-fade-in-quick">
              {form.name.error}
            </p>
            <input
              type="text"
              className={`${
                form.name.error ? "border-rose-600 border" : "border-none"
              } w-full h-10 rounded-lg mt-2 bg-zinc-800 px-4 outline-none text-zinc-100 duration-1000`}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: { ...form.name, value: e.target.value, error: "" },
                })
              }
            />
          </div>
          <div className="mb-6 sm:mb-0">
            <label className="text-zinc-100 tracking-[0.10em]">Email</label>
            <p className="text-rose-600 text-sm mt-2 animate-fade-in-quick">
              {form.email.error}
            </p>
            <input
              type="email"
              className={`${
                form.email.error ? "border-rose-600 border" : "border-none"
              } w-full h-10 rounded-lg mt-2 bg-zinc-800 px-4 outline-none text-zinc-100 duration-1000`}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: { ...form.email, value: e.target.value, error: "" },
                })
              }
            />
          </div>

          <button
            className="w-full mt-8"
            onClick={() => handleSubscribe()}
            disabled={subscribed}
          >
            <div
              className={`text-zinc-300 text-lg font-semibold ${
                !subscribed
                  ? "duration-500 hover:text-white hover:text-xl"
                  : "hover:none text-white"
              } tracking-[0.15em]`}
            >
              {subscribed
                ? "SUBSCRIBED!"
                : loading
                ? "SUBSCRIBING..."
                : "SUBSCRIBE"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
