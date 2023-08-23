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
    <div className="bg-cblue border font-['gmedium'] border-cblue items-center flex  justify-between px-4 lg:px-14 py-4 lg:py-8 ">
      <div className="w-full">
        <Logo src={plclogo} alt="Pluralcode" className="w-52" />
      </div>
      <div className="w-full hidden lg:flex items-center text-white justify-between">
        <div className="relative flex items-center gap-2 cursor-pointer" onMouseEnter={handleSchdp} onMouseLeave={handleSchdp} >
          <Text className="" body="Schools" />
          <FaChevronDown className="text-xs" />
        {/* school drop down */}
        {schdp &&<div className="w-[300px] absolute top-full mt-1 font['gmedium'] bg-white schdp p-5 lg:p-6 gap-4 text-black flex">
            <div className="flex flex-col gap-2 text-sm font-['gmedium']">
                <TextLink to="/school/product" className="text-cdark" body="Product School"/>
                <TextLink to="/school/data" className="text-cdark" body="Data School"/>
                <TextLink to="/school/programming" className="text-cdark" body="Programming School"/>
                <TextLink to="/school/cloud" className="text-cdark" body="Cloud School"/>
            </div>
        </div>}
        </div>
        <TextLink to="#" className="" body="Tuition" />
        <TextLink to="#" className="" body="FAQ" />
        <TextLink to="#" className="" body="LooP" />
        <div className="relative flex items-center gap-2 cursor-pointer" onMouseEnter={handleMoredp} onMouseLeave={handleMoredp}>
          <Text className="" body="More" />
          <FaChevronDown className="text-xs"/>
          {/* more drop down */}
        {moredp &&<div className="w-[200px] absolute top-full mt-1 bg-white schdp p-5 lg:p-6 lg:pt-7 h-32 gap-4 text-cdark">
            <div className="flex flex-col gap-2 text-sm font-['gmedium']">
                
                <TextLink to="" className="text-cdark " body="Why Pluralcode"/>
                <TextLink to="" className="text-cdark " body="Partner with us"/>
            </div>
        </div>}
        </div>
      </div>
      <div className="w-full hidden lg:flex justify-end items-center text-center gap-4">
        <TextLink
          to="#"
          className="w-32 pt-3 pb-2 border rounded text-corange text-sm border-corange"
          body={<button className="w-full">Sign In</button>}
        />
        <TextLink
          to="#"
          className="w-36 bg-corange text-white text-sm rounded pt-3 pb-2"
          body={<button className="w-full">Start Learning</button>}
        />
      </div>
      <div className="flex justify-end lg:hidden" onClick={handleNav}>
        <Logo src={icon} className="w-9/12" alt="" />
      </div>
      {/* small screen nav  */}
      {smallNav && (
        <div className="block lg:hidden w-full bg-cblue z-10 h-screen text-lg absolute top-0 left-0 px-6 py-4 smallnav">
          <div className="w-1/4 ml-auto flex justify-end" onClick={handleNav}>
            <Logo src={closeicon} className="w-10" />
          </div>
          <div className="flex flex-col gap-10 mt-6 text-white">
          <div className="relative flex items-center gap-2 cursor-pointer" >
          <Text className="" body="School"  onClick={handleSchdp}   />
          <FaChevronDown className="text-xs"/>
        {/* school drop down */}
        {schdp &&<div className="w-3/4 z-10 absolute top-full mt-1 bg-white schdp p-4 text-black flex flex-col gap-2">
        <div className="flex flex-col gap-2 text-sm font-['gmedium']">
                <TextLink to="/school/product" className="text-sm text-cdark" body="Product School"/>
                <TextLink to="/school/data" className="text-sm text-cdark" body="Data School"/>
                <TextLink to="/school/programming" className="text-sm text-cdark" body="Programming School"/>
                <TextLink to="/school/cloud" className="text-sm text-cdark" body="Cloud School"/>
            </div>
        </div>}
        </div>
            <TextLink to="#" className="" body="Tuition" />
            <TextLink to="#" className="" body="FAQ" />
            <TextLink to="#" className="" body="LooP" />
            <div className="relative flex items-center gap-2 cursor-pointer">
          <Text className="" body="More" onMouseEnter={handleMoredp} onMouseLeave={handleMoredp} />
          <FaChevronDown className="text-xs" />
          {/* more drop down */}
        {moredp &&<div className="w-3/4 h-[120px] absolute z-10 top-full mt-1 bg-white schdp p-4 gap-4 text-black">
        <div className="flex flex-col gap-2 text-sm font-['gmedium']">
                <TextLink to="" className="text-cdark text-sm" body="Why Pluralcode"/>
                <TextLink to="" className="text-cdark text-sm" body="Partner with us"/>
            </div>
        </div>}
        </div>
          <div className="w-full flex items-center text-center gap-4">
            <TextLink
              to="#"
              className="w-32 pt-3 pb-2 border rounded text-corange border-corange"
              body={<button className="w-full">Sign In</button>}
            />
            <TextLink
              to="#"
              className="w-36 bg-corange text-white rounded pt-3 pb-2"
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
