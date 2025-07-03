import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroBg from "../assets/hero-bg.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "@mui/material/Slider";

import appIcon from "../assets/appdevelopment.png";
import designIcon from "../assets/design.png";
import uiuxIcon from "../assets/uiuxdesign.png";
import webIcon from "../assets/webdevelopment.png";

import expertiseIcon from "../assets/expertise.png";
import clientcentricIcon from "../assets/clientcentric.png";
import resultdrivenIcon from "../assets/resultdriven.png";
import collaborativeIcon from "../assets/collaborative.png";

import squareIcon from "../assets/square.png";
import groupIcon from "../assets/group.png";

import { FaQuestionCircle } from "react-icons/fa";

const logos = [
  { src: "https://cdn.worldvectorlogo.com/logos/zapier.svg", alt: "Zapier" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", alt: "Spotify" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg", alt: "Zoom" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png", alt: "Slack" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg", alt: "Amazon" },
  { src: "https://cdn.worldvectorlogo.com/logos/adobe-1.svg", alt: "Adobe" },
];

const services = [
  { title: "Design", description: "Crafting clean, modern designs that reflect your brand with precision.", icon: designIcon },
  { title: "Web Development", description: "Building fast, responsive websites tailored to your business goals.", icon: webIcon },
  { title: "App Development", description: "Developing smooth, high-performance mobile apps for iOS and Android.", icon: appIcon },
  { title: "UI/UX Design", description: "Designing intuitive user experiences that blend function with simplicity.", icon: uiuxIcon },
];

const features = [
  {
    title: "Expertise",
    description: "Ourr team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    icon: expertiseIcon,
  },
  {
    title: "Client-Centric Approach",
    description: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals to craft tailored solutions that drive real value.",
    icon: clientcentricIcon,
  },
  {
    title: "Results-Driven Solutions",
    description: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
    icon: resultdrivenIcon,
  },
  {
    title: "Collaborative Partnership",
    description: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
    icon: collaborativeIcon,
  },
];

const testimonials = [
  {
    title: "SquareUp has been Instrumental in Transforming our Online Presence.",
    content: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    name: "John Smith",
    role: "CEO of Chic Boutique",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "Working with SquareUp was a breeze.",
    content: "They understood our vision for a mobile app that streamlined our food delivery service. The app exceeded our expectations. SquareUp is a trusted partner we highly recommend.",
    name: "Sarah Johnson",
    role: "Founder of HungryBites.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    title: "SquareUp developed a comprehensive booking and reservation system for our event management company",
    content: "Their attention to detail and commitment to delivering a user-friendly platform was evident. The system has streamlined our operations and enhanced our clients' event experiences.",
    name: "Mark Thompson",
    role: "CEO of EventMasters",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    title: "ProTech Solutions turned to SquareUp to automate our workflow",
    content: "They delivered an exceptional custom software solution. The system significantly increased our productivity and reduced manual errors. SquareUp's professionalism made them a trusted technology partner.",
    name: "Laura Adams",
    role: "COO of ProTech Solutions.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

const Home = () => {
    
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const [budget, setBudget] = useState([15000, 500000]);
  

  return (
    <div className="bg-white text-white dark:text-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 z-10">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mb-6 z-10" data-aos="fade-up">
          Empowering Innovation <br /> with Tech-Driven Solutions
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 z-10" data-aos="fade-up">
          <span className="text-sm text-gray-300">For</span>
          {["Startups", "Enterprise Leaders", "Media & Publishers", "Social Good"].map((text, idx) => (
            <button key={idx} className="px-4 py-1.5 bg-black/50 hover:bg-black/80 hover:scale-105 transition-all text-white rounded-full text-sm">
              {text}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 z-10" data-aos="fade-up">
          <Link to="/work" className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-black hover:scale-105 transition-all">
            Our Works
          </Link>
          <Link to="/contactus" className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-md hover:scale-105 transition-all text-white">
            Contact Us
          </Link>
        </div>

        <div className="mt-6 text-sm text-gray-300 bg-black/40 px-4 py-1 rounded-full z-10" data-aos="fade-up">
          Trusted By 250+ Companies
        </div>

        <div className="w-full mt-10 bg-white/10 backdrop-blur-md border-t border-b border-white/10 py-6 z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 md:px-12">
            {logos.map((logo, i) => (
              <div key={i} className="w-full h-20 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-300">
                <img src={logo.src} alt={logo.alt} className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="text-center px-4 mt-20 mb-28">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16" data-aos="fade-up">
          Transform your brand with our innovative digital solutions...
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <div key={idx} className="p-6 border border-purple-700 rounded-2xl bg-black/40 flex flex-col justify-between h-full transition-all duration-300 hover:bg-purple-900/10 hover:shadow-[0_0_30px_3px_rgba(168,85,247,0.6)]" data-aos="zoom-in">
              <div className="flex items-center justify-center w-16 h-16 bg-black rounded-lg mb-6 shadow-lg border border-purple-800 mx-auto transition-transform hover:scale-110">
                <img src={service.icon} alt={service.title} className="h-8 w-8 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 text-sm">{service.description}</p>
              <Link to="/services" className="mt-auto px-5 py-2 bg-black border border-white/10 rounded-md hover:bg-white hover:text-black transition-all duration-300 shadow-md inline-block text-center">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/40 rounded-full blur-[250px] z-0 pointer-events-none"></div>

        <section className="relative px-4 py-20 z-10">
          <div className="relative max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Why Choose KreaTechHub ?</h2>
            <p className="text-gray-300" data-aos="fade-up">
      A team of skilled professionals committed to quality, innovation, and measurable impact.            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto text-left">
            {features.map((item, index) => (
              <div key={index} className={`flex gap-4 items-start p-6 border-t border-l border-white/10 ${index % 2 === 1 ? 'border-r' : ''} ${index >= 2 ? 'border-b' : ''}`} data-aos="fade-up">
                <div className="min-w-[60px] min-h-[60px] bg-black border border-purple-700 rounded-xl flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                  <img src={item.icon} alt={item.title} className="h-6 w-6 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative px-4 pb-20 mt-20 z-10">
          <div className="relative max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">What our Clients say About us</h2>
            <p className="text-gray-300" data-aos="fade-up">
              At KreaTechHub, we take pride in delivering impactful digital solutions that help our clients grow. Here’s what they say about working with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/30 p-6 rounded-2xl border border-white/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between" style={{ minHeight: "370px" }} data-aos="fade-up">
                <div>
                  <h3 className="text-md font-semibold text-purple-400 mb-3">{testimonial.title}</h3>
                  <p className="text-sm text-gray-300 mb-5">{testimonial.content}</p>
                </div>
                <div className="mt-4 bg-black/40 p-4 rounded-lg border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-10 w-10 rounded-full object-cover border border-purple-600" />
                    <div className="text-sm">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                  <button className="px-4 py-1 bg-white text-black text-sm rounded-md hover:bg-purple-500 hover:text-white transition">
                    Open Website
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="relative px-4 pb-24 z-10">
          <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[200px] z-0 pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
            <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Frequently Asked Questions</h2>
            <p className="text-gray-300" data-aos="fade-up">
              Have questions? Here are some common queries about our services and process at KreaTechHub.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            {[ 
              {
                question: "What services does KreaTechHub provide?",
                answer: "We specialize in website and web system development, mobile applications, custom software solutions, digital marketing, and UI/UX design—offering end-to-end IT services for your business growth.",
              },
              {
                question: "How long does a typical project take?",
                answer: "Project duration varies depending on complexity, but most websites and apps are delivered within 2–8 weeks.",
              },
              {
                question: "Can you update or redesign our current website or system?",
                answer: "Yes. We specialize in redesigning and optimizing legacy systems to meet modern standards with improved performance.",
              },
              {
                question: "What industries do you cater to?",
                answer: "We serve a wide range of industries including tech startups, healthcare, hospitality, logistics, e-commerce, education, and nonprofits.",
              },
              {
                question: "Do you offer post-launch maintenance and support?",
                answer: "Absolutely. We provide tailored support plans for updates, performance monitoring, and long-term scalability.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-black/30 p-6 rounded-xl border border-purple-700 hover:shadow-[0_0_20px_3px_rgba(168,85,247,0.3)] transition-all flex items-start gap-4" data-aos="fade-up">
                <div className="mt-1 text-purple-400">
                  <FaQuestionCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Final CTA Section */}
      <section className="relative px-4 py-28 text-center bg-[#120E23] overflow-hidden z-10">
        <div className="relative max-w-xl mx-auto">
          <img src={squareIcon} alt="Cube Icon" className="w-14 h-14 mx-auto mb-6" data-aos="fade-down" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-aos="fade-up">
            Thank you for your Interest in <span className="text-purple-500">KreaTech Hub</span>.
          </h2>
          <p className="text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="100">
            We would love to hear from you and discuss how we can help bring your digital ideas to life.
            Here are the different ways you can get in touch with us.
          </p>
          <Link to="/contactus">
            <button className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-md transition-all duration-300 text-white" data-aos="zoom-in">
              Start Project
            </button>
          </Link>
        </div>
        <img src={groupIcon} alt="Decorative Grid" className="absolute top-10 right-10 w-16 h-16 opacity-50" />
      </section>

      {/* Contact Form Section */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-4xl mx-auto bg-[#141414] p-8 rounded-2xl shadow-lg border border-white/10 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Type here"
                className="w-full bg-[#1e1e1e] text-white border-b border-gray-600 outline-none py-3 px-4 rounded-md focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Type here"
                className="w-full bg-[#1e1e1e] text-white border-b border-gray-600 outline-none py-3 px-4 rounded-md focus:border-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-semibold mb-4">Why are you contacting us?</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Web Design", "Mobile App Design", "Software", "Others"].map((option, idx) => (
                <label key={idx} className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <input type="checkbox" className="form-checkbox accent-purple-500 h-4 w-4" />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-semibold mb-2">Your Budget</label>
            <p className="text-gray-400 text-sm mb-4">Slide to indicate your budget range</p>
            <Slider
              value={budget}
              onChange={(e, newValue) => setBudget(newValue)}
              min={0}
              max={500000}
              step={1000}
              color="secondary"
              valueLabelDisplay="off"
              sx={{
                color: "#a855f7",
                '& .MuiSlider-thumb': {
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: '0 0 0 8px rgba(168, 85, 247, 0.16)',
                  },
                },
              }}
            />

            <div className="flex justify-between text-gray-300 text-sm mt-2">
              <span>Rs{budget[0]}</span>
              <span>Rs{budget[1]}</span>
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-semibold mb-2">Your Message</label>
            <textarea
              placeholder="Type here"
              rows="4"
              className="w-full bg-[#1e1e1e] text-white border-b border-gray-600 outline-none py-3 px-4 rounded-md focus:border-purple-500 resize-none"
            />
          </div>

          <div className="text-center pt-6">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition">
              Submit
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
