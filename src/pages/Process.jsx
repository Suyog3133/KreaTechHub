import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaLightbulb,
  FaUserFriends,
  FaPencilRuler,
  FaCode,
  FaClipboardCheck,
  FaRocket,
  FaSearch,
  FaDraftingCompass,
  FaPaintBrush,
  FaCodeBranch,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Link imported

const steps = [
  {
    icon: <FaLightbulb />,
    title: "Idea Validation",
    description: "We evaluate your concept’s market potential and technical feasibility to ensure a strong foundation for success.",
  },
  {
    icon: <FaUserFriends />,
    title: "Team & MVP Planning",
    description: "We define your Minimum Viable Product scope and assemble a skilled team to bring your vision to life efficiently.",
  },
  {
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    description: "We create intuitive and engaging interfaces that provide seamless user experiences and elevate your product.",
  },
  {
    icon: <FaCode />,
    title: "Product Development",
    description: "We develop scalable products using modern technologies to ensure performance, reliability, and growth.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Testing & Launch Preperation",
    description: "We conduct thorough testing and iterations to ensure your product is flawless and launch-ready.",
  },
  {
    icon: <FaRocket />,
    title: "Launch & Growth",
    description: "We successfully launch your startup and provide ongoing support to fuel sustained growth.",
  },
];

const features = [
  { icon: "👥", title: "Client-Centric Approach" },
  { icon: "📊", title: "Data-Driven Solutions" },
  { icon: "💬", title: "Transparent Communication" },
];

const floatingIcons = [
  {
    icon: <FaSearch />,
    style: { top: "10%", left: "15%", fontSize: "36px", animationDelay: "0s" },
    title: "Discovery",
  },
  {
    icon: <FaDraftingCompass />,
    style: { top: "40%", right: "10%", fontSize: "40px", animationDelay: "1.2s" },
    title: "Planning",
  },
  {
    icon: <FaPaintBrush />,
    style: { bottom: "25%", left: "25%", fontSize: "36px", animationDelay: "0.7s" },
    title: "Design",
  },
  {
    icon: <FaCodeBranch />,
    style: { bottom: "15%", right: "20%", fontSize: "38px", animationDelay: "1.5s" },
    title: "Development",
  },
  {
    icon: <FaCheck />,
    style: { top: "25%", left: "45%", fontSize: "32px", animationDelay: "2s" },
    title: "Testing",
  },
  {
    icon: <FaRocket />,
    style: { top: "50%", right: "40%", fontSize: "40px", animationDelay: "2.5s" },
    title: "Launch",
  },
];

const Process = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    fetch("https://lottie.host/5fe48dc1-52d6-4e63-a337-b7d6a4a20d12/XUZlfuNqYi.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(console.error);
  }, []);

  return (
    <div className="bg-[#0e0e0e] text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 bg-gradient-to-br from-purple-800/20 via-purple-900/10 to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Transparent. Efficient. Collaborative.
              <br className="hidden md:block" />
              <span className="text-purple-400">Creative. Functional. User-Centric.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              We follow a structured workflow that ensures every project moves smoothly from discovery to delivery—keeping you involved and your goals front and center.
            </p>

            {/* Button with motion animation + Link */}
            <Link to="/contactus">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="inline-flex items-center mt-8 bg-purple-600 hover:bg-purple-700 transition px-8 py-3 text-white text-lg font-medium rounded-full shadow-md hover:shadow-purple-500/40 cursor-pointer"
              >
                Start Your Design Project&nbsp;
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.div>
            </Link>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center items-center" data-aos="fade-left" style={{ minHeight: "360px" }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/20 via-pink-500/10 to-purple-600/10 blur-3xl animate-pulse -z-10" />
            {floatingIcons.map(({ icon, style, title }, i) => (
              <div
                key={i}
                title={title}
                className="absolute text-purple-400 opacity-80 animate-float cursor-default"
                style={style}
              >
                {icon}
              </div>
            ))}
            {animationData && (
              <Lottie
                animationData={animationData}
                loop
                autoplay
                style={{ height: "360px", width: "100%", maxWidth: "400px" }}
              />
            )}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Our Detailed Web Design Process</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-center mb-12">
          Each step is carefully crafted to ensure your project is both beautiful and high-performing.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-2xl border border-purple-600/20 shadow-md hover:shadow-purple-500/20 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-purple-600 text-white text-2xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The Strength Behind Our Launch Process</h2>
          <p className="text-gray-400">Crafted for growth, validated by experience, designed for the future.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-purple-500/10 text-center shadow hover:shadow-purple-500/20 transition"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="text-purple-400 text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-purple-400">{feature.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your digital journey?</h2>
        <Link to="/contactus">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="inline-flex items-center mt-6 bg-purple-600 hover:bg-purple-700 transition px-8 py-3 text-white text-lg font-medium rounded-full shadow-md hover:shadow-purple-500/40 cursor-pointer"
          >
            We’re here to help&nbsp;
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <FaArrowRight />
            </motion.span>
          </motion.div>
        </Link>
      </section>

      <Footer />

      {/* Floating animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Process;
