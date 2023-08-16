import Logo from "../../atoms/Logo";
import Text from "../../atoms/Text";
import TextLink from "../../atoms/TextLink";
import whats from "../../../assets/images/ri_whatsapp-fill.png";
import map from "../../../assets/images/Group 4.png"

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row bg-cblue border-0 px-4 lg:px-14 py-8 lg:py-32">
      <div className="w-full">
        <Text className="hidden lg:block plt w-fit px-4 text-corange text-xs pt-1" body="Pluralcode" />
        <p className="hero-text text-center lg:text-left leading-tight lg:leading-none pt-6 text-white">
          Acquire <span className="text-corange">Tech Skills </span>For a Borderless Career.
        </p>
        <Text
          className="text-center py-3 lg:py-0 lg:text-left lg:w-96 lg:text-lg text-white"
          body="Your global tech journey begins here. Master the skills you need to start a successful career."
        />
        <div className="border rounded-2xl gap-5 my-4 border-corange selectdiv flex flex-col lg:flex-row items-center px-6 justify-between py-4">
          <select className="w-full hero-link outline-none text-center text-sm text-cblue rounded bg-white pt-4 pb-3">
            <option className="">Select Course</option>
            <option className="text-left">Course</option>
          </select>
          <TextLink
          to="#"
            className="w-full hero-link bg-corange rounded"
            body={<button className="pt-3 pb-3 w-full text-center text-sm text-white rounded">Start Learning</button>}
          />
        </div>
        <div className="text-white flex gap-1">
          Got Questions?
          <span className="flex text-corange items-center gap-2">
            Chat with us <div className="w-5"><Logo src={whats} className="w-full" alt="" /></div>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-8/12">
        <Logo className="" src={map} alt=""/>
      </div>
    </div>
  );
};

export default Hero;
