import Logo from "../../atoms/Logo"
import Text from "../../atoms/Text"




const Help = () => {
  return (
    <div className="bg-[#FFFAF4] px-4 lg:px-14 py-20 lg:py-14" id="school">
      <div className="w-20 h-2 rounded-2xl my-2 bg-corange"></div>
      <p className="lg:w-[25%] xxxl:w-[20%] text-cdark font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl">
        We help <span className="text-corange">you </span>get started
      </p>
      <div className="flex flex-col lg:flex-row gap-8 pt-6 lg:gap-4 xxxl:gap-14">
        <Text className="lg:w-[30%] 2xl:w-1/4 text-lg font-['gmedium'] xxxl:text-2xl" body="Your pathway to a tech career doesn’t have to be confusing. We will walk you through it."/>
        <div className="w-10/12 m-auto lg:w-full flex flex-col lg:flex-row gap-10 lg:gap-7 xxxl:gap-16">
          <div className="w-full lg:w-[25%]" data-aos="zoom-in-up" data-aos-duration="2000">
            <div className="relative w-full school p-3 flex flex-col justify-between h-full" >
                <div><Logo src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/IMG_4182.PNG" className="" alt=""/></div>
                <div className="flex flex-col justify-between">

                <Text className="text-cdark font-['aristbold'] pt-4" body="Project-Based Learning"/>
                <Text className=" text-cdark py-2" body="Students are exposed to hands-on projects and assessments from day one. You will learn practical skills to level-up."/>
                </div>
                
                <div className="absolute schoolback bg-cblue"></div>
            </div>
          </div>
            <div className="w-full lg:w-[25%]" data-aos="zoom-in-up" data-aos-duration="2000">

            <div className="relative w-full school p-3 flex flex-col justify-between h-full" >
                <div><Logo src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/IMG_4184.PNG" className="" alt=""/></div>
                <div className="flex flex-col justify-between">

                <Text className="text-cdark  font-['aristbold'] pt-4" body="Career Guidance"/>
                <Text className=" text-cdark py-2" body="Sessions with our student advisors, capstone project reviews by industry experts and sessions on positioning yourself for opportunities."/>
                </div>
                
                <div className="absolute schoolback bg-cdark"></div>
            </div>
            </div>
            <div className="w-full lg:w-[25%]" data-aos="zoom-in-up" data-aos-duration="2000">

            <div className="relative w-full school p-3 flex flex-col justify-between h-full" >
                <div><Logo src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/IMG_4183.PNG" className="" alt=""/></div>
                <div className="flex flex-col justify-between">

                <Text className="ssbox text-cdark  font-['aristbold'] pt-4" body="Internships"/>
                <Text className=" text-cdark py-2" body="Students of our live Diploma training get project internship placements at Pluralcode or one of our hiring partners."/>
                </div>
                
                <div className="absolute schoolback bg-corange"></div>
            </div>
            </div>
            <div className="w-full lg:w-[25%]" data-aos="zoom-in-up" data-aos-duration="2000">

            <div className="relative w-full school p-3 flex flex-col justify-between h-full"  >
                <div><Logo src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/IMG_4181.PNG" className="rounded-[10px]" alt=""/></div>
                <div className="flex flex-col justify-between">

                <Text className="text-cdark  font-['aristbold'] pt-4" body="Global Recognition"/>
                <Text className="text-cdark py-2" body="Graduates of our Diploma programs are awarded Diploma by Pluralcode AND one of our international accreditation partners."/>
                </div>
              
                <div className="absolute schoolback bg-white" ></div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Help
