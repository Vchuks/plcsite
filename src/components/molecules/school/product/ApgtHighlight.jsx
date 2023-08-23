import Logo from "../../../atoms/Logo";
import Text from "../../../atoms/Text";
import dot from "../../../../assets/images/Ellipse 1.png";

const ApgtHighlight = () => {
  return (
    <div className="bg-[#22205712] px-4 lg:px-14 py-10 lg:py-14">
      <div className="w-20 h-2 rounded-2xl my-3 bg-corange"></div>
      <p className="relative text-cdark w-max font-['aristsemibold'] text-3xl lg:text-5xl">
        Course <span className="text-corange">Highlights</span>
      </p>
      <div className="lg:w-[87%] 2xl:w-9/12 xxxl:w-[55%] m-auto flex flex-col lg:flex-row py-8 gap-14 lg:gap-0 lg:py-16">
        <div data-aos="fade-up" data-aos-duration="2000">
        <div className="w-11/12 lg:w-[450px] h-full lg:h-[510px] flex flex-col justify-between m-auto bg-white relative border border-[#0D0032] rounded-ss-[8px] rounded-ee-[8px]">
          <Text
            className="text-white text-2xl lg:text-3xl p-4 lg:px-5 lg:pt-8 lg:pb-7 bg-cdark"
            body="Agile Project Management"
          />
          <Text
            className="font-['gregular'] text-lg lg:text-xl p-4 lg:p-6 lg:w-11/12"
            body="Master the “Agile” in Technical Project Management "
          />
          <ul className="text-cdark lg:text-lg px-4 lg:px-0 pb-8 lg:w-8/12 m-auto">
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li className="">Overview</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Agile Methodologies</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Agile Planning</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Agile Project Initiation</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Product Backlog</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Monitoring & Control</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Agile Project Execution</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Semester Assessments</li>
            </div>
          </ul>
          <div className="absolute rounded-ss-[8px] rounded-ee-[8px] w-full lg:w-[430px] h-full -z-10 -left-5 -bottom-5 bg-cdark border border-cdark"></div>
          <div className="w-full"></div>
        </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
        <div className="w-11/12 lg:w-[450px] h-full lg:h-[510px] flex flex-col justify-between  m-auto shad bg-white relative border border-[#0D0032] rounded-ss-[8px] rounded-ee-[8px]">
          <Text
            className="text-white text-2xl lg:text-3xl p-4 lg:p-5 lg:pt-8 lg:pb-7 bg-corange"
            body="SCRUM Methodology"
          />
          <Text
            className="font-['gregular'] text-lg lg:text-xl p-4 lg:p-6 lg:w-11/12"
            body="Become an expert in SCRUM Methodology for Project Management."
          />
          <ul className="text-cdark lg:text-lg px-4 lg:px-0 pb-8 lg:w-8/12 m-auto ">
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li className="">Overview</li>
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
              <li>Scrum Planning & Estimation</li>
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
              <li>Final Project</li>
            </div>
          </ul>
          <div className="absolute rounded-ss-[8px] rounded-ee-[8px] w-full lg:w-[430px] h-full -z-10 -left-5 -bottom-5 bg-corange border border-cdark"></div>
          <div className="w-full"></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ApgtHighlight;
