import Logo from "../../atoms/Logo";
import Text from "../../atoms/Text";
// import { MdOutlineTimer } from "react-icons/md";
import curve from "../../../assets/images/Vector 6.png";


const CourseBusiness = () => {
  return (
    <div className="school-box px-4 lg:px-14 py-20 lg:py-14" id="school">
      <div className="w-20 h-2 rounded-2xl my-2 bg-corange"></div>
      <p className="text-corange font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl relative w-max mb-20">
      <span className="text-cdark"> </span> Available <span className="text-cdark">Courses </span>
        <span className="hidden lg:block absolute w-[100px] h-full -right-28 top-[30px]"><Logo src={curve} alt="" className="w-full"/></span>
      </p>
      <div className="flex w-11/12 m-auto lg:w-full lg flex-col lg:flex-row gap-8 pt-6 lg:gap-4 xxxl:gap-16">
        <Text
          className="w-3/5 2xl:w-1/4 text-lg xxxl:text-2xl font-['gmedium']"
          body=""
        />
        <div className="w-full m-auto lg:w-full flex flex-col lg:flex-row gap-10 lg:gap-8 xxxl:gap-16">
          <div
            data-aos="zoom-in-up"
            className="w-full"
            data-aos-duration="2000"
          >
            <div className="relative w-full school p-3 flex flex-col justify-between sb econh">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/Frame13.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="Tech Entrepreneurship Masterclass"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Launch a career in Product Design, SCRUM, Agile and Product Management."
              />
              {/* <div className="flex justify-between items-center font-['gbold']">
                <div className="flex items-center gap-2">
                  <p className="text-corange text-sm">&#8358; 25,000</p>
                  <p className="text-xs line-through opacity-20 text-cgray">
                    40,000
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineTimer className="text-sm text-cgray" />
                  <p className="text-xs opacity-50">4 weeks</p>
                </div>
              </div> */}
              <div className="absolute schoolback bg-cblue"></div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="w-full"
          >
            <div className="relative sb econh w-full school p-3 flex flex-col justify-between">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/Frame1.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="Negotiation"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Launch a career in Product Design, SCRUM, Agile and Product Management."
              />
              {/* <div className="flex justify-between items-center font-['gbold']">
                <div className="flex items-center gap-2">
                  <p className="text-corange text-sm">&#8358; 25,000</p>
                  <p className="text-xs line-through opacity-20 text-cgray">
                    40,000
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineTimer className="text-sm text-cgray" />
                  <p className="text-xs opacity-50">4 weeks</p>
                </div>
              </div> */}
              <div className="absolute schoolback bg-cdark"></div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="w-full"
          >
            <div className="relative sb econh w-full school p-3 flex flex-col justify-between">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/Frame2.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <Text
                className="ssbox text-cdark text-lg font-['aristbold'] pt-4"
                body="Transformative Leadership"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Launch a career in Product Design, SCRUM, Agile and Product Management."
              />
              {/* <div className="flex justify-between items-center font-['gbold']">
                <div className="flex items-center gap-2">
                  <p className="text-corange text-sm">&#8358; 25,000</p>
                  <p className="text-xs line-through opacity-20 text-cgray">
                    40,000
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineTimer className="text-sm text-cgray" />
                  <p className="text-xs opacity-50">4 weeks</p>
                </div>
              </div> */}
              <div className="absolute schoolback bg-corange"></div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default CourseBusiness;
