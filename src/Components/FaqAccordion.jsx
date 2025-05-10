import React, { useState } from "react";

import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const FaqAccordion = ({ title, anss }) => {
  const [faq, setFaq] = useState(false);
  return (
    <div className="py-2   ">
      <div className="flex  flex-col text-start font-semibold  justify-center sm:px-8 px-2  gap-1.5">
        <div className=" w-full">
          <div className="bg-gray-100 py-2.5 px-4 cursor-pointer rounded-lg ">
            <div className="flex justify-between" onClick={() => setFaq(!faq)}>
              <p>{title}</p>

              {faq ? (
                <span>
                  <IoMdArrowDropupCircle size={25} />
                </span>
              ) : (
                <span>
                  <IoMdArrowDropdownCircle size={25} />
                </span>
              )}
            </div>

            <div
              className={
                faq
                  ? "bg-gray-100 text-gray-400 py-3 text-sm font-thin  "
                  : "hidden"
              }
            >
              <span>{anss}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
