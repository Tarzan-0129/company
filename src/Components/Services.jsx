
const data = [
  {
    img: "/assets/img/Services-jpg/cyber-security.png",
    text: "AI/ML Development",
  },
  {
    img: "/assets/img/Services-jpg/cloud-computing.png",
    text: "Modernize Software",
  },
  {
    img: "/assets/img/Services-jpg/cloud.png",
    text: "Cloud Consulting Services",
  },
  {
    img: "/assets/img/Services-jpg/digital-marketing.png",
    text: "Cyber Security Solutions",
  },
  {
    img: "/assets/img/Services-jpg/politician.png",
    text: "Digital Marketing",
  },
  {
    img: "/assets/img/Services-jpg/setting.png",
    text: "Political Campaign"
  },
];

function Services() {
  return (
    <div className="my-7">
      <div className="flex flex-col items-center">
        <p className="font-extrabold pb-3 text-4xl text-gray-800">
          Partner with Us
        </p>
        <p className="text-center text-xl font-light px-2 text-gray-600">
          Embark on a transformative journey with our expertise!
        </p>
      </div>

      <div className="flex flex-wrap justify-center text-white">
        {data.map((d, i) => (
          <div
            key={i}
            className="group flex flex-col items-center text-center justify-center shadow-[rgba(0,_0,_0,_0.45)_0px_25px_50px_-12px] h-72 w-96 m-3 rounded-lg bg-blue-700 hover:bg-blue-800 transition-all duration-500"
          >
            <img src={d.img} className="group-hover:-translate-y-2 duration-700 transform" />
            <p className="mt-3 text-lg font-semibold group-hover:text-yellow-300">
              {d.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
