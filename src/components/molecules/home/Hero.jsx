import Logo from "../../atoms/Logo";
import Text from "../../atoms/Text";
import TextLink from "../../atoms/TextLink";
import whats from "../../../assets/images/ri_whatsapp-fill.png";
import map from "../../../assets/images/World Map 1.png";
import { useEffect, useState } from "react";
import people from "../../../assets/images/Component 1.png";
import people2 from "../../../assets/images/Component 2.png";
import people3 from "../../../assets/images/Component 3.png";
import people4 from "../../../assets/images/Component 4.png";
import people5 from "../../../assets/images/Component 5.png";
import people6 from "../../../assets/images/Component 6.png";
import people7 from "../../../assets/images/Component 7.png";
import people8 from "../../../assets/images/Component 8.png";

const Hero = () => {
  const [entcou, setEntCou] = useState([]);
  const [view, setView] = useState(false)
  const [view2, setView2] = useState(false)
  const [view3, setView3] = useState(false)
  const [view4, setView4] = useState(false)
  const [view5, setView5] = useState(false)
  const [view6, setView6] = useState(false)
  const [view7, setView7] = useState(false)
  const [view8, setView8] = useState(false)

  useEffect(() => {
    fetch("https://backend.pluralcode.institute/loop-course-list")
      .then((response) => response.json())
      .then((result) => {
        setEntCou(result.courses);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleView = ()=>{
      setView(!view)
  }
  const handleView2 = ()=>{
      setView2(!view2)
  }
  const handleView3 = ()=>{
      setView3(!view3)
  }
  const handleView4 = ()=>{
      setView4(!view4)
  }
  const handleView5 = ()=>{
      setView5(!view5)
  }
  const handleView6 = ()=>{
      setView6(!view6)
  }
  const handleView7 = ()=>{
      setView7(!view7)
  }
  const handleView8 = ()=>{
      setView8(!view8)
  }
  
  
  return (
    <div className="flex flex-col-reverse lg:flex-row bg-cblue px-4 lg:px-0 lg:ps-14 py-8 lg:py-32">
      <div className="w-full">
        <Text
          className="hidden lg:block plt w-fit px-4 text-corange text-xs pt-1"
          body="Pluralcode"
        />
        <p className="hero-text text-center lg:text-left leading-tight lg:leading-none pt-6 text-white">
          Acquire <span className="text-corange">Tech Skills </span>For a
          Borderless Career.
        </p>
        <Text
          className="text-center py-3 lg:py-0 lg:text-left lg:w-96 lg:text-lg text-white"
          body="Your global tech journey begins here. Master the skills you need to start a successful career."
        />
        <div className="border rounded-2xl gap-5 my-4 border-corange selectdiv flex flex-col lg:flex-row items-center px-6 justify-between py-4">
          <select className="w-full hero-link outline-none text-sm text-cblue rounded bg-white pt-4 pb-3">
            <option className="">Select Course</option>
            {entcou.map((each) => (
              <option key={each.id}>{each.name}</option>
            ))}
          </select>
          <TextLink
            to="#"
            className="w-full hero-link bg-corange rounded"
            body={
              <button className="pt-3 pb-3 w-full text-center text-sm text-white rounded">
                Start Learning
              </button>
            }
          />
        </div>
        <div className="text-white flex gap-1 justify-center lg:justify-start">
          Got Questions?
          <span className="flex text-corange items-center gap-2">
            Chat with us{" "}
            <div className="w-4 lg:w-5">
              <Logo src={whats} className="w-full" alt="" />
            </div>
          </span>
        </div>
      </div>
      <div className="relative w-full ">
        <Logo className="w-full" src={map} alt="" />
        <div className="w-4 lg:w-6 absolute wrldglow  wrld1" id="1" onMouseEnter={handleView} onMouseLeave={handleView}>
          <Logo className="" src={people} alt="" />
        </div>
        {view && <div className="w-10 mt-8 absolute wrld1">
          <Logo className="" src={people} alt="" />
          <Text
            className="world-text ml-7"
            body="From Sales Officer to Data Analyst"
          />
        </div>}
        <div className="w-4 lg:w-6 absolute wrldglow  wrld2" id="2" onMouseEnter={handleView2} onMouseLeave={handleView2}>
          <Logo className="" src={people2} alt="" />
        </div>
        {view2  && <div className="w-10 mt-8 absolute   wrld2">
          <Logo className="" src={people2} alt="" />
          <Text
            className="-left-52 world-text2 ml-7"
            body="From Content Writer to Cloud Administrator"
          />
        </div>}
        <div className="w-4 lg:w-6 absolute wrldglow  wrld3" id="3" onMouseEnter={handleView3} onMouseLeave={handleView3}>
          <Logo className="" src={people3} alt="" />
        </div>
        {view3 && <div className="w-10 mt-8 absolute   wrld3">
          <Logo className="" src={people3} alt="" />
          <Text
            className="world-text ml-7"
            body="From Trader to UX Researcher"
          />
        </div>}
        <div className="w-4 lg:w-6 absolute wrldglow  wrld4" id="4" onMouseEnter={handleView4} onMouseLeave={handleView4}>
          <Logo className="" src={people4} alt="" />
        </div>
        {view4 && <div className="w-10 mt-8 absolute   wrld4">
          <Logo className="" src={people4} alt="" />
          <Text
            className="world-text ml-7"
            body="From HR associate to Data Scientist"
          />
        </div>}
        <div className="w-4 lg:w-6 absolute wrldglow  wrld5" id="5" onMouseEnter={handleView5} onMouseLeave={handleView5}>
          <Logo className="" src={people5} alt="" />
        </div>
        {view5 && <div className="w-10 mt-8 absolute   wrld5">
          <Logo className="" src={people5} alt="" />
          <Text
            className=" -left-52 world-text2 ml-7"
            body="From Nurse to Product Manager"
          />
        </div>}
        <div className="w-4 lg:w-6 absolute wrldglow  wrld6" id="6" onMouseEnter={handleView6} onMouseLeave={handleView6}>
          <Logo className="" src={people6} alt="" />
        </div>
        {view6 && <div className="w-10 mt-8 absolute   wrld6">
          <Logo className="" src={people6} alt="" />
          <Text
            className="world-text ml-7"
            body="From Local Tour Guide to Product Designer"
          />
        </div>}
        <div className="w-4 lg:w-6 absolute wrldglow  wrld7" id="7" onMouseEnter={handleView7} onMouseLeave={handleView7}>
          <Logo className="" src={people7} alt="" />
        </div>
        {view7 && <div className="w-10 mt-8 absolute   wrld7">
          <Logo className="" src={people7} alt="" />
          <Text
            className="-left-52 world-text2 ml-7"
            body="From Network Admin to Data Analyst"
          />
        </div>}
        <div className="w-4 lg:w-6 absolute wrldglow  wrld8" id="8" onMouseEnter={handleView8} onMouseLeave={handleView8}>
          <Logo className="" src={people8} alt="" />
        </div>
       {view8 && <div className="w-10 mt-8 absolute   wrld8">
          <Logo className="" src={people8} alt="" />
          <Text
            className="world-text ml-7"
            body="From Tech Writer to Cyber Security Expert"
          />
        </div>}
      </div>
    </div>
  );
};

export default Hero;
