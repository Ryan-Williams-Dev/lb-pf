import React, { useRef, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

type Props = {};

type Inputs = {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const form = useRef<HTMLFormElement>(null);

  const [input, setInput] = useState<Inputs>({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const larissaEmail = "larissa.baroboskin@gmail.com";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(form.current);

      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current || "",
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setInput({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });

      toast.success("Message Sent!");
    } catch (error) {
      toast.error("Oh no, something went wrong, please try again later");
      console.log(error);
    }
  };
  return (
    <div className="h-screen max-w flex relative flex-col text-center md:text-left md:flex-row md:max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-standard-text text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl md:text-4xl font-semibold text-center pt-20 px-3">
          {`I'd love to know what I can create with you. `}
          <span className="decoration-highlight/70 underline">{`Let's Talk.`}</span>
        </h4>

        <div>
          <div className=" flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-highlight h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{`+1 (236)-863-0136`}</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-highlight h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{larissaEmail}</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-highlight h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">Vancouver, BC</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={onSubmit}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
            <input
              name="user_name"
              value={input.user_name}
              onChange={(e) =>
                setInput({ ...input, user_name: e.target.value })
              }
              placeholder="Name"
              className="contactInput"
              type="text>"
              required
            />
            <input
              name="user_email"
              value={input.user_email}
              onChange={(e) =>
                setInput({ ...input, user_email: e.target.value })
              }
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>

          <input
            name="subject"
            value={input.subject}
            onChange={(e) => setInput({ ...input, subject: e.target.value })}
            placeholder="Subject"
            className="contactInput"
            type="text"
            minLength={3}
            required
          />

          <textarea
            name="message"
            value={input.message}
            onChange={(e) => setInput({ ...input, message: e.target.value })}
            placeholder="Message"
            className="contactInput"
            minLength={20}
            required
          />
          <button
            type="submit"
            className="bg-highlight py-5 px-10 rounded text-main-bg font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
