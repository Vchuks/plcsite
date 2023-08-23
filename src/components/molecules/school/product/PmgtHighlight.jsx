import Logo from "../../../atoms/Logo";
import Text from "../../../atoms/Text";
import dot from "../../../../assets/images/Ellipse 1.png";

const PmgtHighlight = () => {
  return (
    <div className="bg-[#22205712] px-4 lg:px-14 py-10 lg:py-14">
      <div className="w-20 h-2 rounded-2xl my-3 bg-corange"></div>
      <p className="relative text-cdark w-max font-['aristsemibold'] text-3xl lg:text-5xl">
        Course <span className="text-corange">Highlights</span>
      </p>
      <div className="lg:w-[87%] 2xl:w-9/12 xxxl:w-[55%] m-auto flex flex-col lg:flex-row py-8 gap-14 lg:gap-0 lg:py-16">
        <div className="w-11/12 lg:w-[450px] h-full lg:h-[510px] flex flex-col justify-between  m-auto bg-white relative border border-[#0D0032] rounded-ss-[8px] rounded-ee-[8px]">
          <Text
            className="text-white text-2xl lg:text-3xl p-4 lg:px-5 lg:pt-8 lg:pb-7 bg-cdark"
            body="Product Management"
          />
          <Text
            className="font-['gregular'] text-lg lg:text-xl p-4 lg:p-6 lg:w-11/12"
            body="Dive deep into the tools, philosophies and practices for product management."
          />
          <ul className="text-cdark lg:text-lg px-4 lg:px-0 pb-8 lg:w-8/12 m-auto">
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li className="">Tools, Roles & Skillsets</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Product Design Thinking</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Product Metrics</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Product Prioritization</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Product Marketing</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Product Development</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Research & Validation</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>User Journey Mapping</li>
            </div>
          </ul>
          <div className="absolute rounded-ss-[8px] rounded-ee-[8px] w-full lg:w-[430px] h-full -z-10 -left-5 -bottom-5 bg-cdark border border-cdark"></div>
          <div className="w-full"></div>
        </div>
        <div className="w-11/12 lg:w-[450px] h-full lg:h-[510px] flex flex-col justify-between  m-auto shad bg-white relative border border-[#0D0032] rounded-ss-[8px] rounded-ee-[8px]">
          <Text
            className="text-white text-2xl lg:text-3xl p-4 lg:p-5 lg:pt-8 lg:pb-7 bg-corange"
            body="Agile & Scrum"
          />
          <Text
            className="font-['gregular'] text-lg lg:text-xl p-4 lg:p-6 lg:w-11/12"
            body="Learn about the methodologies of modern product management."
          />
          <ul className="text-cdark lg:text-lg px-4 lg:px-0 pb-8 lg:w-8/12 m-auto ">
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li className="">Agile & Scrum Intro</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Methodologies</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Scrum Principles</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Scrum Aspects</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Scrum Events</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Scaling For Large Projects</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Scaling For Enterprise</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Capstone Projects</li>
            </div>
          </ul>
          <div className="absolute rounded-ss-[8px] rounded-ee-[8px] w-full lg:w-[430px] h-full -z-10 -left-5 -bottom-5 bg-corange border border-cdark"></div>
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PmgtHighlight;
