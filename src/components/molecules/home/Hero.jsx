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
import curve1 from "../../../assets/images/Frame.png";
import curve2 from "../../../assets/images/Rectangle 1734.png";
import curve3 from "../../../assets/images/Rectangle 1735.png";

const Hero = () => {
  const [view, setView] = useState(false)
  const [view2, setView2] = useState(false)
  const [view3, setView3] = useState(false)
  const [view4, setView4] = useState(false)
  const [view5, setView5] = useState(false)
  const [view6, setView6] = useState(false)
  const [view7, setView7] = useState(false)
  const [view8, setView8] = useState(false)
  const [certCourse, setCertCourse] = useState([]);
  const [diplomaCourse, setDiplomaCourse] = useState([]);

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
  useEffect(() => {
    fetch("https://backend.pluralcode.institute/course-list")
      .then((response) => response.json())
      .then((result) => {
        setCertCourse(result?.certcourses);
        setDiplomaCourse(result?.diplomacourses);
      })
      .catch((err) => console.log(err));
  }, []);
  
  
  return (
    <div className="flex flex-col-reverse lg:flex-row bg-cblue px-4 lg:px-0 lg:ps-14 py-8 lg:pt-28 lg:pb-16 gap-6">
      <div className="lg:w-6/12 2xl:w-full relative" data-aos="zoom-in-up" data-aos-duration="2000">
        <div className="hidden lg:block absolute w-[70px] left-[75%] 2xl:left-[69%] xxxl:left-[55%] xxxl:w-[120px] top-0"><Logo src={curve1} alt="" className="w-full"/></div>
        <div className="hidden lg:block absolute w-[70px] -left-[9%] -top-[4%] 2xl:-left-14 xxxl:-left-[7%] xxxl:-top-5 xxxl:w-[120px]"><Logo src={curve2} alt="" className="w-full"/></div>
        <Text
          className="hidden lg:block plt w-fit px-4 text-corange text-xs pt-1 xxxl:text-3xl"
          body="Pluralcode"
        />
        <p className="hero-text 2xl:w-[750px] 2xl:text-7xl xxxl:w-[1000px] xxxl:text-8xl xxxl:leading-tight text-center lg:text-left leading-tight lg:leading-none pt-6 text-white">
          Acquire <span className="text-corange">Tech Skills </span>For a
          Borderless Career.
        </p>
        <Text
          className="text-center lg:w-[400px] 2xl:w-[580px] xxxl:w-[700px] xxxl:text-3xl xxxl:leading-tight font-['gmedium'] 2xl:py-5 2xl:text-2xl py-3 lg:py-0 lg:text-left lg:text-lg text-white"
          body="Your global tech journey begins here. Master the skills you need to start a successful career."
        />
        <div className="border 2xl:w-[500px] xxxl:w-[700px] rounded-2xl gap-5 2xl:my-6 my-4 border-corange selectdiv flex flex-col lg:flex-row items-center px-6 justify-between py-4 xxxl:py-6">
          <select className="w-full outline-none px-3 flex items-center justify-center text-sm text-cblue rounded bg-white pt-4 2xl:pt-5 2xl:pb-5  pb-3  ">
            <option className=" text-center">Select Course</option>
            {certCourse?.map((each) => (
              <option className="px-2" key={each.id}>{each.name}</option>
              ))}
            {diplomaCourse?.map((each) => (
              <option className="px-2" key={each.id}>{each.name}</option>
              ))}
          </select>
          <TextLink
            to="/#learn"
            className="w-full hero-link bg-corange rounded"
            body={
              <button className="pt-3 pb-3 2xl:pt-5 2xl:pb-5  w-full text-center text-sm text-white rounded">
                Start Learning
              </button>
            }
          />
        </div>
        <div className="relative lg:text-lg xxxl:text-3xl xxxl:pt-2 text-white flex gap-1 justify-center lg:justify-start">
          Got Questions?
          <TextLink to="https://wa.me/2347083153185?text=I%27m%20interested%20in%20taking%20one%20of%20your%20programs" className="" target="_blank" body={<span className="flex text-corange items-center gap-2">
            Chat with us{" "}
            <div className="w-4 lg:w-5">
              <Logo src={whats} className="w-full" alt="" />
            </div>
          </span>}/>
            <div className="hidden lg:block absolute w-[70px] opacity-20 left-[40%] 2xl:left-[33%] top-1"><Logo src={curve3} alt="" className="w-full"/></div>
        </div>
      </div>
      <div className="relative w-full ">
        <Logo className="w-full h-full object-cover" src={map} alt="" />
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
