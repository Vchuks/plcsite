import Logo from "../../atoms/Logo";
import curve from "../../../assets/images/Vector 6.png";
import Text from "../../atoms/Text";
import TextLink from "../../atoms/TextLink";
import { useEffect, useRef, useState } from "react";
import FullstackHighlight from "./programming/FullstackHighlight";


const CourseProgramming = () => {
  const refa = useRef();

  const [acourse, setAcourse] = useState(false);


  const run = () => {
    refa.current.style.backgroundColor = "#222057";
    refa.current.style.color = "#fff";
    setAcourse(true);
  };
  useEffect(() => {
    run();
  }, []);

  const handleCourse = (e) => {
    if (e.target.id === "1") {
      refa.current.style.backgroundColor = "#222057";
      refa.current.style.color = "#fff";
      setAcourse(true);
    } 
  };
  return (
    <>
      <div className="bg-[#fffaf4] px-4 lg:px-14 py-10 lg:py-14">
        <div className="w-20 h-2 rounded-2xl my-3 bg-corange"></div>
        <p className="relative text-cdark lg:w-max font-['aristsemibold'] text-3xl lg:text-5xl">
          Programming <span className="text-corange">School </span>Courses
          <span className="hidden lg:block absolute w-[100px] h-full top-[45%] -right-[22%]">
            <Logo src={curve} alt="" className="w-full" />
          </span>
        </p>
        <div className="">
          <div className="box-border flex border-b-4 border-cblue pt-5 lg:pt-20 text-sm lg:text-base">
            <div
              className="bg-[#F0EFF3] pt-5 pb-4 text-center border border-cblue cursor-pointer text-cblue px-2 box-border lg:px-0 w-full md:w-[200px]"
              onClick={handleCourse}
              ref={refa}
              id="1"
            >
             Full-Stack Development
            </div>
            
          </div>
          {acourse && (
            <div className="flex flex-col xxxl:w-[60%] xxxl:m-auto lg:flex-row py-8 lg:py-14">
              <div className="w-11/12">
                <Text
                  className="text-3xl lg:text-[50px] font-['aristbold'] text-cblue"
                  body="Full-Stack Development"
                />
              </div>
              <div className="w-full  lg:py-10">
                <Text
                  className="font-['gregular'] lg:text-2xl text-cgray"
                  body="Learn how to create international standard website and apps using the most recent Javascript frameworks of the day."
                />
                <TextLink
                  to="/#learn"
                  offset={-200}
                  className=""
                  body={
                    <button className="bg-corange text-white py-3 rounded w-48 my-6">
                      Start Learning
                    </button>
                  }
                />
              </div>
            </div>
          )}
          
        </div>
      </div>
      {acourse && <FullstackHighlight />}
    </>
  );
};

export default CourseProgramming;
