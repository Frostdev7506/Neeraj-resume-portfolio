import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactUs from "../public/ContactUs";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import {
  checkNameInput,
  checkEmailInput,
  checkMessageInput,
} from "./formInputChecks";

const ContactForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formControls = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5 }
    })
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(13, 148, 136, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 },
    loading: {
      scale: 1,
      boxShadow: "0px 0px 8px rgba(13, 148, 136, 0.5)",
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const newErrors = {};
    newErrors.name = checkNameInput(form.current.user_name.value, newErrors.name);
    newErrors.email = checkEmailInput(form.current.user_email.value, newErrors.email);
    newErrors.message = checkMessageInput(form.current.message.value, newErrors.message);

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await emailjs.sendForm(
          "service_3o1d0nz",
          "template_xs38dyk",
          form.current,
          "f8sriYXEwzKXsNCrU"
        );
        toast.success("Message sent successfully!");
        form.current.reset();
      } catch (error) {
        console.error(error);
        toast.error("Failed to send message");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast.error("Please fix the errors before submitting");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="ContactForm mt-20 mb-20 bg-gradient-to-br from-white via-teal-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-4 sm:p-10 rounded-lg shadow-xl max-w-10xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1 sm:mr-10 justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <h1 className="sm:text-6xl text-3xl bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-transparent   bg-clip-text text-transparent font-bold mt-8 mb-10">
              Contact Me
            </h1>
          </motion.div>

          <form
            autoComplete="off"
            className="sm:mt-10 sm:p-10 space-y-6"
            ref={form}
            onSubmit={sendEmail}
          >
            <motion.div 
              variants={formControls}
              initial="hidden"
              animate="visible"
              custom={0}
              className="relative"
            >
              <label className="block text-gray-500 dark:text-gray-300 text-m font-bold mb-2">
                Name
              </label>
              <input
                className="shadow appearance-none border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 bg-white rounded-lg w-full py-3 px-4 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-400"
                type="text"
                name="user_name"
                placeholder="Enter your name"
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 dark:text-red-400 text-xs italic mt-1 font-medium"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div 
              variants={formControls}
              initial="hidden"
              animate="visible"
              custom={1}
              className="relative"
            >
              <label className="block text-gray-500 dark:text-gray-300 text-m font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 bg-white rounded-lg w-full py-3 px-4 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-400"
                type="email"
                name="user_email"
                placeholder="Enter your email"
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 dark:text-red-400 text-xs italic mt-1 font-medium"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div 
              variants={formControls}
              initial="hidden"
              animate="visible"
              custom={2}
              className="relative"
            >
              <label className="block text-gray-500 dark:text-gray-300 text-m font-bold mb-2">
                Message
              </label>
              <textarea
                className="shadow appearance-none border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 bg-white rounded-lg w-full py-3 px-4 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-400 resize-vertical"
                name="message"
                rows={4}
                placeholder="Enter your message"
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 dark:text-red-400 text-xs italic mt-1 font-medium"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.button
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              animate={isSubmitting ? "loading" : "idle"}
              className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden sm:flex sm:flex-1"
        >
          <ContactUs />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactForm;