import curve from "../../../../assets/images/Vector 6.png";
import Logo from "../../../atoms/Logo";


const PotentialBusiness = () => {
  const textPontential = `At Pluralcode, we understand that the world has changed. Long gone are the days when everyone relied on the traditional education system to learn wealth creation. The things that worked 50 years ago for our parents are no longer working.
            
  And so our approach to learning is different; learn the skills you need from the comfort of your home, office, travel, beach anywhere and acquire modern wealth creation skills that will allow you to earn more income working from anywhere in the world.
  
  In this model, you are truly borderless, location doesn’t affect you. You learn from anywhere and you earn from anywhere, that is the world we live in today.

  The School of Business will grant you access to our Student Portal where you will find weeks worth of expert materials to study at your own time. Additionally, you will get access to weekly classes led by some of the best in the field, where they will host practicals, answer your questions and mentor you in a live virtual environment like Zoom. Finally you will get access to a network of fellow ambitious minds who are building a career and earning income through the skill you are learning.
  
  Everything in this school is tailored to get your Business Career started in no time, pick a course, enroll and take the first step towards wealth creation.
  
  See you in class!!!`
  return (
    <div className="bg-[#E2DDDF] px-4 lg:px-14 py-8 lg:py-0">
      <div className="py-4 mb-5">
      <div className="w-20 h-2 rounded-2xl my-3 bg-corange"></div>
      <p className="relative text-cdark lg:w-[400px] xxxl:w-[590px]  font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl">
          <span className="text-corange">Unlock </span>Your Creative Potential
          <span className="hidden lg:block absolute w-[100px] h-full top-[70%] -right-[25%]">
            <Logo src={curve} alt="" className="w-full" />
          </span>
        </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="w-full" data-aos="fade-up"
        data-aos-duration="2000">
            <Logo src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/g1.png" alt="" className="w-full lg:h-full xxxl:h-auto "/>
          </div>
          <div className="w-full" data-aos="fade-up"
        data-aos-duration="2000">
            <p className="text-cblue font-['aristsemibold'] text-2xl lg:text-[40px] xxxl:text-8xl py-2"><span className="text-corange">Become an</span> Industry-Leading Professional</p>
            <pre className="font-['gregular'] xxxl:text-[32px] ">
            {textPontential}
            </pre>
          </div>
        </div>
    </div>
  )
}

export default PotentialBusiness
