import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Logo from "../../atoms/Logo";
import Text from "../../atoms/Text";
import TextLink from "../../atoms/TextLink";

const data = [
  {
    id: "1",
    title: "For Individuals",
    comment:
      "Earn a Tech Diploma and master skills that will help you achieve your dream of a career change, workplace promotion or international job opportunities.",
    linktext: "Start Learning",
    link: "#",
    pic: "https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/plc15.png",
  },
  {
    id: "2",
    title: "For Corporates",
    comment:
      "Build your dream team with Pluralcode. Hire our most talented graduates to help you turn your vision into reality.",
    linktext: "Hire Our Grads",
    link: "#",
    pic: "https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/plc13.png",
  },
  {
    id: "3",
    title: "For Impact",
    comment:
      "Pluralcode’s SandBox initiative seeks to provide ten thousand less privileged young Africans with free access to Tech Education. Collaborate with us.",
    linktext: "Collaborate With Us",
    link: "#",
    pic: "https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/plc14.png",
  },
];

const Bridge = () => {
  return (
    <div className="px-4 lg:px-14 py-8 lg:py-14 bridge-box">
      <div className="w-20 h-2 rounded-2xl my-2 bg-corange"></div>
      <p className="text-cdark font-['aristsemibold'] text-3xl lg:text-5xl">
        Bridging <span className="text-corange">Africa&apos;s Talent </span>Gap
      </p>

      <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
        {data.map((each) => {
          return (
            <div
              key={each.id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center pt-10 lg:pt-20"
            >
              <div className="w-full">
                <div className="w-11/12 lg:w-10/12 m-auto">
                  <Logo src={each.pic} className="w-full" alt="" />
                </div>
              </div>
              <div className="w-full h-64 lg:h-auto text-left">
                <div className="w-full  lg:w-9/12 m-auto font-['aristbold']">
                  <Text
                    className="font-['aristbold'] text-cdark text-3xl lg:text-4xl"
                    body={each.title}
                  />
                  <Text
                    className="py-4 lg:py-6 font-['aristsemibold'] carou-text text-lg"
                    body={each.comment}
                  />
                  <TextLink
                    className="font-['aristbold'] text-lg text-cblue"
                    to={each.link}
                    body={each.linktext}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Bridge;
