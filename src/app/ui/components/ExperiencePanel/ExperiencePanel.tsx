"use client";
import dayjs from "dayjs";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

interface ExperiencePanelProps {
  company: string;
  position: string;
  image: StaticImageData;
  startDate: string;
  endDate: string;
}

export const ExperiencePanel = ({
  company,
  position,
  image,
  startDate,
  endDate,
}: ExperiencePanelProps): React.ReactElement => {
  const start = dayjs(startDate);
  const end = endDate === "Present" ? dayjs() : dayjs(endDate);

  const years = end.diff(startDate, "year");
  start.add(years, "year");

  const months = end.diff(startDate, "month") % 12;
  start.add(months, "month");

  return (
    <div className="flex mt-10">
      <Image
        style={{
          border: "3px solid black",
          borderRadius: "10px",
          marginRight: "30px",
        }}
        src={image}
        alt="company photo"
        width={250}
        height={250}
      />
      <div>
        <h2 className="text-4xl mt-3 font-bold">{company}</h2>
        <div className="text-3xl font-semibold text-[#6e6e6e]">{position}</div>
        <div className="flex">
          <div className="text-3xl font-semibold text-[#6e6e6e]">
            {start.format("DD MMMM YYYY")} -{" "}
            {endDate === "Present" ? "Present" : end.format("DD MMMM YYYY")}
          </div>
          <div className="text-3xl ml-3 font-semibold text-[#6e6e6e]">
            ({years === 1 && `${years} year`} {years > 1 && `${years} years`}
            {months === 1 && `${months} month`}{" "}
            {months > 1 && `${months} months`} )
          </div>
        </div>
      </div>
    </div>
  );
};
