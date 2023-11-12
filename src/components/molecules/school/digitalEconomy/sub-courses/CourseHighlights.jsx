import Logo from "../../../../atoms/Logo";
import Text from "../../../../atoms/Text";
import picone from "../../../../../assets/images/Frame 20686.png";
import pictwo from "../../../../../assets/images/Frame 20686 (1).png";
import picthree from "../../../../../assets/images/Frame 20686 (2).png";
import picfour from "../../../../../assets/images/Frame 20686 (3).png";
import picfive from "../../../../../assets/images/Frame 20686 (4).png";
import DigitalContent from "../../../../../contextData/DigitalContent";
import { useContext, useState } from "react";
import TextLink from "../../../../atoms/TextLink";
import playbtn from "../../../../../assets/images/playbtn.png";

const CourseHighlights = () => {
  const { digital, cohort } = useContext(DigitalContent);
  const numFor = Intl.NumberFormat("en-US");


  const [cohortSelect, setCohortSelect] = useState({
    cohortt: ''
  })
  
  const handlePlay = () => {
    const videocard = document.querySelector("#video1");
    const videoWrapper = document.querySelector(".video");
    const wrapper = document.querySelector(".wrapperart");
    const close = document.querySelector(".ex");
    const playimg = document.querySelector(".playimg");
    playimg.style.display = "none";
    videocard.play();
    videoWrapper.style.display = "block";
    close.style.display = "block";
    wrapper.classList.add("wrapperc2");
    wrapper.classList.remove("wrapperart");
  };

  const handleClose = () => {
    const videoWrapper = document.querySelector(".video");
    const wrapper = document.querySelector(".wrapperc2");
    const videocard = document.querySelector("#video1");
    const playimg = document.querySelector(".playimg");
    const close = document.querySelector(".ex");
    playimg.style.display = "block";
    close.style.display = "none";
    videocard.pause();
    videocard.currentTime = 0;
    videoWrapper.style.display = "none";
    wrapper.classList.add("wrapperart");
    wrapper.classList.remove("wrapperc2");
  };
  const text = `<li>Introduction to Graphics Design & Design Elements.</li>
<li>Principles of modern design and how users respond to your style.</li>
<li>Explore the dynamic trends & styles, discovering how they shape individual and brand identities.</li>
<li>How to Navigate Adobe Photoshop and use all the tools within the toolbar.</li>
<li>Understand background removal, photo retouching and photo healing.</li>
<li>Introduction to Animation and different Animation styles.</li>
<li>How to create short-stop motion animation.</li>
<li>Character Design, Storyboarding and how to setup a story board for your animation.</li>
<li>Motion graphics tools like Adobe After Effects.</li>
<li>Character Rigging.</li>
<li>2D Animation.</li>
    `;

  const textTwo = `In addition to learning everything listed above, you will be exposed to soft-skills training for how they can use this skills for wealth creation through freelancing, and employment. You will learn how to design and position your portfolio to attract international attention, as well as how to set yourself up for continuous growth and development into more advanced roles and more high paying positions and careers. 
    
    You will also be given access to our talent network where you can collaborate and share ideas with like minded individuals, as well as get mentored weekly by experts in the field.`;
  return (
    <div className="px-4 lg:px-14 pb-10 lg:pb-14 flex flex-col-reverse lg:flex-row bg-[#F8F8FA]">
    <div className="lg:w-[62%] xl:w-[62%] 2xl:w-[60%] xxxl:w-[40%] pe-4 pt-10 lg:pt-14">
      <div className="w-20 h-2 rounded-2xl my-3 bg-corange"></div>
      <p className="relative text-cdark w-max font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl">
        Course <span className="text-corange">Highlights</span>
      </p>
      <p className="font-[gregular] lg:text-lg">
        In this course you will learn:
      </p>
      <ul
        dangerouslySetInnerHTML={{ __html: text }}
        className=" font-[gregular] text-justify listStyle lg:text-lg ps-4 py-8 "
      ></ul>
      <pre className="font-[gregular] text-justify lg:text-lg">{textTwo}</pre>
    </div>
    <div className="lg:w-[35%] xxxl:w-[37%] mt-6 lg:mt-0 digitalcourse lg:absolute right-[4.4%] top-[25%] xxxl:top-[20%] rounded-t-[24px]">
      <div className="w-full lg:h-[310px] xl:h-[320px] 2xl:h-[350px] xxxl:h-full wrapperart mb-4 ">
        <button
          className="ex text-xl lg:text-3xl lg:p-5 text-black exx"
          onClick={handleClose}
        >
          x
        </button>
        <Logo
          src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/t3.png"
          alt=""
          className="w-full h-full"
        />

        <Logo
          src={playbtn}
          id="play"
          className="absolute w-14 playimg cursor-pointer  top-[40%] left-[43%]"
          alt=""
          onClick={handlePlay}
        />
        <div className="video">
          <video
            width="100%"
            height="100%"
            id="video1"
            className="vid"
            controls
          >
            <source
              src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/advert.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
      <div className="w-[90%] m-auto text-center">
        <p className="text-corange font-[gbold] text-[30px] lg:text-[40px]">
          N {numFor.format(digital[1]?.ngn_price || 0)}
          <span className="text-cgray text-xl lg:text-2xl font-[gmedium]">
            {" "}
            | N{" "}
            <span className="line-through">
              {numFor.format(digital[1]?.ngn_offset + digital[1]?.ngn_price || 0)}
            </span>
          </span>
        </p>
        <Text
          className="font-[gregular] text-cgray py-2"
          body="Take advantage of this transformational course"
        />
        <div className="w-11/12 m-auto text-start my-5">
          <label className="py-2">Cohort (Start Month)</label>
          <select value={cohortSelect.cohortt}  onChange={(event)=>setCohortSelect(event.target.value)} className="selectDig w-full font-[gmedium] outline-none border border-[#22205747] px-3 flex items-center justify-center text-sm text-cdark rounded-[10px] bg-white pt-4 2xl:pt-5 2xl:pb-5  pb-3 ">
            
            {cohort?.map((each)=>{
            return <option key={each.id}  value={each.name}  className="px-2">{each.name}</option>})}
          </select>
        </div>
        <div className="flex flex-col gap-6 my-4">
          <hr className="w-full mt-2 mb-3" />
          <TextLink
            target='_blank'
            to={`https://pluralcode.academy/signup?course_name=${digital[1]?.name}&cohort=${cohortSelect.cohortt === '' ?cohort[0]?.name:cohortSelect}`}
            body={
              <button className="p-4 w-full bg-corange font-[gsemibold] rounded-[10px] text-white">
                Pay N {numFor.format(digital[1]?.ngn_price || 0)}
              </button>
            }
          />
          <TextLink
            target="_blank"
            to="https://pluralcode.academy/chat-advisor"
            className="w-full"
            body={
              <button className="w-full border p-4 rounded-[10px] bg-white text-corange border-corange">
                Chat with Student Advisor
              </button>
            }
          />
        </div>
        <div className="flex flex-col gap-7 py-8">
          <div className="flex gap-6 text-start">
            <div className="w-16">
              <Logo className="w-full" src={picone} alt="" />
            </div>
            <div>
              <Text className="font-[gregular] lg:text-lg" body="Duration" />
              <Text
                className="font-[gbold] text-cgray text-xl lg:text-[32px]"
                body="8weeks"
              />
            </div>
          </div>
          <div className="flex gap-6 text-start">
            <div className="w-16">
              <Logo className="w-full" src={pictwo} alt="" />
            </div>
            <div>
              <Text
                className="font-[gregular] lg:text-lg"
                body="Instructor-Led Course"
              />
              <Text
                className="font-[gbold] text-cgray text-xl lg:text-[32px]"
                body="Paid"
              />
            </div>
          </div>
          <div className="flex gap-6 text-start">
            <div className="w-16">
              <Logo className="w-full" src={picthree} alt="" />
            </div>
            <div>
              <Text
                className="font-[gregular] lg:text-lg"
                body="Certificate"
              />
              <Text
                className="font-[gbold] text-cgray text-xl lg:text-[32px]"
                body="Yes"
              />
            </div>
          </div>
          <div className="flex gap-6 text-start">
            <div className="w-16">
              <Logo className="w-full" src={picfour} alt="" />
            </div>
            <div>
              <Text className="font-[gregular] lg:text-lg" body="Language" />
              <Text
                className="font-[gbold] text-cgray text-xl lg:text-[32px]"
                body="English"
              />
            </div>
          </div>
          <div className="flex gap-6 text-start">
            <div className="w-16">
              <Logo className="w-full" src={picfive} alt="" />
            </div>
            <div>
              <Text
                className="font-[gregular] lg:text-lg"
                body="Next Start Date"
              />
              <Text
                className="font-[gbold] text-cgray text-xl lg:text-[32px]"
                body={cohort[0]?.name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CourseHighlights;
