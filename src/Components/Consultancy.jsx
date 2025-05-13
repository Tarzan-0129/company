import Nabbar from "./Nabbar";
import Footer from "./Footer";
const data = [
  {
    img: "/assets/img/consultancy/7655685.png",
    title: "Digital Transformation",
  },

  {
    img: "/assets/img/consultancy/12372208.png",
    title: "Custom Software Development",
  },

  {
    img: "/assets/img/consultancy/5608615.png",
    title: "Mobile App Development",
  },

  {
    img: "/assets/img/consultancy/2103751.png",
    title: "QA Automation",
  },

  {
    img: "/assets/img/consultancy/9732077.png",
    title: "Cloud Optimization",
  },

  {
    img: "/assets/img/consultancy/4744315.png",
    title: "Cyber Security",
  },
  {
    img: "/assets/img/consultancy/4529976.png",
    title: "Artificial Intelligence",
  },
  {
    img: "/assets/img/consultancy/6974613.png",
    title: "Blockchain Solutions",
  },
];
function Consultancy() {
  return (
    <>
      <div className=" h-80  flex relative ">
          <img src="/assets/img/blog/Our-Blog (2).jpg" className=" w-full object-cover"/>
        </div>
      <Nabbar />
      <div className="px-2  py-14">
        <div className="sm:px-12">
          <div className=" font-extrabold text-base sm:text-4xl ">
            <div className="flex gap-2 ">
              <p>Over</p>
              <p className="text-blue-600  ">5 Years</p>
              <p>of Business-Centric</p>
            </div>
            <p>Tech Expertise</p>
          </div>

          <p className="text-base sm:text-2xl pt-4 ">
            Straightforward solutions to complex business challenges.
          </p>

          <div className="py-16  flex flex-wrap justify-center items-center gap-16 gap-x-36  ">
            {data.map((d, index) => (
              <div
                key={index}
                className="group shrink-0 h-64 w-48 rounded-md shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)] flex  flex-col font-semibold text-center justify-center items-center "
              >
                <div className=" flex flex-col items-center px-2 gap-2 text-center">
                  <img src={d.img} className="group-hover:-translate-y-2 duration-500 " />
                  <p>{d.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row px-2  items-center justify-evenly rounded-md py-16 mx-4  my-2 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)] ">
          <div className="sm:w-1/2 py-10">
            <p className="text-3xl font-extrabold py-3">Digital Transformation</p>
            <p className="text-lg">
              People, things, businesses, and technology are all getting
              interconnected. It is a time when each person is profoundly impacted
              by everything digital. Businesses are getting digitally disrupted as
              well. There is no single business that can say that Artificial
              Intelligence (AI), Internet of Things (IoT), Mobile, Machine
              Learning, Big Data, Cyber Security, and CloudComputing is not meant
              for their business needs. Digital Transformation is not a choice
              anymore.
            </p>
          </div>
          <div>
            <img src="/assets/img/consultancy/images-3.jpg"/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Consultancy;
