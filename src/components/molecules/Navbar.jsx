import Logo from "../atoms/Logo";
import { FaChevronDown } from "react-icons/fa6";
import Text from "../atoms/Text";
import plclogo from "../../assets/images/PluralCode 4.png";
import TextLink from "../atoms/TextLink";
import icon from "../../assets/images/icon.png";
import closeicon from "../../assets/images/closeicon.png";
import { useState } from "react";

const Navbar = () => {
  const [smallNav, setSmallNav] = useState(false);
  const [schdp, setSchdp] = useState(false);
  const [moredp, setMoredp] = useState(false);

  const handleNav = () => {
    setSmallNav(!smallNav);
  };

  const handleSchdp = () => {
    setSchdp(!schdp)
  }
  const handleMoredp = () => {
    setMoredp(!moredp)
  }

  return (
    <div className="bg-cblue border border-cblue flex justify-between px-4 lg:px-14 py-4 lg:py-8 ">
      <div className="w-full">
        <Logo src={plclogo} alt="Pluralcode" className="w-52" />
      </div>
      <div className="w-full hidden lg:flex items-center text-white justify-between">
        <div className="relative flex items-center gap-2 cursor-pointer" onMouseEnter={handleSchdp} onMouseLeave={handleSchdp} >
          <Text className="" body="School" />
          <FaChevronDown />
        {/* school drop down */}
        {schdp &&<div className="absolute top-full mt-1 bg-white schdp p-8 gap-4 text-black flex">
            <div>
                <Text className="" body="Product School"/>
                <TextLink to="" className="" body="Product Design"/>
            </div>
            <div>
                <Text className="" body="Product School"/>
                <TextLink to="" className="" body="Product Design"/>
            </div>
            <div>
                <Text className="" body="Product School"/>
                <TextLink to="" className="" body="Product Design"/>
            </div>
        </div>}
        </div>
        <TextLink to="#" className="" body="Tuition" />
        <TextLink to="#" className="" body="FAQ" />
        <TextLink to="#" className="" body="LooP" />
        <div className="relative flex items-center gap-2 cursor-pointer" onMouseEnter={handleMoredp} onMouseLeave={handleMoredp}>
          <Text className="" body="More" />
          <FaChevronDown />
          {/* more drop down */}
        {moredp &&<div className="absolute top-full mt-1 bg-white schdp p-8 gap-4 text-black flex">
            <div>
                <Text className="" body=" School"/>
                <TextLink to="" className="" body="Product Design"/>
            </div>
            <div>
                <Text className="" body=" School"/>
                <TextLink to="" className="" body="Product Design"/>
            </div>
            <div>
                <Text className="" body="Product School"/>
                <TextLink to="" className="" body="Product Design"/>
            </div>
        </div>}
        </div>
      </div>
      <div className="w-full hidden lg:flex justify-end items-center text-center gap-4">
        <TextLink
          to="#"
          className="w-32 py-2 border rounded text-corange text-sm border-corange"
          body={<button className="w-full">Sign In</button>}
        />
        <TextLink
          to="#"
          className="w-36 bg-corange text-white text-sm rounded py-2"
          body={<button className="w-full">Start Learning</button>}
        />
      </div>
      <div className="flex justify-end lg:hidden" onClick={handleNav}>
        <Logo src={icon} className="w-9/12" />
      </div>
      {smallNav && (
        <div className="w-full bg-cblue h-screen absolute top-0 left-0 px-4 py-4 smallnav">
          <div className="w-1/4 ml-auto flex justify-end" onClick={handleNav}>
            <Logo src={closeicon} className="w-10" />
          </div>
          <div className="flex flex-col gap-10 text-white">
          <div className="relative flex items-center gap-2 cursor-pointer" onClick={handleSchdp} onMouseEnter={handleSchdp} onMouseLeave={handleSchdp} >
          <Text className="" body="School" />
          <FaChevronDown />
        {/* school drop down */}
        {schdp &&<div className="absolute top-full mt-1 bg-white schdp p-8 gap-4 text-black flex">
            <div>
                <Text className="" body="Product School"/>
                <TextLink to="" className="" body="Product Design"/>
            </div>
            <div>
                <Text className="" body="Product School"/>
                <TextLink to="" className="" body="Product Design"/>
            </div>
            <div>
                <Text className="" body="Product School"/>
                <TextLink to="" className="" body="Product Design"/>
            </div>
        </div>}
        </div>
            <TextLink to="#" className="" body="Tuition" />
            <TextLink to="#" className="" body="FAQ" />
            <TextLink to="#" className="" body="LooP" />
            <div className="relative flex items-center gap-2 cursor-pointer"onClick={handleMoredp} onMouseEnter={handleMoredp} onMouseLeave={handleMoredp}>
          <Text className="" body="More" />
          <FaChevronDown />
          {/* more drop down */}
        {moredp &&<div className="absolute top-full mt-1 bg-white schdp p-8 gap-4 text-black flex">
            <div>
                <Text className="" body=" School"/>
                <TextLink to="" className="" body="Product Design"/>
            </div>
            <div>
                <Text className="" body=" School"/>
                <TextLink to="" className="" body="Product Design"/>
            </div>
            <div>
                <Text className="" body="Product School"/>
                <TextLink to="" className="" body="Product Design"/>
            </div>
        </div>}
        </div>
          <div className="w-full flex items-center text-center gap-4">
            <TextLink
              to="#"
              className="w-32 py-2 border rounded text-corange border-corange"
              body={<button className="w-full">Sign In</button>}
            />
            <TextLink
              to="#"
              className="w-36 bg-corange text-white rounded py-2"
              body={<button className="w-full">Start Learning</button>}
            />
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
