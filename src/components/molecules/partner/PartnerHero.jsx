import Text from "../../atoms/Text";
import sub from "../../../assets/images/Subtract4.png";
import sub2 from "../../../assets/images/Subtract5.png";
import imm from "../../../assets/images/Group 20752.png";
import imm2 from "../../../assets/images/Group 20753.png";

import Logo from "../../atoms/Logo";

const PartnerHero = () => {
  return (
    <div className="bg-cblue relative -z-10 px-4 lg:px-14 py-10 lg:py-14 pb-0">
      <div className="lg:w-[800px] relative m-auto">
        <p className="lg:w-[650px] m-auto text-white leading-[1.3] text-center font-['aristbold'] text-3xl lg:text-[64px]">
          Build <span className="text-corange">Amazing </span>Things With Pluralcode
        </p>
        <Text
          className="text-center lg:w-[800px] text-white font-['gsemibold'] lg:text-2xl"
          body="We are doing amazing things! facilitating digital transformation in Africa and showcasing Africa’s talents to the world. Let’s collaborate and do great things together."
        />
        <div className="hidden absolute right-[15%] top-[40%] lg:flex">
          <Logo src={sub} className="w-14" alt="" />
        </div>
        <div className="hidden absolute left-[7%] -top-[10%] lg:flex">
          <Logo src={sub2} className="w-[52px]" alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-end mt-10 lg:mt-28 gap-5 pb-10 lg:pb-0 2xl:gap-10 relative">
        
        
        <div className="w-full lg:w-[20%] lg:h-[300px]">
            <div className="w-full flex lg:h-full items-end">

          <Logo
            src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/new4.png"
            className="w-full"
            alt=""
            />
            </div>
        </div>
        <div className="w-full lg:w-[20%] lg:h-[300px]">
            <div className="flex lg:h-full items-end">

          <Logo
            src={imm}
            className="w-full"
            alt=""
            />
            </div>
        </div>
        
        <div className="w-full  lg:w-[20%] lg:h-[300px] 2xl:h-[360px] ">
            <div className="lg:h-full w-full flex items-end">

          <Logo
            src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/new2.png"
            className="w-full lg:h-full object-contain"
            alt=""
            />
            </div>
        </div>
        <div className="w-full lg:w-[20%] lg:h-[300px] 2xl:h-[360px] ">
            <div className="lg:h-full w-full flex items-end">

          <Logo
            src={imm2}
            className="w-full lg:h-full object-contain"
            alt=""
            />
            </div>
        </div>
        <div className="w-full lg:w-[20%] lg:h-[300px] 2xl:h-[360px] ">
            <div className="lg:h-full w-full flex items-end">

          <Logo
            src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/new3.png"
            className="w-full lg:h-full object-contain"
            alt=""
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerHero;
