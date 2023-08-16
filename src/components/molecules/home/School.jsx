import Logo from "../../atoms/Logo"
import Text from "../../atoms/Text"
import TextLink from "../../atoms/TextLink"
// import cloud from '../../../assets/images/cloud.png'


const School = () => {
  return (
    <div className="school-box px-4 lg:px-14 py-20 lg:py-14">
      <div className="w-20 h-2 rounded-2xl my-2 bg-corange"></div>
      <p className="text-cdark font-['aristsemibold'] text-3xl lg:text-5xl">
        Our <span className="text-corange">School </span>
      </p>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-2">
        <Text className="lg:w-1/3 text-lg font-['gmedium']" body="Discover all the amazing areas of tech you can up-skill into. Choose a school to view all the Diploma Courses you can enroll for."/>
        <div className="w-10/12 m-auto lg:w-full flex flex-col lg:flex-row gap-10 lg:gap-8">
            <div className="relative w-full school p-3 flex flex-col justify-between sb">
                <div><Logo src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/plc9.png" className="" alt=""/></div>
                <Text className="text-cdark text-lg font-['aristbold'] pt-4" body="Product School"/>
                <Text className="sbox text-cdark py-2" body="Launch a career in Product Design, SCRUM, Agile and Product Management."/>
                <TextLink className="text-corange" to="#" body="View Courses"/>
                <div className="absolute schoolback bg-cblue"></div>
            </div>
            <div className="relative sb w-full school p-3 flex flex-col justify-between">
                <div><Logo src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/plc8.png" className="" alt=""/></div>
                <Text className="text-cdark text-lg font-['aristbold'] pt-4" body="Data School"/>
                <Text className="sbox text-cdark py-2" body="Master data analytics, business intelligence,  & Python machine learning."/>
                <TextLink className="text-corange" to="#" body="View Courses"/>
                <div className="absolute schoolback bg-cblue"></div>
            </div>
            <div className="relative sb w-full school p-3 flex flex-col justify-between">
                <div><Logo src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/plc2.png" className="" alt=""/></div>
                <Text className="ssbox text-cdark text-lg font-['aristbold'] pt-4" body="Programming School"/>
                <Text className="sbox text-cdark py-2" body="Learn to build amazing websites & apps using modern Javascript frameworks (MERN)."/>
                <TextLink className="text-corange" to="#" body="View Courses"/>
                <div className="absolute schoolback bg-cblue"></div>
            </div>
            <div className="relative sb w-full school p-3 flex flex-col justify-between">
                <div><Logo src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/update12.png" className="" alt=""/></div>
                <Text className="text-cdark text-lg font-['aristbold'] pt-4" body="Cloud School"/>
                <Text className="sbox text-cdark py-2" body="Understand Cloud Engineering, Devops skills and Cyber Security for professional use."/>
                <TextLink className="text-corange" to="#" body="View Courses"/>
                <div className="absolute schoolback bg-cblue"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default School
