import curve from "../../assets/images/Vector 5.png";
import Logo from "../atoms/Logo";
import Text from "../atoms/Text";
import TextLink from "../atoms/TextLink";
import sub from "../../assets/images/Subtract (1).png";
import sub2 from "../../assets/images/Subtract.png";
import sub3 from "../../assets/images/Subtract3.png";
import loop from "../../assets/images/PluralCode Loop 1 1.png";
import { useEffect, useState } from "react";

const Tuition = () => {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [fee, setFee] = useState([]);
  const [loopfee, setLoopfee] = useState({
    usdcourse: "",
    ngncourse: "",
    certusd: "",
  });
  useEffect(() => {
    async function getApi() {
      try {
        const response = await fetch(
          "https://backend.pluralcode.institute/websitecourse-list"
        );
        const result = await response.json();
        console.log(result);
        setFee(result);
        setErr(null);
      } catch (error) {
        console.log(error.message);
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    }
    getApi();
  }, []);

  useEffect(() => {
    fetch("https://backend.pluralcode.institute/loop-course-list")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setLoopfee({
          usdcourse: result.loopcourseusd,
          ngncourse: result.loopcoursengn,
          certusd: result.loopcertificateusd,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const numFor = Intl.NumberFormat("en-US");
  console.log(loopfee);
  return (
    <div className="how-box bg-[#F5F6FA] relative z-10 px-4 lg:px-14 py-10 lg:py-14">
      {loading && <p className="">Loading...</p>}
      {err && <p className="">An error occured</p>}
      <div className="">
        <div className="w-20 h-2 rounded-2xl my-3 bg-corange"></div>
        <p className="relative text-cdark lg:w-max font-['aristsemibold'] text-3xl lg:text-5xl">
          Pluralcode <span className="text-corange">Tuition </span>
          <span className="hidden lg:block absolute w-[100px] h-full top-[45%] -right-[28%]">
            <Logo src={curve} alt="" className="w-full" />
          </span>
        </p>
      </div>
      <div className="w-full relative lg:w-[88%] 2xl:w-[70%] xxxl:w-3/6 m-auto flex flex-col flex-wrap my-10 lg:my-20 lg:flex-row justify-center gap-10 lg:gap-14">
        <div className="hidden absolute -top-[5%] right-0 lg:flex">
          <Logo src={sub3} className="w-14" alt="" />
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="relative w-11/12 m-auto lg:w-[420px] bg-white border border-black rounded-ss-[30px] rounded-ee-[30px]">
            <Text
              className="px-5 py-8 rounded-ss-[30px] bg-corange font-['gbold'] text-cdark text-xl lg:text-3xl"
              body="Live Class (On-site)"
            />
            <div className="p-4 lg:p-5">
              <div className="w-[94%] m-auto py-2">
                <div className="flex justify-between text-cdark font-['gexbold'] text-2xl lg:text-[35px]">
                  <p className="flex">
                    <span className="text-base lg:text-xl">$</span>
                    {isNaN(fee[0]?.usdprice)
                      ? 0
                      : numFor.format(fee[0]?.usdprice)}
                  </p>
                  <p className="opacity-70 flex">
                    <span className="text-base lg:text-xl">&#8358;</span>
                    {isNaN(fee[0]?.paymentFeengn)
                      ? 0
                      : numFor.format(fee[0]?.paymentFeengn)}
                  </p>
                </div>
                <Text
                  className="font-['gexbold'] pt-3 text-corange"
                  body="No additional certificate fee required at the end of course"
                />
              </div>

              <p className="font-['gregular'] lg:text-xl py-3">
                The above fee is for{" "}
                <span className="font-['gbold']">Diploma level</span> courses.
                You can choose between the full payment and part-payment plans
                to get started.
              </p>
              <p className="font-['gregular'] lg:text-xl py-2">
                <span className="font-['gbold']">Entry level</span> (On-site)
                courses on the other hand will only cost{" "}
                <span className="font-['gbold']">
                  $
                  {isNaN(fee[2]?.usdprice)
                    ? 0
                    : numFor.format(fee[2]?.usdprice)}
                </span>{" "}
                (NG{" "}
                {isNaN(fee[2]?.paymentFeengn)
                  ? 0
                  : numFor.format(fee[2]?.paymentFeengn)}
                ) to enroll.
              </p>
              <TextLink
                to="https://pluralcode.academy/admissions/"
                target="_blank"
                className="flex justify-center"
                body={
                  <button className="bg-corange w-60 py-3 mt-4 lg:text-lg text-white rounded">
                    Enroll Now
                  </button>
                }
              />
            </div>
            <div className="absolute -z-[1] rounded-ss-[30px] rounded-ee-[30px] w-full h-[90%] -right-3 lg:-right-6 top-5 border border-black bg-white"></div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="relative w-11/12 m-auto lg:w-[420px] bg-white border border-black rounded-ss-[30px] rounded-ee-[30px]">
            <Text
              className="px-5 py-8 rounded-ss-[30px] bg-cgray font-['gbold'] text-white text-xl lg:text-3xl"
              body="Live Class (Virtual)"
            />
            <div className="p-4 lg:p-5">
              <div className="w-[94%] m-auto py-2">
                <div className="flex justify-between text-cdark font-['gexbold'] text-2xl lg:text-[35px]">
                  <p className="flex">
                    <span className="text-base lg:text-xl">$</span>
                    {isNaN(fee[1]?.usdprice)
                      ? 0
                      : numFor.format(fee[1]?.usdprice)}
                  </p>
                  <p className="opacity-70 flex">
                    <span className="text-base lg:text-xl">&#8358;</span>
                    {isNaN(fee[1]?.paymentFeengn)
                      ? 0
                      : numFor.format(fee[1]?.paymentFeengn)}
                  </p>
                </div>
                <Text
                  className="font-['gexbold'] pt-3 text-corange"
                  body="No additional certificate fee required at the end of course"
                />
              </div>

              <p className="font-['gregular'] lg:text-xl py-3">
                The above fee is for{" "}
                <span className="font-['gbold']">Diploma level</span> courses.
                You can choose between the full payment and part-payment plans
                to get started.
              </p>
              <p className="font-['gregular'] lg:text-xl py-2">
                <span className="font-['gbold']">Entry level</span> (Virtual)
                courses on the other hand will only cost{" "}
                <span className="font-['gbold']">
                  $
                  {isNaN(fee[3]?.usdprice)
                    ? 0
                    : numFor.format(fee[3]?.usdprice)}
                </span>{" "}
                (NG{" "}
                {isNaN(fee[3]?.paymentFeengn)
                  ? 0
                  : numFor.format(fee[3]?.paymentFeengn)}
                ) to enroll.
              </p>
              <TextLink
                to="https://pluralcode.academy/admissions/"
                target="_blank"
                className="flex justify-center"
                body={
                  <button className="bg-corange w-60 py-3 mt-4 lg:text-lg text-white rounded">
                    Enroll Now
                  </button>
                }
              />
            </div>
            <div className="absolute -z-[1] rounded-ss-[30px] rounded-ee-[30px] w-full h-[90%] -right-3 lg:-right-6 top-5 border border-black bg-white"></div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="relative w-11/12 m-auto lg:w-[420px] bg-white border border-black rounded-ss-[30px] rounded-ee-[30px]">
            <div className="flex justify-between px-5 py-8 rounded-ss-[30px] bg-cblue font-['gbold'] text-white text-xl lg:text-3xl">
              <Text className="" body="Self Paced (LooP)" />
              <Logo className="w-20 h-full" alt="" src={loop} />
            </div>
            <div className="p-4 lg:p-5">
              <div className="w-[94%] m-auto py-2">
                <div className="flex justify-between text-cdark font-['gexbold'] text-2xl lg:text-[35px]">
                  <p className="flex">
                    <span className="text-base lg:text-xl">$</span>
                    {isNaN(loopfee?.usdcourse)
                      ? 0
                      : numFor.format(loopfee?.usdcourse)}
                  </p>
                  <p className="flex">
                    <span className="text-base lg:text-xl">&#8358;</span>
                    {isNaN(loopfee?.ngncourse)
                      ? 0
                      : numFor.format(loopfee?.ngncourse)}
                  </p>
                </div>
                <p className="font-['gexbold'] pt-3 text-corange">
                  <span className="text-lg">
                    $
                    {isNaN(loopfee?.certusd)
                      ? 0
                      : numFor.format(loopfee?.certusd)}
                  </span>{" "}
                  certificate fee at the end of course
                </p>
              </div>

              <p className="font-['gregular'] lg:text-xl py-3">
                Pluralcode’s Self-Paced Diploma (LooP) will require an
                enrollment fee, as well as a $
                {isNaN(loopfee?.certusd) ? 0 : numFor.format(loopfee?.certusd)}{" "}
                certification fee at the end of your course.
              </p>
              <p className="font-['gregular'] lg:text-xl py-2">
                LooP allows you to get all the benefits of the Diploma programs
                without needing to afford or join a live class
              </p>
              <TextLink
                to="#"
                className="flex justify-center"
                body={
                  <button disabled className="bg-corange w-60 py-3 mt-4 lg:text-lg text-white rounded">
                    Coming Soon
                  </button>
                }
              />
            </div>
            <div className="absolute -z-[1] rounded-ss-[30px] rounded-ee-[30px] w-full h-[90%] -right-3 lg:-right-6 top-5 border border-black bg-white"></div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-[42%] right-[18%]">
          <Logo src={sub2} className="w-14" alt="" />
        </div>
        <div className="hidden lg:flex absolute bottom-[42%] left-[20%]">
          <Logo src={sub} className="w-14" alt="" />
        </div>
      </div>
      <div className="font-['gregular'] w-full text-center">
        <Text
          className="font-['gsemibold'] text-3xl text-cblue lg:text-[48px]"
          body="Got Questions?"
        />
        <p className="text-cdark lg:text-lg pt-1 lg:pt-4">
          Our Student Advisors are on standby.
          <TextLink
            className=""
            target="_blank"
            to="https://wa.me/2347083153185?text=I%27m%20interested%20in%20taking%20one%20of%20your%20programs"
            body={
              <span className="text-corange font-['gsemibold']">
                {" "}
                Chat with us
              </span>
            }
          />
        </p>
      </div>
    </div>
  );
};

export default Tuition;
