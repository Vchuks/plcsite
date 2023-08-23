import Text from "../../atoms/Text";
import TextLink from "../../atoms/TextLink";
import Logo from "../../atoms/Logo";
import curve from "../../../assets/images/Vector 5.png";


const News = () => {
  return (
    <div className="px-4 lg:px-14 py-20 lg:pt-14 pb-20 flex flex-col lg:flex-row news-box">
      <div className="2xl:w-9/12">
        <div className="w-20 h-2 rounded-2xl my-2 bg-corange"></div>
        <p className="relative text-cdark 2xl:w-max font-['aristsemibold'] text-3xl lg:text-5xl">
          Pluralcode <span className="text-corange">In The </span>News
        <span className="hidden lg:block absolute w-[100px] h-full top-[50%] -right-[25%]"><Logo src={curve} alt="" className="w-full"/></span>
        </p>
        <Text
          className="news-text font-['gmedium'] py-3"
          body="Good things are hard to keep hidden and we are no exception. Find out what has been written in the news about Pluralcode, we will continue to work hard and build Africa’s largest school of technology."
        />
      </div>
      <div className="2xl:w-full flex flex-col lg:flex-row justify-center items-center gap-14 pt-6 2xl:gap-0">
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <div className="relative newseach p-6  2xl:h-full 2xl:w-10/12">
            <div className="lg:h-40  2xl:h-full">
              <Logo
                src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/p5.png"
                className=""
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between">
              <Text
                className="text-cdark lg:text-lg font-['aristbold']"
                body="Techpoint Africa"
              />
              <Text
                className="text-cdark py-4 text-sm font-['gmedium']"
                body="Pluralcode partners with Finquest Finance to launch ‘Learn Now, Pay Later’"
              />
              <TextLink className="text-corange" to="https://techpoint.africa/2023/01/27/pluralcode-partners-with-finquest-finance-to-launch-learn-now-pay-later-for-nigerian-tech-enthusiasts/" body="View Magazine" />
            </div>
            <div className="bg-corange absolute newsback"></div>
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <div data-aos="zoom-in-up" data-aos-duration="2000">
        <div className="relative newseach newsbg p-6  2xl:h-full 2xl:w-10/12">
            <div className="lg:h-40  2xl:h-full">
              <Logo
                src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/p12.png"
                className=""
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between">
              <Text
                className="text-cdark lg:text-lg font-['aristbold']"
                body="TechNext NG"
              />
              <Text
                className="text-cdark py-4 text-sm font-['gmedium']"
                body="Pluralcode partners with Finquest Finance to launch ‘Learn Now, Pay Later’"
              />
              <TextLink className="text-corange" to="https://technext.ng/2023/01/26/pluralcode-mission-africa-tech-school/" body="View Magazine" />
            </div>
            <div className="bg-cdark absolute newsback"></div>
          </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="2000">
          <div className="relative newseach newsbg p-6  2xl:h-full 2xl:w-10/12">
            <div className="lg:h-44 2xl:h-full">
              <Logo
                src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/p6.png"
                className=""
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between">
              <Text
                className="text-cdark lg:text-lg font-['aristbold']"
                body="Business Day"
              />
              <Text
                className="text-cdark py-2 text-sm font-['gmedium']"
                body="Introducing Pluralcode, a fast-growing Ed-tech company."
              />
              <TextLink className="text-corange" to="https://businessday.ng/sponsored/article/nigerian-ed-tech-company-pluralcode-is-on-a-mission-to-build-africas-largest-tech-school/" body="View Magazine" />
            </div>
            <div className="bg-white absolute newsback"></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
