import Text from "../../atoms/Text";
import sub from "../../../assets/images/Subtract (1).png";
import sub2 from "../../../assets/images/Subtract.png";
import lines from "../../../assets/images/Group 20739.png";
import arrow from "../../../assets/images/Vector 30.png";
import plus from "../../../assets/images/Star 10.png";
import plus2 from "../../../assets/images/Star 10 (1).png";
import Logo from "../../atoms/Logo";

const WhyHero = () => {
  return (
    <div className="bg-[#F5F6FA] relative -z-10 px-4 lg:px-14 py-10 lg:py-14 pb-0">
      <div className="w-full lg:w-[650px] relative m-auto xxxl:w-2/4">
        <p className="text-cblue leading-[1.3] text-center font-['aristbold'] text-3xl lg:text-[64px] xxxl:text-[120px]">
          Building <span className="text-corange">Solutions </span>For Global
          Impact
        </p>
        <Text
          className="text-center text-cblue font-['gsemibold'] xxxl:text-2xl"
          body="For individuals, organizations and corporates across Africa and beyond, Pluralcode is on a mission to bridge the global talent gap by building the largest and most impactful tech talent incubator on the continent to showcase its talent to the world stage."
        />
        <div className="hidden absolute right-10 top-[40%] lg:flex">
          <Logo src={sub} className="w-14" alt="" />
        </div>
        <div className="hidden absolute left-10 top-[40%] lg:flex">
          <Logo src={sub2} className="w-[52px]" alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-end mt-28 gap-5 2xl:gap-10 relative">
        <div className="hidden absolute left-[21%] -top-7 lg:flex">
          <Logo src={plus} className="w-[40px]" alt="" />
        </div>
        <div className="hidden absolute left-[77%] -top-7 lg:flex">
          <Logo src={plus2} className="w-[48px]" alt="" />
        </div>
        <div className="font-['gmedium'] relative h-[300px] 2xl:h-[360px] bg-corange lg:w-[20%] why-line">
          <div>
            <Logo
              src={lines}
              className="why-line rounded-ee-none border-0"
              alt=""
            />
            <Logo src={arrow} className="w-24 my-4" alt="" />
            <Text
              className="text-cgray p-2 2xl:p-4 why-line rounded-ee-none border-0"
              body="We are building a massive tech school and a talent incubator, with cutting-edge academic practices and technologies to help you start your tech journey."
            />
          </div>
          <div className="absolute bg-cblue h-full lg:h-[32%] -bottom-[7px] -z-10 -right-[5px] w-full rounded-ss-[64px] rounded-ee-[64px]"></div>
        </div>
        <div className="relative bg-[#908CFE] h-[260px] 2xl:h-[300px] text-cblue lg:w-[18%] 2xl:w-[20%] rounded-se-[64px] rounded-es-[64px]">
          <div className="h-full px-10 flex flex-col justify-center">
            <Text className="font-['gbold'] text-center text-5xl" body="13k+" />
            <Text
              className="text-[32px] text-center py-4"
              body="Community Members"
            />
          </div>
          <div className="absolute bg-cblue h-[32%] -bottom-[7px] -z-10 -left-[5px] w-full rounded-se-[64px] rounded-es-[64px]"></div>
        </div>
        <div className=" w-full lg:w-[20%] h-[300px]">
          <div className="flex h-full items-end">
            <Logo
              src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/new6.png"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#FFD195] relative h-[260px] 2xl:h-[300px] text-cgray w-full lg:w-[18%] 2xl:w-[20%] rounded-ss-[64px] rounded-ee-[64px]">
          <div className="h-full px-10 flex flex-col justify-center">
            <Text className="font-['gbold'] text-center  text-5xl" body="6k+" />
            <Text
              className="text-[32px] text-center py-4"
              body="Graduated Students"
            />
          </div>
          <div className="absolute bg-cblue h-[32%] -bottom-[7px] -z-10 -right-[5px] w-full rounded-ss-[64px] rounded-ee-[64px]"></div>
        </div>
        <div className="w-full lg:w-[20%] h-[300px] 2xl:h-[360px] ">
          <div className="lg:h-full w-full flex items-end">
            <Logo
              src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/new5.png"
              className="w-full lg:h-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHero;
