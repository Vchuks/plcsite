import Logo from "../../atoms/Logo";
import Text from "../../atoms/Text";
import syimg from "../../../assets/images/syimg2.png";
import syimg2 from '../../../assets/images/syimg.png'
import syimg3 from '../../../assets/images/Group 153 (1).png'
import star from "../../../assets/images/Frame 427318881.png";
import rtqt from "../../../assets/images/closeqt.png";
import ltqt from "../../../assets/images/openqt.png";
import sub from '../../../assets/images/Subtract.png'
import sub2 from '../../../assets/images/Subtract (1).png'
import curve from "../../../assets/images/Vector 5.png";


const Say = () => {
  return (
    <div className="px-4 lg:px-14 py-20 lg:py-14 say-box">
      <div className="w-20 h-2 rounded-2xl my-2 bg-corange"></div>
      <p className="w-max relative text-cdark font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl">
        What Our <span className="text-corange">Students Say </span>
        <span className="hidden lg:block absolute w-[100px] h-full top-[50%] -right-[27%]"><Logo src={curve} alt="" className="w-full"/></span>
      </p>
      <div className="flex flex-col lg:flex-row gap-4 items-start xxxl:items-center pb-4">
        <div className="w-full lg:w-5/12 2xl:w-10/12">
      <Text
        className="lg:text-lg xxxl:text-2xl say-text xxxl:w-[600px] xxxl:pt-4 font-['gmedium'] py-2"
        body="We have maintained an amazing learning experience for our students, find out how they feel about us."
      />
          <div className="w-full py-4 lg:py-0 2xl:py-5 lg:w-36 xxxl:w-48">
            <p className="text-5xl xxxl:text-7xl lg:text-center font-['gmedium'] text-cgray">
              4.5<span className="text-lg xxxl:text-xl">out of 5</span>
            </p>
            <Text
              className="text-cgray font-['aristbold'] lg:text-center text-2xl xxxl:text-3xl pt-2"
              body="Trustpilot"
            />
          </div>
          <div className="w-full 2xl:w-[88%]" data-aos="zoom-in-up" data-aos-duration="2000">
            <Logo
              src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/p4.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center gap-5 2xl:gap-0">
          <div className="w-full" data-aos="zoom-in-up" data-aos-duration="2000">
            <div><Logo src={sub2} className="w-14 ml-auto pb-6" alt=""/></div>
            <div className="testimony 2xl:h-56 2xl:w-11/12 xxxl:w/12 xxxl:h-[350px] bg-white border border-corange rounded-xl p-4 ">
              <div>
                <div className="flex items-end">
                  <div>
                    <Logo className="w-12 xxxl:w-16" alt="" src={syimg} />
                  </div>
                  <div className="">
                    <Logo src={star} alt="" className="w-20 xxxl:w-28" />
                    <p className=" text-xs xxxl:text-lg text-cblue pt-2 font-['aristbold']">
                      Temiloluwa Abimbola |{" "}
                      <span className="font-['aristregular']">
                        Product Designer
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex pt-4 gap-2">
                  <div className="w-32">
                    <Logo className="" src={ltqt} alt="" />
                  </div>
                  <Text
                    className="text-xs xxxl:text-xl"
                    body="I learned product design, which is everything a business owner does before any product is being launched and while the product is ongoing. The class was simplified to everyone's level. That made it easy for a person like me with no previous background to learn. Also, the instructors and admin team were amazing."
                  />
                  <div className="w-32 flex items-end ">
                    <Logo className="" src={rtqt} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block"><Logo src={sub} className="w-14 pt-6 ml-auto" alt=""/></div>
          </div>
          <div className="w-full flex flex-col gap-5" >
            <div className="w-full" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="testimony 2xl:h-56 2xl:w-11/12 xxxl:w/12 xxxl:h-[350px] bg-white border border-corange rounded-xl p-4">
                <div>
                  <div className="flex items-end">
                    <div>
                      <Logo className="w-12 xxxl:w-16" alt="" src={syimg2} />
                    </div>
                    <div className="">
                      <Logo src={star} alt="" className="w-20 xxxl:w-28" />
                      <p className=" text-xs xxxl:text-lg text-cblue pt-2 font-['aristbold']">
                      Comfort Michael |{" "}
                        <span className="font-['aristregular']">
                         Data Analyst
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-4 gap-2">
                    <div className="w-32">
                      <Logo className="" src={ltqt} alt="" />
                    </div>
                    <Text
                      className="text-xs xxxl:text-xl"
                      body="Prior to pursuing my MSc in Data Science, I opted to take a foundational course in Data Analytics with Pluralcode and I have to say, that was one of my best decisions. It’s provided me with the framework I needed to plugin seamlessly with my Masters program."
                    />
                    <div className="w-32 flex items-end ">
                      <Logo className="" src={rtqt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="testimony 2xl:h-56 2xl:w-11/12 xxxl:w/12 xxxl:h-[350px] bg-white border border-corange rounded-xl p-3">
                <div>
                  <div className="flex items-end">
                    <div>
                      <Logo className="w-12 xxxl:w-16" alt="" src={syimg3} />
                    </div>
                    <div className="">
                      <Logo src={star} alt="" className="w-20 xxxl:w-28" />
                      <p className=" text-xs xxxl:text-lg text-cblue pt-2 font-['aristbold']">
                      Enock Musabyimana |{" "}
                        <span className="font-['aristregular']">
                        Cloud Engineer
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-4 gap-2">
                    <div className="w-32">
                      <Logo className="" src={ltqt} alt="" />
                    </div>
                    <Text
                      className="text-xs xxxl:text-xl"
                      body="I got introduced to Pluralcode through a Digital Summit in East Africa, decided to take a course with the academy and my career never looked back since then. I have gone from a curious newbie to a paid tech professional within a few months after my course."
                    />
                    <div className="w-32 flex items-end ">
                      <Logo className="" src={rtqt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block lg:hidden"><Logo src={sub} className="w-14 ml-auto" alt=""/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Say;
