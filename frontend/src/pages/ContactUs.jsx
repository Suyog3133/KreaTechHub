import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  FaQuestionCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "How can I get in touch?",
    answer: "You can fill out the contact form or email us directly at contact@yourdomain.com.",
  },
  {
    question: "What are your working hours?",
    answer: "Our team is available Sunday to Friday, 10 AM to 6 PM.",
  },
  {
    question: "Where are you located?",
    answer: "We are located in Syaulibazar,Chitwan. Check the contact info down.",
  },
  {
    question: "Do you offer remote consultations?",
    answer: "Yes, we offer remote consultations via video call. Just ask in the form!",
  },
];

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />

      {/* Hero + Form + Info Section */}
      <section className="bg-[#0e0e0e] text-white py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
          {/* Contact Info + Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              data-aos="fade-right"
              className="bg-[#120e24] w-full h-full p-8 sm:p-10 flex flex-col justify-between border border-purple-700 shadow-[0_0_20px_2px_rgba(168,85,247,0.15)] rounded-lg
                mt-4 md:mt-0"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-6">Contact Information</h2>
                <div className="space-y-4 text-gray-300 text-base sm:text-lg">
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-pink-500 mt-1" />
                    <p>Syaulibazar, Chitwan, Nepal</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaPhoneAlt className="text-pink-500 mt-1" />
                    <p>+977-9811240470/9845047014</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaEnvelope className="text-pink-500 mt-1" />
                    <p>contact@yourdomain.com</p>
                  </div>
                  <p className="mt-6 text-sm sm:text-base text-gray-400">
                    We usually reply within 24 hours. Feel free to reach out for any queries, partnership requests, or support!
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-8 sm:mt-10 justify-start sm:justify-start text-2xl sm:text-3xl">
                <a href="#" className="text-purple-400 hover:text-pink-500 transition"><FaFacebookF /></a>
                <a href="#" className="text-purple-400 hover:text-pink-500 transition"><FaLinkedinIn /></a>
                <a href="#" className="text-purple-400 hover:text-pink-500 transition"><FaTwitter /></a>
                <a href="#" className="text-purple-400 hover:text-pink-500 transition"><FaInstagram /></a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              data-aos="fade-left"
              className="bg-[#120e24] w-full h-full p-8 sm:p-10 border border-purple-700 shadow-[0_0_20px_2px_rgba(168,85,247,0.15)] rounded-lg"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-400">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 rounded-md bg-[#1a1a1a] border border-purple-600 focus:border-pink-500 focus:outline-none transition text-base sm:text-lg"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 rounded-md bg-[#1a1a1a] border border-purple-600 focus:border-pink-500 focus:outline-none transition text-base sm:text-lg"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 rounded-md bg-[#1a1a1a] border border-purple-600 focus:border-pink-500 focus:outline-none transition resize-none text-base sm:text-lg"
                ></textarea>
                <button
                  type="submit"
                  className="bg-purple-700 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-md w-full transition text-lg sm:text-xl"
                  disabled={submitted}
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="w-full" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-purple-400 text-center">Frequently Asked Questions</h2>
            <div className="max-w-5xl mx-auto space-y-5 sm:space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 bg-[#1a1a1a] p-5 sm:p-6 rounded-lg border border-purple-700 shadow-sm hover:shadow-purple-500 transition"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 + 0.2 }}
                >
                  <FaQuestionCircle className="text-purple-400 text-3xl flex-shrink-0 mb-2 sm:mb-0 mt-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">{faq.question}</h3>
                    <p className="text-gray-300 text-sm sm:text-base">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section with your Location */}
      <section className="bg-[#0e0e0e] text-white py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl border border-purple-700"
            data-aos="fade-up"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <iframe
              title="KreaTechHub Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4169242819935!2d84.43292667533812!3d27.673506126983497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb28641b411f%3A0xb99ae22d12910a2!2sKreaTechHub!5e0!3m2!1sen!2snp!4v1751453600023!5m2!1sen!2snp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
