import Logo from "../../atoms/Logo";
import Text from "../../atoms/Text";
import TextLink from "../../atoms/TextLink";
import sub from "../../../assets/images/Subtract (1).png";
import sub2 from "../../../assets/images/Subtract.png";
import sub3 from "../../../assets/images/Subtract3.png";


const Learning = () => {
  return (
    <div className="px-4 lg:px-14 py-20 lg:py-14 learn-box" id="learn">
      <div className="w-20 h-2 rounded-2xl my-2 bg-corange"></div>
      <p className="text-cdark font-['aristsemibold'] text-3xl lg:text-5xl">
        Learning <span className="text-corange">Options </span>
      </p>
      <Text
        className="lg:text-lg say-text font-['gmedium'] py-2"
        body="Discover the learning options that are tailored for your ideal experience."
      />
      <div className="flex flex-col lg:flex-row gap-14 lg:gap-4 justify-center py-8" >
        <div className="hidden lg:flex items-end">
          <Logo src={sub} className="w-14" alt="" />
        </div>
<div data-aos="zoom-in-up" data-aos-duration="2000">
        <div className="relative h-full  learneach p-6">
          <div>
            <Logo
              src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/p2.png"
              className=""
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between pt-5">
            <Text
              className="text-cdark lg:text-lg font-['aristbold']"
              body="Live Classes"
            />
            <Text
              className="text-cdark py-4 lg:h-32 font-['gmedium']"
              body="Take advantage of instructor-led, live classes with onsite and virtual options. Share a hands-on classroom with students in a cohort-based training."
            />
            <TextLink className="text-corange" to="https://pluralcode.academy/admissions/" body="Start Learning" />
          </div>
          <div className="bg-cgray absolute learnback"></div>
        </div>
        </div>
        <div className="hidden lg:block w-14 mt-14">
          <Logo src={sub2} className="w-full" alt="" />
        </div>

        <div data-aos="zoom-in-up" data-aos-duration="2000">
        <div className="relative h-full  learneach p-6">
          <div>
            <Logo
              src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/p1.png"
              className=""
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between pt-5">
            <Text
              className="text-cdark lg:text-lg font-['aristbold']"
              body="Self-Paced Learning (LooP)"
            />
            <Text
              className="text-cdark py-4 lg:h-32 font-['gmedium']"
              body="Ideal for you if you prefer to learn at your own time. Pluralcode’s LMS & bite-sized topics, assessments and projects allows you to earn your Diploma without stress."
            />
            <TextLink className="text-corange" to="#" body="Start Learning" />
          </div>
          <div className="bg-corange absolute learnback"></div>
        </div>
        </div>
        <div className="hidden lg:flex items-end">
          <Logo src={sub3} className="w-14" alt="" />
        </div>
      </div>
    </div>
  );
};


export default Learning;
