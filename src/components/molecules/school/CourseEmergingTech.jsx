import Logo from "../../atoms/Logo";
import curve from "../../../assets/images/Vector 6.png";
import Text from "../../atoms/Text";
import TextLink from "../../atoms/TextLink";
import { useEffect, useRef, useState } from "react";
import DigitalHighlight from "./emergingTech/DigitalHighlight";


const CourseEmergingTech = () => {
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
        <p className="relative text-cdark lg:w-[45%] 2xl:w-[35%] font-['aristsemibold'] lg:leading-tight xxxl:leading-[1.2] text-3xl lg:text-5xl xxxl:w-[30%] xxxl:text-7xl">
          <span className="text-corange">School of </span>Emerging Technologies Course
          <span className="hidden lg:block absolute w-[100px] h-full top-[70%] -right-[0]">
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
             Digital Assets Banking
            </div>
            
          </div>
          {acourse && (
            <div className="flex flex-col xxxl:w-[60%] xxxl:m-auto lg:flex-row py-8 lg:py-14">
              <div className="w-10/12">
                <Text
                  className="text-3xl lg:w-[60%] xxxl:w-full lg:leading-tight lg:text-[50px] font-['aristbold'] text-cblue"
                  body="Digital Assets Banking"
                />
              </div>
              <div className="w-full  lg:py-10">
                <Text
                  className="font-['gregular'] lg:text-2xl text-cgray"
                  body="The Digital Assets Banking course will give you expert level knowledge of digital assets such as Cryptocurrencies, NFTs, ICOs, Launch Pads and how to trade all of these assets profitably."
                />
                <Text
                  className="font-['gregular'] pt-4 lg:text-2xl text-cgray"
                  body="This will also grant you access to a Data handbook that will guide you to take full advantage of the Bitcoin halving of 2024 to extract massive profits through your new skill."
                />
                <TextLink
                  to="#learn"
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
      {acourse && <DigitalHighlight />}
    </>
  );
};

export default CourseEmergingTech;
