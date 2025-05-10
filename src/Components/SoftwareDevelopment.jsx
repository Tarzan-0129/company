import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import Footer from "./Footer";
import Nabbar from "./Nabbar";

const SoftwareDevelopment = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
      <div>
        <Nabbar />
      </div>

      <div className=" h-80  flex relative ">
        <img
          src="/SoftwareDevelopment-PICS/SD-Pics-1.webp"
          className=" w-full object-cover"
        />
        <div className="absolute text-white text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <p>Software Product Development</p>
        </div>
      </div>

      <div className="py-20 px-2 text-center font-semibold text-5xl flex justify-center text-yellow-600">
        <p>Who We Are Right Fit For ?</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:px-6 px-3 gap-4 pb-4 ">
        <div className=" flex flex-col gap-2 w-full ">
          <p className="font-semibold text-xl">Startups </p>
          <p className="text-sm text-gray-500">
            We are a launchpad for startups without tech expertise. We offer a
            dedicated team with the right skill sets and experience to develop a
            prototype or a minimum viable product.
          </p>
        </div>

        <div className=" flex flex-col gap-2 w-full ">
          <p className="font-semibold text-xl ">
            Mid and Large sized Enterprises launching their own software
            products{" "}
          </p>
          <p className="text-sm text-gray-500">
            Using our cutting-edge technologies, agile delivery approach, and
            expertise, we provide fully functional software product development
            services for enterprises of all sizes to refine their idea into a
            scalable and market-worthy product.
          </p>
        </div>

        <div className=" flex flex-col gap-2 w-full ">
          <p className="font-semibold text-xl">
            Organizations that want to digitalize.
          </p>
          <p className="text-sm text-gray-500">
            We are a launchpad for startups without tech expertise. We offer a
            dedicated team with the right skill sets and experience to develop a
            prototype or a minimum viable product.
          </p>
        </div>
      </div>

      <div className=" bg-gray-100 ">
        <div className="py-20 px-2 flex justify-center text-3xl font-semibold text-center">
          <p>
            Software Development Process We Use To Build The Next-Gen Digital
            Products.
          </p>
        </div>

        <div className="flex flex-col px-4 pb-12 gap-20 w-full">
          <div className=" flex flex-col sm:flex-row justify-between">
            <div className="flex justify-center">
              <img src="/SoftwareDevelopment-PICS/Pic-1.JPG" alt="" />
            </div>

            <div className="sm:w-2/4">
              <p className="text-xl font-bold text-indigo-600 pb-2 ">
                Project Assessment
              </p>
              <p className="pb-3">
                The primary goal of conducting a project assessment is to
                understand the scope, scale, timeline, and overall objectives of
                the project. This steps helps us to develop better and implement
                the project management deliverables that are critical to support
                the project and make it successful. Overall this step includes:
                Idea validation and estimation Project estimation Requirements
                and feasibility analysis This step ensures that whether the
                software you want to build is viable for your requirements or
                calls for changes before design and development are in full
                swing.
              </p>
            </div>

            <div className="flex flex-col  sm:w-1/4">
              <p className="text-xl font-bold text-indigo-600 pb-2">
                What you get
              </p>

              <div className="px-2 text-gray-500 font-thin ">
                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Review Project Material</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Workshops</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Team Meetings</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Meeting with Key stakeholders</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Review Recorded Sessions</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Summarize Findings</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col sm:flex-row justify-between  ">
            <div className="flex justify-center ">
              <img
                className="object-contain"
                src="/SoftwareDevelopment-PICS/Pic-2.JPG"
                alt=""
              />
            </div>

            <div className=" sm:w-2/4">
              <p className="text-xl font-bold text-indigo-600 pb-2 ">
                Project Planning
              </p>
              <p className="pb-3">
                This is one of the crucial steps wherein we create the formal
                document that defines execution and other essential control
                stages of the project. The plan includes: Defining the project’s
                scope, quality baseline, deliverables, milestones, success
                criteria and requirements. Create a project charter, work
                breakdown structure (WBS) and a statement of work (SOW).
                Identifying the risks and assigning the deliverables to the team
                members, who will perform the tasks required and monitor the
                risks associated with them. Organize the project team
                (customers, stakeholders, teams, ad hoc members, and so on), and
                define their roles and responsibilities. Create a communication
                plan, schedule, budget and other guiding documents for the
                project.
              </p>
            </div>

            <div className="flex flex-col  sm:w-1/4">
              <p className="text-xl font-bold text-indigo-600 pb-2">
                What you get
              </p>

              <div className="px-2 text-gray-500 font-thin ">
                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Sitemap</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Information architecture</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Development plan</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Meeting with Key stakeholders</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Tech stack & architecture</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Final proposal</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col sm:flex-row justify-between  ">
            <div className="flex justify-center">
              <img
                className="object-contain"
                src="/SoftwareDevelopment-PICS/Pic-3.JPG"
                alt=""
              />
            </div>

            <div className=" sm:w-2/4">
              <p className="text-xl font-bold text-indigo-600 pb-2 ">
                Prototype or MVP
              </p>
              <p className="pb-3">
                If you have not validated your idea and are still testing the
                waters, this step will help you with that. This step utilizes
                the preliminary research to determine if your idea works in real
                world. For such a situation we consider building a clickable
                prototype, concierge MVP, or full-fledged MVP. Clickable
                Prototype is a visual representation of the user interface of a
                website or software application and offers an interactive
                experience very similar to a finalized application to evaluate
                its usability. A concierge MVP is based on a ready-made solution
                to focus on the audience’s problems without developing any
                functionality. It's basically a good way to check product's
                demand. A full-fledged MVP is a more detailed design and
                functionality than a prototype, to check what works for your
                audience’s pain points.
              </p>
            </div>

            <div className="flex flex-col  sm:w-1/4">
              <p className="text-xl font-bold text-indigo-600 pb-2">
                What you get
              </p>

              <div className="px-2 text-gray-500 font-thin ">
                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Testing the UI of your would-be product</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Verifying a proof of concept</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Testing the features</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col sm:flex-row justify-between  ">
            <div className="flex justify-center">
              <img
                className="object-contain"
                src="/SoftwareDevelopment-PICS/Pic-4.JPG"
                alt=""
              />
            </div>

            <div className=" sm:w-2/4">
              <p className="text-xl font-bold text-indigo-600 pb-2 ">Design</p>
              <p className="pb-3">
                This is a step where your product reaches a visual milestone and
                defines how the final product will function and look like so
                users get value effortlessly and enjoy using it. The design
                phase helps to achieve the right balance between what the user
                wants and the corporate goals. It begins with:
              </p>
              User Research and Information Architecture: The three paramount
              elements of this step are Design Brief, User personas, journey and
              flow. These three elements are carefully planned team builds it to
              combine your product’s navigation, features, visuals, and other
              content. IA is then used to prioritize UX when creating
              wireframes.
            </div>

            <div className="flex flex-col  sm:w-1/4">
              <p className="text-xl font-bold text-indigo-600 pb-2">
                What you get
              </p>

              <div className="px-2 text-gray-500 font-thin ">
                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Website layout</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Back-end code</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Configured databases</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Custom APIs</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col sm:flex-row justify-between  ">
            <div className="flex justify-center">
              <img
                className="object-contain"
                src="/SoftwareDevelopment-PICS/Pics-5.JPG"
                alt=""
              />
            </div>

            <div className=" sm:w-2/4">
              <p className="text-xl font-bold text-indigo-600 pb-2 ">
                Development
              </p>
              <p className="pb-3">
                This is the step where everything is setup for creating your
                software product wherein our Agile software development team get
                started with the coding of the infrastructure, frontend and
                backend work. The stage includes: Developers set up the
                environment for data storage, APIs, cloud computing, etc.
                Front-end developers work on crafting smooth and user- friendly
                interfaces to provide users with a intuitive experience.
                Back-end developers work on the hidden system that drives the
                software's business logic.
              </p>
            </div>

            <div className="flex flex-col  sm:w-1/4">
              <p className="text-xl font-bold text-indigo-600 pb-2">
                What you get
              </p>

              <div className="px-2 text-gray-500 font-thin ">
                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Website layout</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Back-end code</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Configured databases</p>
                </div>

                <div className="flex flex-row gap-2 items-center ">
                  <MdArrowOutward />
                  <p>Custom APIs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-500 flex flex-col items-center gap-6 px-4 text-center justify-center py-8 text-4xl font-semibold text-white">
          <p>Start Your Product Journey With Arisezen</p>

          <div className="bg-orange-500 hover:bg-orange-600 duration-300  py-2 px-6 rounded-md text-xl ">
            <button>Consult Experts</button>
          </div>
        </div>

        <div>
          <div className="flex justify-center py-10 font-semibold text-3xl">
            <p>Services We Cover</p>
          </div>

          <div className="flex gap-3 px-3 py-8 flex-col sm:flex-row ">
            <div className="bg-gray-300 flex flex-col py-12 px-2 gap-3 rounded-xl sm:w-1/3 hover:-translate-y-2 duration-200 hover:shadow-xl">
              <div className="text-2xl ">
                <p>SaaS Application Development</p>
              </div>
              <div className="text-base text-gray-500 ">
                <p>
                  Examining client requirements to provide complete consultation
                  on the SaaS product devlopment.Consulting the product roadmap
                  to check if the requirements aren’t covered by future
                  releases.Creating custom features and UI components.Creating
                  custom APIs for integration with clients’ systems.
                </p>
              </div>
            </div>

            <div className="bg-gray-300 flex flex-col py-12 px-2 gap-3 rounded-xl sm:w-1/3 hover:-translate-y-2 duration-200 hover:shadow-xl">
              <div className="text-2xl ">
                <p>Custom Software Development</p>
              </div>
              <div className="text-base text-gray-500 ">
                <p>
                  Drive innovation, validate new product ideas, verify and
                  prototype their potential with customers and investors with
                  our custom software development expertise fit for all your
                  business needs.
                </p>
              </div>
            </div>

            <div className="bg-gray-300 flex flex-col py-12 px-2 gap-3 rounded-xl sm:w-1/3  hover:-translate-y-2 duration-200 hover:shadow-xl">
              <div className="text-2xl ">
                <p>Enterprise Product Development</p>
              </div>
              <div className="text-base text-gray-500 ">
                <p>
                  By combining your products ideas with our delivery
                  capabilities, you can quickly reap time-to-value, offer a more
                  complete product mix and thereby increase your market share
                  and revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;
