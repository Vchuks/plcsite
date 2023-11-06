import Logo from "../../../atoms/Logo";
import Text from "../../../atoms/Text";
import TextLink from "../../../atoms/TextLink";
import whats from "../../../../assets/images/ri_whatsapp-fill.png";
import curve1 from "../../../../assets/images/Frame.png";
import curve2 from "../../../../assets/images/Vector 10.png";
import curve3 from "../../../../assets/images/Vector 11.png";
import emergpic from "../../../../assets/images/emergingpic.png";

const EmergingHero = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row bg-[#F5F6FA] px-4 lg:px-14 pb-4 lg:py-0 gap-6 lg:gap-0">
      <div
        className="lg:w-2/4 2xl:w-full relative"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="hidden lg:block absolute w-[70px] top-0 right-[30%] 2xl:right-[43%] xxxl:right-[50%] xxxl:w-[100px]">
          <Logo src={curve1} alt="" className="w-full" />
        </div>
        <div className="hidden rotate-[320deg] lg:block absolute w-[70px] top-[18%] left-[9%] 2xl:top-[15%] xxxl:top-[20%] xxxl:left-[7%]  xxxl:w-[100px]">
          <Logo src={curve1} alt="" className="w-full" />
        </div>
        <div className="hidden lg:block absolute w-[40px] -left-[7%] top-0 2xl:-left-[5%]  xxxl:w-[60px]">
          <Logo src={curve2} alt="" className="w-full" />
        </div>
        <Text
          className="hidden lg:block plt w-fit px-4 text-corange text-xs pt-1 xxxl:text-3xl"
          body="Welcome to Pluralcode's"
        />
        <p className="hero-text 2xl:w-[750px] 2xl:text-7xl leading-tight lg:leading-[1.2] xxxl:leading-[1.3] pt-6 text-cblue xxxl:text-8xl xxxl:w-[1000px]">
          <span className="text-corange">School of</span> Emerging Technologies
        </p>
        <Text
          className="lg:w-10/12 2xl:w-[800px] xxxl:w-[950px] 2xl:py-5 2xl:text-2xl py-3 lg:py-0  font-['gmedium'] text-cblue xxxl:text-3xl xxxl:leading-tight"
          body="The School of Emerging Technologies will turn you into a top 1% earner in the tech space by helping you master all the cutting edge skills across both Web2.0 and Web3.0. Students will learn different courses ranging from Digital Assets Banking, Blockchain Development, Financial Markets Analysis, Cryptocurrencies, Artificial Intelligence & other high-paying skills which are in high demand."
        />

        <div className="relative pt-4 lg:text-lg xxxl:text-2xl text-cblue flex gap-1 ">
          Got Questions?
          <TextLink
            className=""
            to="https://wa.me/2347083153185?text=I%27m%20interested%20in%20taking%20one%20of%20your%20programs"
            target="_blank"
            body={
              <span className="flex text-corange items-center gap-2">
                Chat with us{" "}
                <div className="w-4 lg:w-5">
                  <Logo src={whats} className="w-full" alt="" />
                </div>
              </span>
            }
          />
          <div className="hidden lg:block absolute w-[40px] left-[45%] 2xl:left-[33%] top-8 xxxl:left-[28%]">
            <Logo src={curve3} alt="" className="w-full" />
          </div>
        </div>
      </div>
      <div className="w-full" data-aos="zoom-in-up" data-aos-duration="2000">
        <Logo className="w-full xxxl:w-3/4" src={emergpic} alt="" />
      </div>
    </div>
  );
};

export default EmergingHero;
