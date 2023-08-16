import Text from "../../atoms/Text";
import TextLink from "../../atoms/TextLink";
import Logo from "../../atoms/Logo";

const News = () => {
  return (
    <div className="px-4 lg:px-14 py-20 lg:pt-14 pb-20 flex flex-col lg:flex-row news-box">
      <div>
        <div className="w-20 h-2 rounded-2xl my-2 bg-corange"></div>
        <p className="text-cdark font-['aristsemibold'] text-3xl lg:text-5xl">
          Pluralcode <span className="text-corange">In The </span>News
        </p>
        <Text
          className="news-text font-['gmedium'] py-3"
          body="Good things are hard to keep hidden and we are no exception. Find out what has been written in the news about Pluralcode, we will continue to work hard and build Africa’s largest school of technology."
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-14 pt-6">
        <div className="">
          <div className="relative newseach p-6">
            <div className="lg:h-40">
              <Logo
                src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/plc5.png"
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
              <TextLink className="text-corange" to="#" body="View Magazine" />
            </div>
            <div className="bg-corange absolute newsback"></div>
          </div>
        </div>
        <div className="flex flex-col gap-14">
        <div className="relative newseach newsbg p-6">
            <div className="lg:h-40">
              <Logo
                src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/plc6.png"
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
              <TextLink className="text-corange" to="#" body="View Magazine" />
            </div>
            <div className="bg-cdark absolute newsback"></div>
          </div>
          <div className="relative newseach newsbg p-6">
            <div className="lg:h-44">
              <Logo
                src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/plc7.png"
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
              <TextLink className="text-corange" to="#" body="View Magazine" />
            </div>
            <div className="bg-white absolute newsback"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
