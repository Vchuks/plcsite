import Logo from "../../atoms/Logo";
import Text from "../../atoms/Text";
import TextLink from "../../atoms/TextLink";
import pic1 from "../../../assets/images/Frame 49 (8).png";
import pic2 from "../../../assets/images/Frame 49 (9).png";
import pic3 from "../../../assets/images/Frame 427318897 (8).png";
// import cloud from '../../../assets/images/cloud.png'

const School = () => {
  return (
    <div className="school-box px-4 lg:px-14 py-20 lg:py-14" id="school">
      <div className="w-20 h-2 rounded-2xl my-2 bg-corange"></div>
      <p className="text-cdark font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl">
        Our <span className="text-corange">Schools </span>
      </p>
      <div className="flex flex-col lg:flex-row gap-8 pt-6 lg:gap-4 xxxl:gap-16">
        <Text
          className="lg:w-1/3 2xl:w-1/4 text-lg xxxl:text-2xl font-['gmedium']"
          body="Discover all the amazing areas of tech you can up-skill into. Choose a school to view all the Diploma Courses you can enroll for."
        />
        <div className="w-10/12 m-auto lg:w-full flex flex-col lg:flex-row gap-10 lg:gap-8 xxxl:gap-16">
          <div
            className="w-full"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <div className="relative w-full school p-3 flex flex-col justify-between sb">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/IMG_4182.PNG"
                  className=""
                  alt=""
                />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="Product School"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Launch a career in Product Design, SCRUM, Agile and Product Management."
              />
              <TextLink
                className="text-corange"
                to="/school/product"
                body="View Courses"
              />
              <div className="absolute schoolback bg-cblue"></div>
            </div>
          </div>
          <div
            className="w-full"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <div className="relative sb w-full school p-3 flex flex-col justify-between">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/IMG_4184.PNG"
                  className=""
                  alt=""
                />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="Data School"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Master data analytics, business intelligence,  & Python machine learning."
              />
              <TextLink
                className="text-corange"
                to="/school/data"
                body="View Courses"
              />
              <div className="absolute schoolback bg-cdark"></div>
            </div>
          </div>
          <div
            className="w-full"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <div className="relative sb w-full school p-3 flex flex-col justify-between">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/IMG_4183.PNG"
                  className=""
                  alt=""
                />
              </div>
              <Text
                className="ssbox text-cdark text-lg font-['aristbold'] pt-4"
                body="Programming School"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Learn to build amazing websites & apps using modern frameworks."
              />
              <TextLink
                className="text-corange"
                to="/school/programming"
                body="View Courses"
              />
              <div className="absolute schoolback bg-corange"></div>
            </div>
          </div>
          <div
            className="w-full"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <div className="relative sb w-full school p-3 flex flex-col justify-between">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/IMG_4181.PNG"
                  className="rounded-lg"
                  alt=""
                />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="Cloud School"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Understand modern Cloud Engineering, DevOps and Cyber Security"
              />
              <TextLink
                className="text-corange"
                to="/school/cloud"
                body="View Courses"
              />
              <div className="absolute schoolback bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-6 flex-col lg:flex-row gap-8 pt-6 lg:gap-4 xxxl:gap-16">
        <Text
          className="lg:w-1/3 2xl:w-1/4 text-lg xxxl:text-2xl font-['gmedium']"
          body=""
        />
        <div className="w-10/12 m-auto lg:w-full flex flex-col lg:flex-row gap-10 lg:gap-8 xxxl:gap-16">
          <div
            className="w-full"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <div className="relative w-full school p-3 flex flex-col justify-between sb">
              <div>
                <Logo src={pic1} className="" alt="" />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="School of Emerging Technologies"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Master AI, Digital Assets, Tokens and other Web3.0 Skills for digital transformation."
              />
              <TextLink
                className="text-corange"
                to="/school/emerging_technologies"
                body="View Courses"
              />
              <div className="absolute schoolback bg-cdark"></div>
            </div>
          </div>
          <div
            className="w-full"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <div className="relative sb w-full school p-3 flex flex-col justify-between">
              <div>
                <Logo src={pic3} className="" alt="" />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="School of Digital Economy"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Learn the modern wealth creation skills you need to make your first $1,000 and beyond."
              />
              <TextLink
                className="text-corange"
                to="/school/digital_economy"
                body="View Courses"
              />
              <div className="absolute schoolback bg-cblue"></div>
            </div>
          </div>

          <div
            className="w-full"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <div className="relative sb w-full school p-3 flex flex-col justify-between">
              <div>
                <Logo src={pic2} className="" alt="" />
              </div>
              <Text
                className="text-cdark text-lg font-['aristbold'] pt-4"
                body="School of Business"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Learn management and entrepreneurial skills that will equip you for business leadership."
              />
              <TextLink
                className="text-corange"
                to="/school/business"
                body="View Courses"
              />
              <div className="absolute schoolback bg-white"></div>
            </div>
          </div>
          <div
            className="w-full"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            {/* not relevant(invisible) */}
            <div className="relative invisible sb w-full school p-3 flex flex-col justify-between">
              <div>
                <Logo
                  src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/IMG_4183.PNG"
                  className=""
                  alt=""
                />
              </div>
              <Text
                className="ssbox text-cdark text-lg font-['aristbold'] pt-4"
                body="Programming School"
              />
              <Text
                className="sbox text-cdark py-2"
                body="Learn to build amazing websites & apps using modern frameworks."
              />
              <TextLink
                className="text-corange"
                to="/school/programming"
                body="View Courses"
              />
              <div className="absolute schoolback bg-corange"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
