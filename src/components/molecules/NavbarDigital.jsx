import Logo from "../atoms/Logo";
import { FaChevronDown } from "react-icons/fa6";
import Text from "../atoms/Text";
import plclogo from "../../assets/images/plclogo.png";
import TextLink from "../atoms/TextLink";
import icon from "../../assets/images/icon.png";
import closeicon from "../../assets/images/closeicon.png";
import { useState } from "react";
// import { useParams } from "react-router-dom";

const NavbarDigital = () => {
  const [smallNav, setSmallNav] = useState(false);
  const [schdp, setSchdp] = useState(false);
  const [moredp, setMoredp] = useState(false);

  const handleNav = () => {
    setSmallNav(!smallNav);
  };

  const handleSchdp = () => {
    setSchdp(!schdp);
  };
  const handleMoredp = () => {
    setMoredp(!moredp);
  };
  const closeNav = () => {
    setSmallNav(!smallNav);
    setSchdp(false);
    setMoredp(false);
  };

  return (
    <div className="bg-[#F5F6FA] font-['gmedium'] items-center flex justify-between px-4 lg:px-14 py-4 lg:py-8 ">
      <div className="w-full">
        <TextLink
          to="/"
          className=""
          body={
            <Logo src={plclogo} alt="Pluralcode" className="w-52 xxxl:w-64" />
          }
        />
      </div>
      <div className="w-full hidden lg:flex items-center text-cgray font-['gmedium'] justify-between xxxl:text-2xl">
        <div
          className="relative flex items-center gap-2 cursor-pointer"
          onMouseEnter={handleSchdp}
          onMouseLeave={handleSchdp}
        >
          <Text className="" body="Schools" />
          <FaChevronDown className="text-xs" />
          {/* school drop down */}
          {schdp && (
            <div className="w-[300px] z-20 absolute top-full mt-[2px] font-['gmedium] bg-white schdp p-5 lg:p-6 gap-4 text-black flex">
              <div className="flex flex-col gap-2 text-sm xxxl:text-xl font-['gmedium']">
                <TextLink
                  to="/school/product"
                  className=" text-cdark"
                  body="Product School"
                  onClick={closeNav}
                />
                <TextLink
                  to="/school/data"
                  className=" text-cdark"
                  body="Data School"
                />
                <TextLink
                  to="/school/programming"
                  className=" text-cdark"
                  body="Programming School"
                />
                <TextLink
                  to="/school/cloud"
                  className=" text-cdark"
                  body="Cloud School"
                />
                <TextLink
                  to="/school/emerging_technologies"
                  className=" text-cdark"
                  body="Emerging Technologies"
                />
                <TextLink
                  to="/school/digital_economy"
                  className="text-cdark"
                  body="Digital Economy"
                />
                <TextLink
                  to="/school/business"
                  className="text-cdark"
                  body="Business School"
                />
              </div>
            </div>
          )}
        </div>
        <TextLink to="/tuition" className="" body="Tuition" />
        <TextLink to="/faq" className="" body="FAQ" />
        {/* <TextLink to="https://pluralcode.academy/loop" className="" body="LooP" /> */}
        <div
          className="relative flex items-center gap-2 cursor-pointer"
          onMouseEnter={handleMoredp}
          onMouseLeave={handleMoredp}
        >
          <Text className="" body="More" />
          <FaChevronDown className="text-xs" />
          {/* more drop down */}
          {moredp && (
            <div className="w-[200px] z-20 absolute top-full mt-[2px] bg-white schdp p-5 lg:p-6 lg:pt-7 h-32 gap-4 text-cdark">
              <div className="flex flex-col gap-2 text-sm xxxl:text-xl font-['gmedium']">
                <TextLink
                  to="/why_pluralcode"
                  className="text-cdark "
                  body="Why Pluralcode"
                />
                <TextLink
                  to="/partnership"
                  className="text-cdark "
                  body="Partner with us"
                />
                <TextLink
                  to="/verify_certificate"
                  className="text-cdark "
                  body="Verify Certificate"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full hidden lg:flex justify-end items-center text-center gap-4">
        {/* <TextLink
          to="#"
          className="w-32 pt-3 pb-3 xxxl:w-44 xxxl:py-5 xxxl:text-lg border rounded text-corange text-sm border-corange"
          body={<button className="w-full">Sign In</button>}
        /> */}
        <TextLink
          to="https://pluralcode.academy/signup/"
          className="w-36 bg-[#0D0032] xxxl:w-44 xxxl:py-5 xxxl:text-lg text-white text-sm rounded pt-3 pb-3"
          body={<button className="w-full">Start Learning</button>}
        />
      </div>
      <div className="flex justify-end lg:hidden" onClick={handleNav}>
        <Logo src={icon} className="w-9/12" alt="" />
      </div>
      {/* small screen nav  */}
      {smallNav && (
        <div className="block z-20 lg:hidden w-full bg-cblue h-screen text-lg fixed top-0 left-0 px-6 py-4 smallnav">
          <div className="w-1/4 ml-auto flex justify-end" onClick={handleNav}>
            <Logo src={closeicon} alt="" className="w-10" />
          </div>
          <div className="flex flex-col gap-10 mt-6 text-white">
            <div className="relative w-3/4 ">
              <div
                className="w-max flex items-center gap-2 cursor-pointer"
                onClick={handleSchdp}
              >
                <Text className="" body="Schools" />
                <FaChevronDown className="text-xs" />
              </div>
              {/* school drop down */}
              {schdp && (
                <div className="w-3/4 z-10 absolute top-full mt-1 bg-white schdp p-4 text-black flex flex-col gap-2">
                  <div className="flex flex-col gap-2 text-sm font-['gmedium']">
                    <TextLink
                      to="/school/product"
                      className="text-sm text-cdark"
                      body="Product School"
                      onClick={closeNav}
                    />
                    <TextLink
                      to="/school/data"
                      className="text-sm text-cdark"
                      body="Data School"
                      onClick={closeNav}
                    />
                    <TextLink
                      to="/school/programming"
                      className="text-sm text-cdark"
                      body="Programming School"
                      onClick={closeNav}
                    />
                    <TextLink
                      to="/school/cloud"
                      className="text-sm text-cdark"
                      body="Cloud School"
                      onClick={closeNav}
                    />
                    <TextLink
                      to="/school/emerging_technologies"
                      className="text-sm text-cdark"
                      body="Emerging Technologies"
                      onClick={closeNav}
                    />
                    <TextLink
                      to="/school/digital_economy"
                      className="text-sm text-cdark"
                      body="Digital Economy"
                      onClick={closeNav}
                    />
                    <TextLink
                      to="/school/business"
                      className="text-sm text-cdark"
                      body="Business"
                      onClick={closeNav}
                    />
                  </div>
                </div>
              )}
            </div>
            <TextLink
              to="/tuition"
              className=""
              body="Tuition"
              onClick={closeNav}
            />
            <TextLink to="/faq" className="" body="FAQ" onClick={closeNav} />
            {/* <TextLink to="https://pluralcode.academy/loop" className="" body="LooP" onClick={closeNav}/> */}
            <div className="relative w-3/4 ">
              <div
                className="w-max flex items-center gap-2 cursor-pointer"
                onClick={handleMoredp}
              >
                <Text className="" body="More" />
                <FaChevronDown className="text-xs" />
              </div>
              {/* more drop down */}
              {moredp && (
                <div className="w-3/4 h-[120px] absolute z-10 top-full mt-1 bg-white schdp p-4 gap-4 text-black">
                  <div className="flex flex-col gap-2 text-sm font-['gmedium']">
                    <TextLink
                      to="/why_pluralcode"
                      className="text-cdark text-sm"
                      body="Why Pluralcode"
                      onClick={closeNav}
                    />
                    <TextLink
                      to="/partnership"
                      className="text-cdark text-sm"
                      body="Partner with us"
                      onClick={closeNav}
                    />
                    <TextLink
                      to="/verify_certificate"
                      className="text-cdark text-sm"
                      body="Verify Certificate"
                      onClick={closeNav}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="w-full flex items-center text-center gap-4">
              {/* <TextLink
              to="#"
              className="w-32 text-sm py-3 border rounded text-corange border-corange"
              body={<button className="w-full">Sign In</button>}
            /> */}
              <TextLink
                to="https://pluralcode.academy/signup"
                onClick={closeNav}
                className="w-36 text-sm bg-corange text-white rounded py-3"
                body={<button className="w-full">Start Learning</button>}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarDigital;
