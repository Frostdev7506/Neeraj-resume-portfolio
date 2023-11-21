import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactMe from "../public/contactMe.jpeg";

import Image from "next/image";
import { toast } from "react-toastify";
// YourComponent.js
import {
  checkNameInput,
  checkEmailInput,
  checkMessageInput,
} from "./formInputChecks";

// Now you can use these functions in your component

const ContactForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    const newErrors = {};
    newErrors.name = checkNameInput(
      form.current.user_name.value,
      newErrors.name
    );
    // if (!form.current.user_name.value) newErrors.name = 'Name is required';

    newErrors.email = checkEmailInput(
      form.current.user_email.value,
      newErrors.email
    );
    // if (!form.current.user_email.value) newErrors.email = 'Email is required';

    newErrors.message = checkMessageInput(
      form.current.message.value,
      newErrors.message
    );
    // if (!form.current.message.value) newErrors.message = 'Message is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      emailjs
        .sendForm(
          //   'YOUR_SERVICE_ID'
          "service_3o1d0nz",
          //   'YOUR_TEMPLATE_ID'
          "template_xs38dyk",
          form.current,
          //   'YOUR_PUBLIC_KEY'
          "f8sriYXEwzKXsNCrU"
        )
        .then(
          (result) => {
            toast.success("Message sent successfully!");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      toast.error("Message Not Sent ");
    }
  };

  return (
    <div className="ContactForm mt-20 mb-20 bg-gray-100 dark:bg-gray-700 p-10 rounded-lg shadow-xl max-w-10xl mx-auto">
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1 mr-10 justify-center ">
          <h1 className="sm:text-6xl text-3xl text-gray-500 mt-8 mb-10 ">
            Contact Me
          </h1>

          <form
            autoComplete="off"
            className="sm:mt-10 sm:p-10"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="mb-4">
              <label className="block text-gray-500 text-m font-bold mb-2">
                Name
              </label>
              <input
                className="shadow appearance-none border  dark:bg-slate-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-500"
                type="text"
                name="user_name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-500 text-m font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none  dark:bg-slate-500 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:border-teal-500"
                type="email"
                name="user_email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-500 text-m font-bold mb-2">
                Message
              </label>
              <textarea
                className="shadow appearance-none border  dark:bg-slate-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:border-teal-500 "
                name="message"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-xs italic">{errors.message}</p>
              )}
            </div>
            <button
              className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="hidden sm:flex sm:flex-1">
          <Image
            src={contactMe}
            alt="Contact Me Image"
            className="rounded-md"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
