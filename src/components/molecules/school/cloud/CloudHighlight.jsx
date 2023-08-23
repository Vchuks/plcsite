import Logo from "../../../atoms/Logo";
import Text from "../../../atoms/Text";
import dot from "../../../../assets/images/Ellipse 1.png";

const CloudHighlight = () => {
  return (
    <div className="bg-[#22205712] px-4 lg:px-14 py-10 lg:py-14">
      <div className="w-20 h-2 rounded-2xl my-3 bg-corange"></div>
      <p className="relative text-cdark w-max font-['aristsemibold'] text-3xl lg:text-5xl">
        Course <span className="text-corange">Highlights</span>
      </p>
      <div className="lg:w-[87%] 2xl:w-9/12 xxxl:w-[55%] m-auto flex flex-col lg:flex-row py-8 gap-14 lg:gap-0 lg:py-16">
        <div data-aos="zoom-in-up" data-aos-duration="2000">
        <div className="w-11/12 lg:w-[450px] h-full lg:h-[510px] flex flex-col justify-between m-auto bg-white relative border border-[#0D0032] rounded-ss-[8px] rounded-ee-[8px]">
          <Text
            className="text-white text-2xl lg:text-3xl p-4 lg:px-5 lg:pt-8 lg:pb-7 bg-cdark"
            body="MS Azure & Cloud Basics"
          />
          <Text
            className="font-['gregular'] text-lg lg:text-xl p-4 lg:p-6 lg:w-11/12"
            body="Learn how to manage, engineer and administer Azure Cloud."
          />
          <ul className="text-cdark lg:text-lg px-4 lg:px-0 pb-8 lg:w-8/12 m-auto">
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li className="">Cloud Basics</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Intro to Azure</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Cloud Shell</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Power Shell</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Linux Basics</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Command Line Interface</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Bash (Shell) Scripting</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Windows Server basics</li>
            </div>
          </ul>
          <div className="absolute rounded-ss-[8px] rounded-ee-[8px] w-full lg:w-[430px] h-full -z-10 -left-5 -bottom-5 bg-cdark border border-cdark"></div>
          <div className="w-full"></div>
        </div>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
        <div className="w-11/12 lg:w-[450px] h-full lg:h-[510px] flex flex-col justify-between  m-auto shad bg-white relative border border-[#0D0032] rounded-ss-[8px] rounded-ee-[8px]" >
          <Text
            className="text-white text-2xl lg:text-3xl p-4 lg:p-5 lg:pt-8 lg:pb-7 bg-corange"
            body="MS Azure & Cloud Basics"
          />
          <Text
            className="font-['gregular'] text-lg lg:text-xl p-4 lg:p-6 lg:w-11/12"
            body="Learn how to manage, engineer and administer Azure Cloud."
          />
          <ul className="text-cdark lg:text-lg px-4 lg:px-0 pb-8 lg:w-8/12 m-auto ">
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li className="">Networking </li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Managing Identities</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Governance in Azure</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Azure Storage Management</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Azure Compute Resources</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Configure VMs</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Monitor & Backup Resources</li>
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
    </div>
  );
};

export default CloudHighlight;
