import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flec-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I'd love to know what I can create for you.{" "}
          <span className="decoration-main/50 underline">Let's Talk.</span>
        </h4>

        <div>
          <div className=" flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-standard-text h-7 w-7 animate-pulse" />
            <p className="text-2xl">{`+1 (236)-863-0136`}</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-standard-text h-7 w-7 animate-pulse" />
            <p className="text-2xl">LarissaCreative@gmail.com</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-standard-text h-7 w-7 animate-pulse" />
            <p className="text-2xl">Vancouver, BC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
