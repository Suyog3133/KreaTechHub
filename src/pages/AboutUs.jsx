import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  FaCode, FaMobileAlt, FaPaintBrush, FaCloud, FaCogs, FaRobot, FaHandshake,
  FaShieldAlt, FaBolt, FaUserTie, FaUsers, FaQuoteLeft, FaBullhorn,
  FaEye, FaBookOpen
} from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const services = [
    { icon: <FaCode />, title: "Web Development" },
    { icon: <FaMobileAlt />, title: "Mobile App Development" },
    { icon: <FaPaintBrush />, title: "UI/UX Design" },
    { icon: <FaCloud />, title: "DevOps & Cloud" },
    { icon: <FaCogs />, title: "Software Engineering" },
    { icon: <FaRobot />, title: "AI & Automation" },
    { icon: <FaBullhorn />, title: "Digital Marketing" },
  ];

  const values = [
    { icon: <FaBolt />, title: "Innovation" },
    { icon: <FaShieldAlt />, title: "Reliability" },
    { icon: <FaUserTie />, title: "Transparency" },
    { icon: <FaCogs />, title: "Agile Thinking" },
    { icon: <FaHandshake />, title: "Client-Centric Focus" },
  ];

  const techStack = [
    "React", "Node.js", "MongoDB", "Express", "Docker", "AWS", "Figma", "Next.js", "TailwindCSS",
    "MERN Stack", "Cloud", "API Development", "DevOps", "Python", "Digital Marketing"
  ];

  const team = [
    { name: "Bikash Acharya", roles: ["Founder", "CEO", "Full Stack Developer"] },
    { name: "Suyog Poudel", roles: ["Founder", "Managing Director", "Frontend Developer"] },
    { name: "Anamol Sitaula", roles: ["Founder", "Department Head", "Backend Developer"] },
    { name: "Kiran Pandey", roles: ["Founder", "Backend Developer", "Network Security"] },
    { name: "Amrit Gyawaki", roles: ["Founder", "Finance and Operation Head"] },
    { name: "Pranil Gurung", roles: ["Founder", "Frontend Developer"] },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Founder, StartNow",
      quote: "This team turned our vision into a reality with incredible speed and quality.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sara Williams",
      role: "COO, MediHealth",
      quote: "Professional, responsive, and results-driven. Highly recommended!",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "David Kim",
      role: "Product Manager, FinNova",
      quote: "They exceeded expectations in every phase. A solid partner for innovation.",
      img: "https://randomuser.me/api/portraits/men/68.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="relative bg-[#0e0e0e] text-white py-28 px-6 text-center overflow-hidden">
        <div className="absolute -top-32 -left-40 w-96 h-96 bg-purple-700 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute -bottom-32 -right-40 w-96 h-96 bg-pink-600 rounded-full blur-[120px] opacity-30"></div>

        {/* HERO */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Empowering Digital Transformation<br /> with Scalable, Future-Ready Solutions.
          </motion.h1>
          <motion.p className="mt-6 text-lg text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
            We craft secure, modern, and scalable tech solutions that fuel innovation and drive business growth.
          </motion.p>
          <motion.div className="mt-10 flex justify-center gap-4 flex-wrap" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}>
            <span className="bg-purple-700/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              MERN Stack • Cloud • AI • DevOps • Software • Digital Marketing  
            </span>
          </motion.div>
        </div>

        {/* MISSION + VISION + STORY */}
        <div className="relative z-10 max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-12 text-left text-white" data-aos="fade-up">
          <div className="bg-[#120e24] p-6 rounded-xl shadow hover:shadow-purple-500/30 transition">
            <FaBullhorn className="text-3xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-purple-300">Our Mission</h3>
            <p className="text-gray-300">To deliver secure, scalable, and user-centric solutions that solve real-world problems.Build lasting relationships based on trust, value, and results</p>
          </div>
          <div className="bg-[#120e24] p-6 rounded-xl shadow hover:shadow-pink-500/30 transition">
            <FaEye className="text-3xl text-pink-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-pink-300">Our Vision</h3>
            <p className="text-gray-300">To become Nepal's leading IT solutions provider, recognized globally for innovation, quality, and customer satisfaction.</p>
          </div>
          <div className="bg-[#120e24] p-6 rounded-xl shadow hover:shadow-indigo-500/30 transition">
            <FaBookOpen className="text-3xl text-indigo-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-indigo-300">Our Story</h3>
            <p className="text-gray-300">Founded by six college friends, KreaTechHub delivers innovative IT solutions combining passion, creativity, and expertise.</p>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="mt-24 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What We Do</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6">
            {services.map((s, i) => (
              <div key={i} className="flex flex-col items-center p-4 bg-[#1a1a2e] rounded-lg transition transform hover:scale-105 hover:bg-purple-700/30 duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="text-3xl text-purple-400 mb-2">{s.icon}</div>
                <p className="text-sm font-medium">{s.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="mt-24 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {values.map((val, i) => (
              <div key={i} className="flex flex-col items-center p-4 bg-[#1a1a2e] rounded-lg transition transform hover:scale-105 hover:bg-pink-600/30 duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="text-3xl text-pink-400 mb-2">{val.icon}</div>
                <p className="text-sm font-medium">{val.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM */}
        <div className="mt-24 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="relative bg-[#1a1a2e] p-6 rounded-xl overflow-hidden group transition transform hover:scale-105 duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-full h-40 bg-gray-800 rounded-md mb-4" />
                <h4 className="text-lg font-semibold z-10">{member.name}</h4>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.roles.map((role, idx) => (
                    <p key={idx} className="text-sm text-gray-200">{role}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-24 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#1a1a2e] p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition" data-aos="fade-up" data-aos-delay={i * 100}>
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
                <FaQuoteLeft className="text-purple-400 text-2xl mb-3" />
                <p className="text-gray-300 mb-4">"{t.quote}"</p>
                <h4 className="font-semibold text-white">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TECH STACK */}
        <div className="mt-24 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Our Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <div key={i} className="px-5 py-2 border border-purple-500 rounded-full text-sm text-purple-300 hover:bg-purple-700/30 transition" data-aos="fade-up" data-aos-delay={i * 100}>
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Let’s build something amazing together.</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/contactus" className="bg-purple-700 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-800 transition">
              Start a Project
            </a>
            <a href="/work" className="border border-purple-700 px-6 py-3 rounded-md font-medium hover:bg-purple-700 hover:text-white transition">
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
