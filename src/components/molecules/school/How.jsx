import curve from "../../../assets/images/Vector 5.png";
import Logo from "../../atoms/Logo";
import Text from "../../atoms/Text";
import TextLink from "../../atoms/TextLink";
import sub from "../../../assets/images/Subtract (1).png";
import sub2 from "../../../assets/images/Subtract.png";
import sub3 from "../../../assets/images/Subtract3.png";


const How = () => {
  return (
    <div className="how-box  px-4 lg:px-14 py-10 lg:py-14">
        <div className="">
      <div className="w-20 h-2 rounded-2xl my-3 bg-corange"></div>
        <p className="relative text-cdark lg:w-max font-['aristsemibold'] text-3xl lg:text-5xl">
          How <span className="text-corange">To </span>Apply
        <span className="hidden lg:block absolute w-[100px] h-full top-[45%] -right-[40%]"><Logo src={curve} alt="" className="w-full"/></span>
        </p>
        </div>
        <div className="w-full relative lg:w-[88%] 2xl:w-[70%] xxxl:w-3/6 m-auto flex flex-col flex-wrap my-20 lg:flex-row justify-center gap-10 lg:gap-x-0">
        <div className="hidden absolute -top-[5%] right-0 lg:flex">
          <Logo src={sub3} className="w-14" alt="" />
        </div>
            <div className="relative w-11/12 m-auto lg:w-[450px] bg-white border border-black rounded-ss-[30px] rounded-ee-[30px]">
                <Text className="px-5 py-8 rounded-ss-[30px] bg-corange font-['gbold'] text-cdark text-xl lg:text-3xl" body="01 (Step One) "/>
                <div className="p-4 lg:p-6">
                <Text className="text-cdark font-['gexbold'] text-2xl lg:text-4xl" body="Complete and Submit Admission Form"/>
                <Text className="lg:text-xl lg:w-11/12 pt-5" body="You will need to fill out Pluralcode’s admission form, by clicking the button below. Select your preferred course, learning format and payment plan. Endeavor to provide accurate contact and bio information."/>
                <TextLink to="#" className="flex justify-center" body={<button className="bg-corange w-60 py-3 mt-4 text-white rounded">Start Learning</button>}/>
                </div>
                <div className="absolute -z-[1] rounded-ss-[30px] rounded-ee-[30px] w-full h-[90%] -right-3 lg:-right-6 top-5 border border-black bg-white"></div>
            </div>
            <div className="relative w-11/12 m-auto lg:w-[450px] bg-white border border-black rounded-ss-[30px] rounded-ee-[30px]">
                <Text className="px-5 py-8 rounded-ss-[30px] bg-cgray font-['gbold'] text-white text-xl lg:text-3xl" body="02 (Step Two) "/>
                <div className="p-4 lg:p-7">
                <Text className="text-cdark font-['gexbold'] text-2xl lg:text-4xl" body="Pay Tuition And Get Onboarded"/>
                <Text className="lg:text-xl lg:w-11/12 pt-5" body="You will be required to pay tuition using one of our available payment methods. Once payment is complete, you will immediately receive emails with your welcome letter, Learning Portal login and Access to live classrooms (for live trainings) and student community access."/>
                
                </div>
                <div className="absolute -z-[1] rounded-ss-[30px] rounded-ee-[30px] w-full h-[90%] -right-3 lg:-right-6 top-5 border border-black bg-white"></div>
            </div>
            <div className="relative w-11/12 m-auto lg:w-[450px] bg-white border border-black rounded-ss-[30px] rounded-ee-[30px]">
                <Text className="px-5 py-8 rounded-ss-[30px] bg-cblue font-['gbold'] text-white text-xl lg:text-3xl" body="03 (Step Three) "/>
                <div className="p-4 lg:p-6">
                <Text className="text-cdark font-['gexbold'] text-2xl lg:text-4xl" body="Your Learning Journey Begins"/>
                <Text className="lg:text-xl lg:w-11/12 pt-5" body="Once you are onboarded, you can start learning and practicing on your portal right away. Students of our Live-Training programs (Onsite & Virtual) will also receive a calendar with weekly dates marked for live-trainings & project assessments with our instructors &  expert mentors."/>
                
                </div>
                <div className="absolute -z-[1] rounded-ss-[30px] rounded-ee-[30px] w-full h-[90%] -right-3 lg:-right-6 top-5 border border-black bg-white"></div>
            </div>
            <div className="hidden lg:block absolute bottom-[42%] right-[18%]">
          <Logo src={sub2} className="w-14" alt="" />
        </div>
        <div className="hidden lg:flex absolute bottom-[42%] left-[20%]">
          <Logo src={sub} className="w-14" alt="" />
        </div>
        </div>
        <div className="font-['gregular'] w-full text-center">
            <Text className="font-['gsemibold'] text-3xl text-cblue lg:text-[48px]" body="Got Questions?"/>
            <p className="text-cdark text-lg pt-4">Our Student Advisors are on standby.<TextLink className="" to="#" body={<span className="text-corange">Chat with us</span>}/></p>
        </div>
    </div>
  )
}

export default How
