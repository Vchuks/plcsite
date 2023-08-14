import Logo from "../../atoms/Logo";
import Text from "../../atoms/Text";
import TextLink from "../../atoms/TextLink";
import whats from "../../../assets/images/ri_whatsapp-fill.png";

const Hero = () => {
  return (
    <div className="flex bg-cblue border-0 px-4 lg:px-14 py-4">
      <div>
        <Text className="" body="Pluralcode" />
        <p>
          Acquire <span>Tech Skills </span>For a Borderless Career .
        </p>
        <Text
          className=""
          body="Your global tech journey begins here. Master the skills you need to start a successful career."
        />
        <div>
          <select className="">
            <option>Select Course</option>
          </select>
          <TextLink
            className=""
            body={<button className="">Start Learning</button>}
          />
        </div>
        <p className="">
          Got Questions?
          <span className="flex">
            Chat with us <Logo src={whats} className="" />
          </span>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
