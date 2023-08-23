import Logo from "../../atoms/Logo";
import Text from "../../atoms/Text";
import TextLink from "../../atoms/TextLink";
import whats from "../../../assets/images/ri_whatsapp-fill.png";
import curve1 from "../../../assets/images/Frame.png";
import curve2 from "../../../assets/images/Vector 10.png";
import curve3 from "../../../assets/images/Vector 11.png";

const ProductHero = () => {   
  
  return (
    <div className="flex flex-col items-center lg:flex-row bg-[#F5F6FA] px-4 lg:px-14 py-8 lg:py-32 gap-6">
      <div className="lg:w-7/12 2xl:w-full relative">
        <div className="hidden lg:block absolute w-[70px] top-1 right-[44%] 2xl:right-[46%]"><Logo src={curve1} alt="" className="w-full"/></div>
        <div className="hidden lg:block absolute w-[40px] -left-[6%] top-0 2xl:-left-10"><Logo src={curve2} alt="" className="w-full"/></div>
        <Text
          className="hidden lg:block plt w-fit px-4 text-corange text-xs pt-1"
          body="Welcome to Pluralcode's"
        />
        <p className="hero-text 2xl:w-[750px] 2xl:text-7xl leading-tight lg:leading-none pt-6 text-cblue">
          Product <span className="text-corange">School</span>
        </p>
        <Text
          className="lg:w-9/12 2xl:w-[800px] 2xl:py-5 2xl:text-2xl py-3 lg:py-0  font-['gmedium'] text-cblue"
          body="Our Product school has been designed to help students launch a successful career in product design (UI/UX), Agile Project and Product managements. Prepares you for jobs in manufacturing, consultancy-based design/management, creative industries: (graphics, marketing, research)"
        />
        
        <div className="relative pt-4 lg:text-lg text-cblue flex gap-1 ">
          Got Questions?
          <TextLink className="" to="#" body={<span className="flex text-corange items-center gap-2">
            Chat with us{" "}
            <div className="w-4 lg:w-5">
              <Logo src={whats} className="w-full" alt="" />
            </div>
          </span>}/>
            <div className="hidden lg:block absolute w-[40px] left-[38%] 2xl:left-[33%] top-2"><Logo src={curve3} alt="" className="w-full"/></div>
        </div>
      </div>
      <div className="w-full">
        <Logo className="w-full" src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/IMG_4238.PNG" alt="" />
        
      </div>
    </div>
  );
};

export default ProductHero;
