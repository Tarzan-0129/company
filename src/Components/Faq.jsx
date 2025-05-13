import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <div>
      <div className=" h-44  bg-red-400 flex relative ">
        <img src="/assets/img/parallax-5.jpg" className=" w-full object-cover" />
        <div className="absolute text-white text-2xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <p>The world wide Leading Consultancy</p>
          <p>FAQ</p>
        </div>
      </div>
      <div className="gap-4 flex sm:flex-row flex-col  sm:px-10">
        <div className="py-4  sm:w-1/2">
          <FaqAccordion
            title={"DIFFERENCE BETWEEN CONSULTANCY AND STAFFING?"}
            anss={
              " Consulting involves working with the client organization - across its hierarchy, across its function; to solve a particular problem or towards a said objective. Often times, the consultants help organisations define these objectives & goals. Staffing involves deploying resources towards already set objectives / goals at the client location. The role of the people who are deployed in an organisation is to deliver the KPIs of the particular role alone."
            }
          />

          <FaqAccordion
            title={"HOW DO I FIND WHETHER CONSULTANCY IS FAKE OR NOT?"}
            anss={
              "Its very true there are lot of fake consultancies these days. Be very careful before approaching any consultancy in terms of money mainly. First check the consultancy online through facebook , website or google. Later on just take a note of address of any consultancy and visit that consultancy or if you living far ask your friends to visit that address of consultancy. WSNE Consulting gives you a better opportunity to make your career with us, we are connected with PAN India reputed companies and International MNC. We provide best services to our clients and candidates."
            }
          />

          <FaqAccordion
            title={
              "HOW DO I KNOW THAT WSNE Consulting Pvt. Ltd. IS THE RIGHT CONSULTING AGENCY FOR ME?"
            }
            anss={
              "Knowing how to choose a recruitment agency is important for employers and job seekers alike. Companies that prefer to outsource the employment search and screening process must consider the reputation, policies, practices and costs of employment agencies. These same factors are important for job seekers, who must select employment agencies that will understand their unique skills and actively promote their services. A great recruitment agency will help match the most qualified job seeker with the job opening best suited for their skills. By clarifying your needs and learning the key traits of the agency, you can find the right recruitment agency for you."
            }
          />
        </div>

        <div className="py-4  sm:w-1/2">
        <FaqAccordion
          title={"WHAT ARE THE BENEFITS OF USING A CONSULTANCY SERVICE?"}
          anss={
            "Consultancy services provide expert advice and solutions tailored to your business needs. They help in identifying problems, improving efficiency, and implementing strategies to achieve goals. Additionally, they bring industry expertise, save time, and often reduce costs by avoiding common pitfalls."
          }
        />
        <FaqAccordion
          title={"WHAT IS THE ROLE OF A CONSULTANT IN A COMPANY?"}
          anss={
            "A consultant's role is to analyze the company's challenges, provide expert advice, and implement solutions to improve performance. They work closely with stakeholders to understand objectives and deliver actionable insights to achieve desired outcomes."
          }
        />
        <FaqAccordion
          title={"HOW DO CONSULTANCY SERVICES CHARGE FOR THEIR WORK?"}
          anss={
            "Consultancy services typically charge based on hourly rates, project-based fees, or retainers. The pricing structure depends on the scope of work, expertise required, and duration of the engagement."
          }
        />
        </div>
      </div>
    </div>
  );
};

export default Faq;
