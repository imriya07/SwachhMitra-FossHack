import React, { useState } from 'react';
import Navbar from "../component/MainNavbar";
import "./styles/Home.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const Impact = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const impactData = [
    {
      title: "🌱 Connecting Communities for a Cleaner India",
      content:
        "We have successfully organized multiple events that brought communities together, raised awareness, and made a lasting impact on environmental and social causes.",
    },
    {
      title: "♻️ Empowering Volunteers Through Technology",
      content:
        "With an easy-to-use interface and real-time event updates, SwachhMitra has empowered volunteers to take action like never before. Over the past months, more than 500 cleanup drives have been organized through the platform, covering parks, beaches, streets, and heritage sites. This tech-driven approach has not only increased participation but has also ensured that cleanup efforts are well-coordinated and impactful.",
    },
    {
      title: "🌍 Significant Environmental Impact Across Regions",
      content:
        "SwachhMitra’s initiatives have led to the removal of over 50 tons of waste from public spaces, with a significant portion being recycled. Cities like Mumbai, Delhi, Bangalore, and Chennai have seen noticeable improvements in cleanliness and public awareness. Beyond physical cleanups, the platform has hosted educational workshops to instill long-term sustainable habits among communities, especially focusing on youth involvement.",
    },
    {
      title: "🙌 Inspiring Change Beyond Cleanups",
      content:
        "SwachhMitra is more than just a platform—it’s a movement. The inspiring stories of volunteers have motivated thousands to adopt eco-friendly lifestyles and take ownership of their surroundings. By showcasing real-life success stories, fostering partnerships with local authorities, and continuously expanding its reach, SwachhMitra has sparked a ripple effect, proving that small efforts, when united, can create lasting change across the nation.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className='impact_container p-5 flex flex-col items-center gap-6'>
        <h1 className='mt-5 text-3xl font-bold text-center'>
          United For Change: See Our Achievements
        </h1>
        {impactData.map((item, index) => (
          <div key={index} className='w-full max-w-md bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4 mt-4 p-3 container'>
            <div className='cursor-pointer impact_card' onClick={() => toggleSection(index)}>
                <div><h2 className='text-xl font-semibold flex-grow' style={{color: "purple"}}>{item.title}</h2></div>
              {openSections[index] ? <div><FaMinus className='text-xl' /> </div>: <FaPlus className='text-xl plus_icon' />}
            </div>
            {openSections[index] && <p className='text-gray-600' style={{color: "black"}}>{item.content}</p>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Impact;