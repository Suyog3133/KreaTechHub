import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCube,
  FaCalendarAlt,
  FaCity,
  FaHospitalAlt,
  FaTint,
  FaBusAlt,
  FaVenus,
} from "react-icons/fa";

import website1 from "../assets/website1.png";
import website2 from "../assets/website2.png";
import website3 from "../assets/website3.png";
import website4 from "../assets/website4.png";
import website5 from "../assets/website5.png";
import website6 from "../assets/website6.png";

import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import design4 from "../assets/design4.png";
import design5 from "../assets/design5.png";
import design6 from "../assets/design6.png";

import software1 from "../assets/software1.png";
import software2 from "../assets/software2.png";

// Tech Logos
const techLogos = [
  { name: "MongoDB", src: "https://img.icons8.com/color/480/mongodb.png" },
  { name: "Express", src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  { name: "React", src: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Node.js", src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "Python", src: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "AWS", src: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg" },
  { name: "Photoshop", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1024px-Adobe_Photoshop_CC_icon.svg.png" },
  { name: "Illustrator", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1024px-Adobe_Illustrator_CC_icon.svg.png" },
];

const logoPositions = [
  { top: "22%", left: "10%" },
  { top: "5%", left: "50%" },
  { top: "22%", right: "10%" },
  { top: "50%", left: "5%" },
  { top: "50%", right: "5%" },
  { bottom: "15%", left: "10%" },
  { bottom: "5%", left: "50%" },
  { bottom: "15%", right: "10%" },
];

const categories = [
  "All",
  "Website Development",
  "Mobile Application",
  "Graphic Designs",
  "Custom Software Development",
];

const websiteProjects = [
  { category: "Website Development", title: "Home Page of Digital Markeitng Agency", image: website1 },
  { category: "Website Development", title: "Hero Section for Services ", image: website2 },
  { category: "Website Development", title: "Another Page Design for Marketing Agency", image: website3 },
  { category: "Website Development", title: "Another Page Design for Marketing Agency", image: website4 },
  { category: "Website Development", title: "Billing System Web Application", image: website5 },
  { category: "Website Development", title: "Startup Website", image: website6 },
];

const designProjects = [
  { category: "Graphic Designs", title: "Consultancy Design", image: design1 },
  { category: "Graphic Designs", title: "Paint Company Design", image: design2 },
  { category: "Graphic Designs", title: "Social Media Design", image: design3 },
  { category: "Graphic Designs", title: "Education Institute Design", image: design4 },
  { category: "Graphic Designs", title: "Paint Company Design", image: design5 },
  { category: "Graphic Designs", title: "Social Media Post", image: design6 },
];

const softwareProjects = [
  { category: "Custom Software Development", title: "Restaurant POS Software", image: software1 },
  { category: "Custom Software Development", title: "Hotel Management Software", image: software2 },
  { category: "Custom Software Development", title: "Resturant Management System", image: website5 },
];

const mobileProjects = [
  { category: "Mobile Application", title: "Mobile App For Agency", image: website1 },
  { category: "Mobile Application", title: "Mobile App For Agency", image: website3 },
  { category: "Mobile Application", title: "Mobile App for Startup", image: website6 },
];

const allMixedProjects = [
  { category: "Website Development", title: "Startup Website", image: website6 },
  { category: "Graphic Designs", title: "Education Institute Design", image: design4 },
  { category: "Custom Software Development", title: "Restaurant POS Software", image: software1 },
  { category: "Website Development", title: "Home Page of Digital Markeitng Agency", image: website1 },
  { category: "Graphic Designs", title: "Paint Company Design", image: design2 },
  { category: "Custom Software Development", title: "Hotel Management Software", image: software2 },
];

const readyToDeployProjects = [
  {
    name: "Event Planner",
    description: "Comprehensive event management system that organizes venues, attendee counts, and essential logistics to ensure seamless event execution.",
    icon: <FaCalendarAlt className="text-purple-400 text-2xl" />,
  },
  {
    name: "Metropolitan City Management System",
    description: "Advanced municipal management platform enabling citizen profile management and direct communication within city organizations.",
    icon: <FaCity className="text-purple-400 text-2xl" />,
  },
  {
    name: "Hospital Booking System (MediQuick)",
    description: "Efficient patient appointment system facilitating doctor availability tracking and streamlined booking processes.",
    icon: <FaHospitalAlt className="text-purple-400 text-2xl" />,
  },
  {
    name: "Blood Donation Management System (Blood Link)",
    description: "Connects donors and recipients by matching blood groups, promoting timely and life-saving blood donations.",
    icon: <FaTint className="text-purple-400 text-2xl" />,
  },
  {
    name: "Public Transport Management System (Sahrathi)",
    description: "Real-time bus occupancy and location tracking system enhancing public transport transparency and convenience.",
    icon: <FaBusAlt className="text-purple-400 text-2xl" />,
  },
  {
    name: "Sanitary Pad Vending Machine (Sahayogi Hat)",
    description: "Automated sanitary product dispenser ensuring easy and timely access to sanitary pads.",
    icon: <FaVenus className="text-purple-400 text-2xl" />,
  },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("Website Development");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const getProjects = () => {
    switch (selectedCategory) {
      case "Website Development":
        return websiteProjects;
      case "Graphic Designs":
        return designProjects;
      case "Custom Software Development":
        return softwareProjects;
      case "Mobile Application":
        return mobileProjects;
      case "All":
        return allMixedProjects;
      default:
        return [];
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#0e0e0e] text-white flex flex-col justify-center items-center overflow-visible" style={{ minHeight: "80vh", paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div className="absolute top-[-80px] left-0 right-0 mx-auto w-[280px] h-[280px] bg-purple-600 rounded-full blur-3xl opacity-30 z-0" />
        <div className="absolute bottom-[-80px] left-0 right-0 mx-auto w-[280px] h-[280px] bg-pink-600 rounded-full blur-3xl opacity-30 z-0" />

        <div className="relative z-10 max-w-3xl w-full px-6 md:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" data-aos="fade-down">
            Our Work Speaks <br /> Louder Than Words
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-gray-300 text-base sm:text-lg" data-aos="fade-up">
            From startups to enterprises, we collaborate with ambitious brands to craft impactful digital products that drive real results across industries.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap" data-aos="fade-up" data-aos-delay="100">
            <Link to="/contactus" className="px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition">
              Start Your Project
            </Link>
            <Link to="/services" className="px-5 py-3 border border-white text-white hover:bg-white hover:text-black rounded-md font-medium transition">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {techLogos.map((logo, idx) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              loading="lazy"
              draggable={false}
              className="absolute w-12 sm:w-14 filter brightness-90 animate-blink"
              style={{
                ...logoPositions[idx],
                transform: "translate(-50%, -50%)",
                userSelect: "none",
                zIndex: 5,
                animationDelay: `${idx * 0.5}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#0e0e0e] text-white pt-16 pb-10 px-4 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Project Showcase</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            A selection of projects that highlight our expertise across industries and platforms.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white"
                    : "border-purple-600 text-purple-400 hover:bg-purple-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {getProjects()
              .slice(0, 6)
              .map((project, idx) => (
                <div
                  key={idx}
                  className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition"
                  data-aos="zoom-in"
                >
                  <div className="w-full h-52 bg-black">
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-400">
                      A showcase project under <span className="text-purple-400">{project.category}</span>.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Ready to Deploy Web Applications */}
      <section className="bg-[#0e0e0e] pt-6 pb-20 px-6 md:px-12 text-white">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready-to-Deploy Web Applications</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Explore expertly crafted web apps built to streamline your business and engage your users—ready for immediate launch.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {readyToDeployProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-purple-600/20 shadow-md hover:shadow-purple-500/30 transition"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center gap-4 mb-3">
                {project.icon}
                <h3 className="text-xl font-semibold text-purple-400">{project.name}</h3>
              </div>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#120E24] py-20 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="w-12 h-12 mx-auto bg-purple-600 rounded-xl flex items-center justify-center text-2xl">
            <FaCube />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold leading-snug">
            We’re excited to hear from you! Whether you have a big idea or just want to say hello, let’s start a conversation.
          </h2>
          <p className="text-gray-400 text-sm">We’re available Sunday to Friday, 10:00 AM to 6:00 PM.</p>
          <Link
            to="/contactus"
            className="inline-block mt-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition"
          >
            Create With Us
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-blink {
          animation: blink 3s infinite ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Work;
