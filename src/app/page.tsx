"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, ExperiencePanel, About, Projects } from "./ui/components";
import clearabee from "./ui/images/clearabee.png";
import upwork from "./ui/images/upwork.png";
import photo from "./ui/images/photo.jpg";

export default function Home() {
  //TODO: ADD RESPONSOBILITIES TO EXPERIENCE PANEL
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1470px] m-auto px-5">
      <h1 className="font-bold 2xl:text-[80px] text-6xl 2xl:leading-[85px]">
        Hi, I'm Ivan Bilan
      </h1>
      <h2
        style={{
          color: "#6e6e6e",
        }}
        className="font-bold 2xl:text-7xl text-5xl 2xl:leading-[85px]"
      >
        Web Developer
      </h2>
      <div className="flex justify-center mt-20 lg:justify-end">
        <Tabs
          titles={["Experience", "About", "Projects", "Skills & Education"]}
          onClick={(index) => setActiveTab(index)}
          activeTab={activeTab}
        />
      </div>
      <main className="mt-20">
        {activeTab === 0 && (
          <section>
            <ExperiencePanel
              company="Clearabee"
              position="Software Developer"
              image={clearabee}
              startDate="2023/01/23"
              endDate="Present"
            />
            <ExperiencePanel
              company="Upwork"
              position="Frontend Developer"
              image={upwork}
              startDate="2022/06/04"
              endDate="2022/09/10"
            />
          </section>
        )}
        {activeTab === 1 && (
          <section>
            <About photo={photo} />
          </section>
        )}
        {activeTab === 2 && (
          <section>
            <Projects title="The projects are coming soon!" />
          </section>
        )}
      </main>
    </div>
  );
}
