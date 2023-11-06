import Logo from "../../../atoms/Logo";
import Text from "../../../atoms/Text";
import { MdOutlineTimer } from "react-icons/md";
import curve from "../../../../assets/images/Vector 6.png";
import TextLink from "../../../atoms/TextLink";


const CourseEconomy = () => {
  return (
    <div className="school-box px-4 lg:px-14 py-20 lg:py-14" id="school">
      <div className="w-20 h-2 rounded-2xl my-2 bg-corange"></div>
      <p className="text-corange font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl relative w-max mb-20">
        Available <span className="text-cdark">Courses </span>
        <span className="hidden lg:block absolute w-[100px] h-full -right-28 top-[25px]"><Logo src={curve} alt="" className="w-full"/></span>
      </p>
      <div className="flex w-11/12 m-auto lg:w-full lg flex-col lg:flex-row gap-8 pt-6 lg:gap-4 xxxl:gap-16">
        <Text
          className="econw 2xl:w-1/4 text-lg xxxl:text-2xl font-['gmedium']"
          body=""
        />
        <div className=" m-auto lg:w-full flex flex-col lg:flex-row gap-10 lg:gap-8 xxxl:gap-16">
          <div
            data-aos="zoom-in-up"
            className="w-full"
            data-aos-duration="2000"
          >
            <div className="relative w-full school p-3 flex flex-col justify-between sb econh">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/Frame71.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="The Art of Selling"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Master the skills, strategies and tools used by the 1% of Tech Sales expert to make millions in monthly commissions."
              />
              <div className="flex justify-between items-center font-['gbold']">
                <div className="flex items-center gap-2">
                  <p className="text-corange text-sm">&#8358; 70,000</p>
                  <p className="text-xs line-through opacity-20 text-cgray">
                    100,000
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineTimer className="text-sm text-cgray" />
                  <p className="text-xs opacity-50">8 weeks</p>
                </div>
              </div>
              <div className="absolute schoolback bg-cblue"></div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="w-full"
          >
            <TextLink to="creative_&_motion" body={<div className="relative sb econh w-full school p-3 flex flex-col justify-between">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/Frame93.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="Creative Design & Motion Graphics"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Learn to use tools like Illustrator, PhotoShop & After Effects to create compelling designs."
              />
              <div className="flex justify-between items-center font-['gbold']">
                <div className="flex items-center gap-2">
                  <p className="text-corange text-sm">&#8358; 70,000</p>
                  <p className="text-xs line-through opacity-20 text-cgray">
                    100,000
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineTimer className="text-sm text-cgray" />
                  <p className="text-xs opacity-50">8 weeks</p>
                </div>
              </div>
              <div className="absolute schoolback bg-cdark"></div>
            </div>}/>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="w-full"
          >
            <div className="relative sb econh w-full school p-3 flex flex-col justify-between">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/Frame24.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <Text
                className="ssbox text-cdark text-lg font-['aristbold'] pt-4"
                body="Content Creation (Step By Step)"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Unlock your creative potential & become an influencer or you want to grow your business"
              />
              <div className="flex justify-between items-center font-['gbold']">
                <div className="flex items-center gap-2">
                  <p className="text-corange text-sm">&#8358; 70,000</p>
                  <p className="text-xs line-through opacity-20 text-cgray">
                    100,000
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineTimer className="text-sm text-cgray" />
                  <p className="text-xs opacity-50">8 weeks</p>
                </div>
              </div>
              <div className="absolute schoolback bg-corange"></div>
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
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/Frame98.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="Excel Masterclass [Beginner to Advance]"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Acquire Advanced Excel expertise shared by Data Analysts, Financial Markets experts etc."
              />
              <div className="flex justify-between items-center font-['gbold']">
                <div className="flex items-center gap-2">
                  <p className="text-corange text-sm">&#8358; 70,000</p>
                  <p className="text-xs line-through opacity-20 text-cgray">
                    100,000
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineTimer className="text-sm text-cgray" />
                  <p className="text-xs opacity-50">8 weeks</p>
                </div>
              </div>
              <div className="absolute schoolback bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-11/12 m-auto lg:w-full lg:flex-row gap-8 pt-6 lg:gap-4 xxxl:gap-16 mt-6 xxxl:mt-12">
        <Text
          className="econw 2xl:w-1/4 text-lg xxxl:text-2xl font-['gmedium']"
          body=""
        />
        <div className="w-full m-auto lg:w-full flex flex-col lg:flex-row gap-10 lg:gap-8 xxxl:gap-16">
          <div
            data-aos="zoom-in-up"
            className="w-full"
            data-aos-duration="2000"
          >
            <div className="relative w-full school p-3 flex flex-col justify-between sb">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/Frame57.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="Digital Marketing For Business Growth"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Learn to leverage social media algorithms, ads, email and search to earn a living, sell any product and grow your brand."
              />
              <div className="">
                
              </div>
              <div className="absolute schoolback bg-corange"></div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="w-full"
          >
            <div className="relative sb w-full school p-3 flex flex-col justify-between">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/Frame16.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="AI Mastery For Professional Use"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Don’t fall behind in the age of AI. Learn to use tools like ChatGPT, Jasper AI etc to automate your work."
              />
              <div className="">
                
              </div>
              <div className="absolute schoolback bg-cdark"></div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="w-full"
          >
            <div className="relative sb w-full school p-3 flex flex-col justify-between">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/Frame99.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <Text
                className="ssbox text-cdark text-lg font-['aristbold'] pt-4"
                body="E-Commerce"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Did you know that it's possible to make $10,000 selling products you don't physically own? Learn exactly how to do that with this course."
              />
              <div className="">
                
              </div>
              <div className="absolute schoolback bg-white"></div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="w-full"
          >
            <div className="relative sb w-full school p-3 flex flex-col justify-between">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/Frame84.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="Virtual Assistant Professional Training"
              />
              <Text
                className="sbox text-cdark py-2"
                body="As a Virtual Assistant, you will make money working with top Executives, CEOs and Investors from the comfort of your home."
              />
              <div className="">
                
              </div>
              <div className="absolute schoolback bg-cblue"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEconomy;
