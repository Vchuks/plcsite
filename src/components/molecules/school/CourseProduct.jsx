import Logo from "../../atoms/Logo";
import curve from "../../../assets/images/Vector 6.png";
import Text from "../../atoms/Text";
import TextLink from "../../atoms/TextLink";
import { useEffect, useRef, useState } from "react";
import CourseHighlight from "./product/CourseHighlight";
import PmgtHighlight from "./product/PmgtHighlight";
import ApgtHighlight from "./product/ApgtHighlight";

const CourseProduct = () => {
  const refa = useRef();
  const refb = useRef();
  const refc = useRef();

  const [acourse, setAcourse] = useState(false);
  const [bcourse, setBcourse] = useState(false);
  const [ccourse, setCcourse] = useState(false);

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
      setBcourse(false);
      setCcourse(false);
      refb.current.style.backgroundColor = "#F0EFF3";
      refb.current.style.color = "#222057";
      refc.current.style.backgroundColor = "#F0EFF3";
      refc.current.style.color = "#222057";
    } else if (e.target.id === "2") {
      refb.current.style.backgroundColor = "#222057";
      refb.current.style.color = "#fff";
      setBcourse(true);
      setAcourse(false);
      setCcourse(false);
      refa.current.style.backgroundColor = "#F0EFF3";
      refa.current.style.color = "#222057";
      refc.current.style.backgroundColor = "#F0EFF3";
      refc.current.style.color = "#222057";
    } else {
      refc.current.style.backgroundColor = "#222057";
      refc.current.style.color = "#fff";
      setCcourse(true);
      setBcourse(false);
      setAcourse(false);
      refb.current.style.backgroundColor = "#F0EFF3";
      refb.current.style.color = "#222057";
      refa.current.style.backgroundColor = "#F0EFF3";
      refa.current.style.color = "#222057";
    }
  };
  return (
    <>
      <div className="bg-[#fffaf4] px-4 lg:px-14 py-10 lg:py-14">
        <div className="w-20 h-2 rounded-2xl my-3 bg-corange"></div>
        <p className="relative text-cdark lg:w-max font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl">
          Product <span className="text-corange">School </span>Courses
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
              Product Design
            </div>
            <div
              className="bg-[#F0EFF3] pt-5 pb-4 text-center border border-cblue text-cblue px-2 box-border lg:px-0 w-full md:w-[200px] cursor-pointer"
              onClick={handleCourse}
              ref={refb}
              id="2"
            >
              Product Management
            </div>
            <div
              className="bg-[#F0EFF3] pt-5 pb-4 text-center border border-cblue text-cblue px-2 box-border lg:px-0 w-full md:w-[200px] cursor-pointer"
              onClick={handleCourse}
              ref={refc}
              id="3"
            >
              Agile Project MGT
            </div>
          </div>
          {acourse && (
            <div className="flex flex-col xxxl:w-[60%] xxxl:m-auto lg:flex-row py-8 lg:py-14">
              <div className="w-11/12">
                <Text
                  className="text-3xl lg:text-[50px] font-['aristbold'] text-cblue"
                  body="Product Design [Ui / Ux]"
                />
              </div>
              <div className="w-full  lg:py-10">
                <Text
                  className="font-['gregular'] lg:text-2xl text-cgray"
                  body="Learn Ui/Ux from scratch without writing a single code. Master how to design high fidelity interface with FIGMA, design journey mapping and empathize with users."
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
          {/* product management */}
          {bcourse && (
            <div className="flex flex-col xxxl:w-[60%] xxxl:m-auto lg:flex-row py-8 lg:py-14">
              <div className="w-11/12">
                <Text
                  className="text-3xl lg:text-[50px] font-['aristbold'] text-cblue"
                  body="Product Management"
                />
              </div>
              <div className="w-full  lg:py-10">
                <Text
                  className="font-['gregular'] lg:text-2xl text-cgray"
                  body="Apply Your new product skills to real world projects using the latest industry tools and techniques in Product Management. "
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
          {/* agile projuct management? */}
          {ccourse && (
            <div className="flex flex-col xxxl:w-[60%] xxxl:m-auto lg:flex-row py-8 lg:py-14">
              <div className="w-11/12">
                <Text
                  className="text-3xl lg:text-[50px] font-['aristbold'] text-cblue"
                  body="Agile & SCRUM"
                />
              </div>
              <div className="w-full  lg:py-10">
                <Text
                  className="font-['gregular'] lg:text-2xl text-cgray"
                  body="Master the skills and tools you need to become a Technical Project Manager and lead some of the most exciting projects across multiple industries."
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
      {acourse && <CourseHighlight />}
      {bcourse && <PmgtHighlight />}
      {ccourse && <ApgtHighlight />}
    </>
  );
};

export default CourseProduct;
