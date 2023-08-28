import Text from "../../atoms/Text";
import curve from "../../../assets/images/Vector 5.png";
import Logo from "../../atoms/Logo";
import box from "../../../assets/images/Group 50.png";
import box2 from "../../../assets/images/Group 50 (1).png";
import sub from "../../../assets/images/Subtract (1).png";
import sub2 from "../../../assets/images/Subtract.png";
import sub3 from "../../../assets/images/Subtract3.png";

const Culture = () => {
  return (
    <div className="bg-[#FFFAF4] relative -z-10 px-4 lg:px-14 py-8 lg:py-14">
      <div className="w-20 h-2 rounded-2xl my-2 bg-corange"></div>
      <p className="w-max relative text-cdark font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl">
        Our <span className="text-corange">Culture</span>
        <span className="hidden lg:block absolute w-[100px] h-full top-[50%] -right-[35%]">
          <Logo src={curve} alt="" className="w-full" />
        </span>
      </p>
      <div className="flex flex-col lg:flex-row">
        <p className="text-lg font-['gmedium'] lg:w-[310px] xxxl:w-[420px] xxxl:text-2xl">
          These attributes define Pluralcode as an institution, and we strive to
          bring these out in our students as well.
        </p>

        <div
          className="m-auto lg:mr-0 w-11/12 lg:w-8/12 py-10 text-white grid  lg:grid-cols-5 gap-10"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="hidden absolute -bottom-[0] right-[37%] lg:flex">
            <Logo src={sub} className="w-14" alt="" />
          </div>
          <div className="hidden absolute bottom-[40%] right-[81%] lg:flex">
            <Logo src={sub2} className="w-14" alt="" />
          </div>
          <div className="hidden absolute top-[10%] right-[10%] lg:flex">
            <Logo src={sub3} className="w-14" alt="" />
          </div>
          <div className="relative h-full w-full lg:col-start-1  lg:col-span-2 mt-4">
            <div className="bg-white border border-cgray flex flex-col justify-center rounded-[19px] py-14 2xl:py-20 px-4 items-center">
              <div>
                <Logo src={box} className="w-12" alt="" />
              </div>
              <Text
                className="text-[31px] text-cdark font-['gmedium'] pt-2"
                body="Speed"
              />
            </div>
            <div className="absolute h-[99%] w-full -z-10 rounded-[19px] -right-4 -top-4 border bg-corange"></div>
          </div>
          <div className="relative h-full w-full lg:col-span-2 lg:col-end-5">
            <div className="bg-white border border-cgray flex flex-col justify-center rounded-[19px] py-14 2xl:py-20 px-4 items-center">
              <div>
                <Logo src={box2} className="w-12" alt="" />
              </div>
              <Text
                className="text-[31px] text-cdark font-['gmedium'] pt-2"
                body="Ambition"
              />
            </div>
            <div className="absolute h-[99%] w-full -z-10 rounded-[19px] -right-4 -top-4 border bg-cdark"></div>
          </div>
          <div className="relative h-full w-full lg:col-start-2  lg:col-span-2">
            <div className="bg-white border border-cgray flex flex-col justify-center rounded-[19px] py-14 2xl:py-20 px-4 items-center">
              <div>
                <Logo src={box} className="w-12" alt="" />
              </div>
              <Text
                className="text-[31px] text-cdark font-['gmedium'] pt-2"
                body="Agile"
              />
            </div>
            <div className="absolute h-[99%] w-full -z-10 rounded-[19px] -right-4 -top-4 border bg-cdark"></div>
          </div>
          <div className="relative h-full w-full  lg:col-end-6 lg:col-span-2">
            <div className="bg-white border border-cgray flex flex-col justify-center rounded-[19px] py-14 2xl:py-20 px-4 items-center">
              <div>
                <Logo src={box2} className="w-12" alt="" />
              </div>
              <Text
                className="text-[31px] text-cdark font-['gmedium'] pt-2"
                body="Teamwork"
              />
            </div>
            <div className="absolute h-[99%] w-full -z-10 rounded-[19px] -right-4 -top-4 border bg-cblue"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
