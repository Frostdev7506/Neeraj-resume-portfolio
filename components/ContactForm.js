



import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.current.user_name.value) newErrors.name = 'Name is required';
    if (!form.current.user_email.value) newErrors.email = 'Email is required';
    if (!form.current.message.value) newErrors.message = 'Message is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      emailjs
      .sendForm(
        //   'YOUR_SERVICE_ID'
          'service_3o1d0nz',
        //   'YOUR_TEMPLATE_ID'
          'template_xs38dyk',
          form.current,
        //   'YOUR_PUBLIC_KEY'
        'f8sriYXEwzKXsNCrU'
        )
        .then(
          (result) => {
            toast.success('Message sent successfully!');
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (

<div className='ContactForm  mt-20 mb-20'>
<h1 className="text-4xl text-gray-500   mt-8 mb-10">Contact Me</h1>
<form autocomplete="off" className='mt-5' ref={form} onSubmit={sendEmail}>

      <div className="mb-4">
        <label className="block text-gray-500 text-m font-bold mb-2">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="message"
        />
        {errors.message && (
          <p className="text-red-500 text-xs italic">{errors.message}</p>
        )}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Send
      </button>
    </form>
</div>
   
  );
};

export default ContactForm;