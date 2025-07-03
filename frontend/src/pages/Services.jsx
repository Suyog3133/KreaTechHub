import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaCube, FaReact, FaNodeJs, FaPython, FaUserFriends, FaSitemap, FaMousePointer,
  FaVectorSquare, FaHandPointer, FaPaintBrush, FaFont, FaDesktop, FaCertificate,
  FaBullseye, FaProjectDiagram, FaIdBadge, FaCode, FaServer, FaCog, FaLock,
  FaMobileAlt, FaExchangeAlt, FaMagic, FaVial, FaDatabase, FaPlusSquare, FaPlug,
  FaRedoAlt, FaTasks, FaStream, FaPeopleArrows, FaShieldAlt, FaSyncAlt, FaColumns,
  FaChalkboardTeacher, FaCommentDots, FaPuzzlePiece, FaUserCheck, FaChartLine,
  FaBug
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiAdobeillustrator, SiAdobephotoshop
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

const Card = ({ icon, title }) => (
  <div
    data-aos="fade-up"
    className="bg-[#141414] p-6 rounded-lg shadow-md hover:shadow-purple-500/20 transition"
  >
    <div className="text-purple-500 mb-4 text-3xl">{icon}</div>
    <h4 className="text-md font-semibold text-gray-200">{title}</h4>
  </div>
);

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const orbitIcons = [
    { icon: <SiMongodb className="text-green-500 text-4xl" />, radius: 80 },
    { icon: <SiExpress className="text-gray-300 text-4xl" />, radius: 110 },
    { icon: <FaReact className="text-cyan-400 text-4xl" />, radius: 140 },
    { icon: <FaNodeJs className="text-green-600 text-4xl" />, radius: 170 },
    { icon: <FaPython className="text-yellow-300 text-4xl" />, radius: 200 },
    { icon: <SiAdobephotoshop className="text-blue-400 text-4xl" />, radius: 230 },
    { icon: <SiAdobeillustrator className="text-orange-400 text-4xl" />, radius: 260 },
  ];

  return (
    <>
      <Navbar />
      <section className="relative bg-[#0e0e0e] text-white px-4 sm:px-6 py-20 overflow-hidden">
        <div className="absolute -left-40 top-1/3 w-80 h-80 sm:w-96 sm:h-96 bg-purple-700/30 blur-3xl rounded-full z-0" />
        <div className="absolute -right-40 top-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-purple-700/30 blur-3xl rounded-full z-0" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-left w-full lg:w-1/2 pl-2 sm:pl-4 lg:pl-20">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4"
              data-aos="fade-down"
            >
              Our Services
            </h1>
            <p className="text-gray-300 text-base sm:text-lg" data-aos="fade-up">
              Innovative digital services that elevate your brand and connect you with your audience.
            </p>
          </div>

          <div
            className="relative w-[600px] max-w-full aspect-square mx-auto px-4 sm:px-0 orbit-container-scale"
            style={{ transformOrigin: "center center" }}
          >
            {orbitIcons.map((item, i) => (
              <div
                key={`ring-${i}`}
                className="absolute border border-dotted border-purple-500/30 rounded-full"
                style={{
                  width: `${item.radius * 2}px`,
                  height: `${item.radius * 2}px`,
                  top: `calc(50% - ${item.radius}px)`,
                  left: `calc(50% - ${item.radius}px)`,
                }}
              />
            ))}

            <div className="absolute inset-0">
              {orbitIcons.map((item, i) => {
                const angle = (360 / orbitIcons.length) * i;
                const duration = 10 + Math.random() * 8;
                const direction = Math.random() > 0.5 ? "normal" : "reverse";

                return (
                  <div
                    key={`icon-${i}`}
                    className="orbit-wrapper"
                    style={{
                      transform: `rotate(${angle}deg)`,
                      animation: `orbit-${i} ${duration}s linear infinite`,
                      animationDirection: direction,
                    }}
                  >
                    <div
                      className="orbit-icon glow"
                      style={{
                        "--radius": `${item.radius}px`,
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* DESIGN SECTION */}
        <div className="relative z-10 max-w-6xl mx-auto mt-20 space-y-20 px-2 sm:px-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Design</h2>
            <p className="text-gray-400 mb-10 max-w-3xl">
              At KreaTechHub, our design team crafts visually compelling, user-focused designs that bring your brand to life.
            </p>

            <h3 className="text-lg sm:text-xl text-gray-400 mb-6">User Experience (UX) Design</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card icon={<FaUserFriends />} title="User Research and Persona Development" />
              <Card icon={<FaSitemap />} title="Information Architecture and Wireframing" />
              <Card icon={<FaMousePointer />} title="Interactive Prototyping and User Testing" />
              <Card icon={<FaVectorSquare />} title="UI Design and Visual Branding" />
            </div>

            <h3 className="text-lg sm:text-xl text-gray-400 mb-6">User Interface (UI) Design</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card icon={<FaHandPointer />} title="Intuitive Interface Design" />
              <Card icon={<FaPaintBrush />} title="Custom Iconography and Illustration" />
              <Card icon={<FaFont />} title="Typography and Color Selection" />
              <Card icon={<FaDesktop />} title="Responsive Design" />
            </div>

            <h3 className="text-lg sm:text-xl text-gray-400 mb-6">Branding and Identity</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card icon={<FaCertificate />} title="Logo and Identity Development" />
              <Card icon={<FaBullseye />} title="Brand Strategy and Positioning" />
              <Card icon={<FaProjectDiagram />} title="Brand Guidelines" />
              <Card icon={<FaIdBadge />} title="Marketing Collateral" />
            </div>
          </div>

          {/* DEVELOP SECTION */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Develop</h2>
            <p className="text-gray-400 mb-10 max-w-3xl">
              Our development team builds robust, scalable web and mobile applications using the latest technologies to meet your business needs.
            </p>

            <h3 className="text-lg sm:text-xl text-gray-400 mb-6">Web Development</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card icon={<FaCode />} title="Front-End (HTML, CSS, JS)" />
              <Card icon={<FaServer />} title="Back-End (PHP, Python)" />
              <Card icon={<FaCog />} title="CMS (WordPress, Drupal)" />
              <Card icon={<FaLock />} title="E-Commerce (Shopify, Magento)" />
            </div>

            <h3 className="text-lg sm:text-xl text-gray-400 mb-6">Mobile App Development</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card icon={<FaMobileAlt />} title="iOS & Android Development" />
              <Card icon={<FaExchangeAlt />} title="Cross-Platform (Flutter, RN)" />
              <Card icon={<FaMagic />} title="App Prototyping & UX" />
              <Card icon={<FaVial />} title="Testing & Deployment" />
            </div>

            <h3 className="text-lg sm:text-xl text-gray-400 mb-6">Custom Software</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card icon={<FaDatabase />} title="Enterprise Solutions" />
              <Card icon={<FaPlusSquare />} title="Custom Web Apps" />
              <Card icon={<FaPlug />} title="API Integrations" />
              <Card icon={<FaRedoAlt />} title="Legacy System Modernization" />
            </div>
          </div>

          {/* DELIVER SECTION */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Deliver</h2>
            <p className="text-gray-400 mb-10 max-w-3xl">
              Our project management team ensures timely delivery with precision, turning your vision into impactful digital solutions.
            </p>

            <h3 className="text-lg sm:text-xl text-gray-400 mb-6">Planning and Scoping</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card icon={<FaTasks />} title="Requirements Gathering" />
              <Card icon={<FaStream />} title="Project Roadmapping" />
              <Card icon={<FaPeopleArrows />} title="Task Assignment" />
              <Card icon={<FaShieldAlt />} title="Risk Mitigation" />
            </div>

            <h3 className="text-lg sm:text-xl text-gray-400 mb-6">Agile Development</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card icon={<FaSyncAlt />} title="Sprint Planning" />
              <Card icon={<FaColumns />} title="Scrum/Kanban Boards" />
              <Card icon={<FaChalkboardTeacher />} title="Demos & Updates" />
              <Card icon={<FaCommentDots />} title="Continuous Feedback" />
            </div>

            <h3 className="text-lg sm:text-xl text-gray-400 mb-6">Testing & QA</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card icon={<FaPuzzlePiece />} title="Test Execution" />
              <Card icon={<FaUserCheck />} title="Usability Testing" />
              <Card icon={<FaChartLine />} title="Performance Testing" />
              <Card icon={<FaBug />} title="Bug Fixes" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#1C162C] text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div
            className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-4xl"
            data-aos="zoom-in"
          >
            <FaCube />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Let us Bring your Ideas to Life in the Digital World.
          </h2>
          <p
            className="text-gray-400 mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            No matter which services you choose, we are committed to delivering
            exceptional results that exceed your expectations.
          </p>
          <Link to="/contactus">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Start Project
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
