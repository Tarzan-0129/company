import React from "react";

const data = [
  {
    img: "/Services-jpg/cyber-security.png",
    text: "AI/ML Development",
  },
  {
    img: "/Services-jpg/cloud-computing.png",
    text: "Modernize Software",
  },
  {
    img: "/Services-jpg/cloud.png",
    text: "Cloud Consulting Services",
  },
  {
    img: "/Services-jpg/digital-marketing.png",
    text: "Cyber Security Solutions",
  },
  {
    img: "/Services-jpg/politician.png",
    text: "Digital Marketing",
  },
  { img: "/Services-jpg/setting.png", text: "Political Campaign" },
];

function Services() {
  return (
    <div className="my-7 ">
      <div className="flex flex-col items-center">
        <p className="font-extrabold pb-3  text-4xl">Services</p>
        <p className="text-center text-xl font-light px-2 ">
          At Arisezen, we accelerate business outcomes by Rapid Digital
          Transformation services.
        </p>

      </div>


      <div className="flex flex-wrap justify-center text-white">
      {data.map((d, i) => (
        <div key={i} className="group flex flex-col items-center text-center justify-center shadow-[rgba(0,_0,_0,_0.45)_0px_25px_50px_-12px] h-72 w-96 m-3 rounded-lg bg-sky-800  ">
          <img
            src={d.img}
            alt=""
            className="group-hover:-translate-y-2 duration-700 "
          />
          <p>{d.text}</p>
        </div>
      ))}


</div>

    </div>
  );
}

export default Services;
