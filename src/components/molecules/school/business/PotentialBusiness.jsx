import curve from "../../../../assets/images/Vector 6.png";
import Logo from "../../../atoms/Logo";


const PotentialBusiness = () => {
  const textPontential = `At Pluralcode, we understand that the traditional Educational model may not cater to everyone’s needs, especially for those seeking specialized career-paths in the creative and entrepreneurial fields - such as Fashion, Dance, Music, Comedy, Community Building, Events Planning, and more!

  In response to this vacuum, we have brought together a team of top professionals in each field to design and facilitate courses that offer practical knowledge and skills to help you succeed in your career or personal endeavors.
  
  Whether you’re looking to launch a career in the fashion industry, hone your skills as a dancer, develop your musical talent into a global brand, master the art of negotiation, build a thriving community, or plan unforgettable events, there is a course for you.
  
  Whatever stage of your career you think you are in right now - a seasoned professional or a starter, Pluralcode’s Expert-Led Courses are designed to provide you with a comprehensive learning experience that covers everything from theory to practical applications.
  
  You’ll learn from successful experts who have real-world experience and who are passionate about sharing their knowledge with others.
  
  Start your journey towards success today!!!`
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
