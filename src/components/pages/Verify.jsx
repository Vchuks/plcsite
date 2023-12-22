import Logo from "../atoms/Logo";
import Text from "../atoms/Text";
import verifyImg from "../../assets/images/Group 20667.png";
import good from "../../assets/images/Group 20383.png";
import bad from '../../assets/images/Group 20385.png'
import sdc from '../../assets/images/sdc.png'
import actd from '../../assets/images/actd.png'
import qa from '../../assets/images/qa.png'
import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";

const Verify = () => {
  const verifyRef = useRef()
    const [certId, setCertId] = useState('')
    const [certDetail, setCertDetail] = useState({
        certificate_id:"",
        cohort:"",
        course_level:"",
        course_name:"",
        course_type:"",
        date_issued: "",
        email:'',
        full_name:"",
        status: "",
        statuscode:"",
    })
  const [verify, setVerify] = useState(false);
  const [noVerify, setNoVerify] = useState(false);
  const [verifySection, setVerifySection] = useState(false);
//   CERT/PLC/2023/795214
  const handleVerify = () => {
    const sp = document.querySelector("#spinn");
    sp.style.display = "block";

    fetch(`https://pluralcode.net/apis/v1/verify_certificate.php?cert_id=${certId}`)
    .then(response => response.json())
    .then(result =>{ 
        if (result.statuscode === '00'){
          setVerifySection(true)
          setVerify(true)
    setCertDetail({
        certificate_id:result.certificate_id,
        cohort:result.cohort,
        course_level:result.course_level,
        course_name:result.course_name,
        course_type:result.course_type,
        date_issued: result.date_issued,
        email:result.email,
        full_name:result.full_name,
        status: result.status,
        statuscode:result.statuscode
      })
      setNoVerify(false)
      sp.style.display = "none";
      
      verifyRef.current?.scrollIntoView({behavior: 'smooth'})
  }else{
    setVerifySection(true)
    setVerify(false)
    setNoVerify(true)
  }})
    .catch(error => console.log(error))
  };

 
  return (
    <div>
      <div className="px-4 lg:ps-14 lg:pe-0 pt-10 lg:pt-8 lg:pb-0 flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
        <div className="w-full">
          <p className="font-['gblack'] text-4xl lg:text-[64px] xxxl:text-[120px] text-cblue leading-tight">
            Verify <span className="text-corange">Our Student</span> Credentials
          </p>
          <Text
            className="w-full lg:w-[70%] lg:text-lg xxxl:w-[60%] xxxl:text-[32px] xxxl:leading-snug py-2 text-cdark font-['gsemibold']"
            body="Enter the identification number of our students to verify their individual credentials."
          />
          <div className="flex w-full lg:w-[70%] xxxl:w-[60%] rounded mt-4 xxxl:mt-8">
            <input
              type="text"
              className="bg-[#F0F0F0] rounded-s ps-6 outline-none py-3 xxxl:py-8 w-full text-lg xxxl:text-3xl font-['gsemibold'] placeholder:text-[#323232] placeholder:text-sm xxxl:placeholder:text-2xl"
              placeholder="Enter certificate number here"
              name=""
              value={certId}
              onChange={(event)=>setCertId(event.target.value)}
            />
            <button
              onClick={handleVerify}
              className="bg-corange w-2/4 font-['gregular'] flex justify-center rounded-e py-3 items-center text-white xxxl:text-2xl"
            >
              <div
                      id="spinn"
                      className="spin animate-spin text-2xl mr-2"
                    >
                      <BiLoaderAlt />
                    </div>
              Search
            </button>
          </div>
        </div>
        <div className="w-full xxxl:w-10/12">
          <Logo src={verifyImg} alt="" className="" />
        </div>
      </div>
      <div ref={verifyRef}>
      {verifySection &&<div className="px-4 lg:px-14 py-6 lg:py-14">
        <Text
          className="text-center text-[32px] font-['gbold'] lg:pb-14 text-cblue"
          body="View Certificate"
        />
        {verify && (
          <div className="flex" >
            <div className="w-full hidden lg:flex flex-col justify-center items-center">
              <Logo src={good} alt="" className="w-28" />
              <Text
                className="font-['gmedium'] w-3/4 pt-10 text-center text-[32px]"
                body="Student verification was successful"
              />
            </div>
            <div className="w-full shadow-lg rounded p-4 lg:p-14">
              
              <div className="flex justify-between py-3 gap-4 lg:gap-0 ">
                <div className="w-full">
                  <Text
                    className="font-['gregular'] lg:text-xl text-cdark"
                    body="Student First Name"
                  />
                  <Text
                    className="font-['gregular'] lg:text-xl text-[#939393]"
                    body={certDetail.full_name}
                  />
                </div>
                <div className="w-full">
                  <Text
                    className="font-['gregular'] lg:text-xl text-cdark"
                    body="Course Level"
                  />
                  <Text
                    className="font-['gregular'] lg:text-xl text-[#939393]"
                    body={certDetail.course_level}
                  />
                </div>
                
              </div>
              <div className="w-full flex gap-4 lg:gap-0 justify-between py-3">
                <div className="w-full">
                  <Text
                    className="font-['gregular'] lg:text-xl text-cdark"
                    body="Student Email"
                  />
                  <Text
                    className="font-['gregular'] lg:text-xl text-[#939393]"
                    body={certDetail.email}
                  />
                </div>
                <div className="w-full">
                  <Text
                    className="font-['gregular'] lg:text-xl text-cdark"
                    body="Cohort"
                  />
                  <Text
                    className="font-['gregular'] lg:text-xl text-[#939393]"
                    body={certDetail.cohort}
                  />
                </div>
              </div>
              <div className="w-full flex justify-between gap-4 lg:gap-0 py-3">
                
                <div className="w-full">
                  <Text
                    className="font-['gregular'] lg:text-xl text-cdark"
                    body="Course Name"
                  />
                  <Text
                    className="font-['gregular'] lg:text-xl text-[#939393]"
                    body={certDetail.course_name}
                  />
                </div>
                <div className="w-full">
                  <Text
                    className="font-['gregular'] lg:text-xl text-cdark"
                    body="Date Issued"
                  />
                  <Text
                    className="font-['gregular'] lg:text-xl text-[#939393]"
                    body={certDetail.date_issued}
                  />
                </div>
              </div>
              
              {/* <div className="flex flex-col py-3">
              <Text
                    className="font-['gregular'] pb-3 lg:text-xl text-cdark"
                    body="Certificate link"
                  />
                  <Link className="w-full" to={`https://certtest.netlify.app/?cert_id=${certId}`}><button className="w-full bg-corange lg:text-lg text-white py-3 rounded">Open</button></Link>
              </div> */}
              <div className="pt-4 "> {/*lg:pt-10*/}
              <Text
                    className="font-['gregular'] lg:text-xl text-cdark"
                    body="Accredited by"
                  />
                  <div className="flex justify-between py-2 lg:py-0 lg:gap-4 items-center">
                  <Text
                    className="font-['gregular'] lg:text-xl text-[#939393]"
                    body="Skill Development Council Canada"
                  />
                  <Logo src={sdc} alt="" className="w-40 lg:w-60"/>
                  </div>
                  <div className="flex justify-between lg:gap-4 py-2 lg:py-0 items-center">
                  <Text
                    className="font-['gregular'] lg:text-xl text-[#939393]"
                    body="American Council of Training and Development "
                  />
                  <Logo src={actd} alt="" className="w-40 lg:w-60"/>
                  </div>
                  <div className="flex justify-between lg:gap-4 py-2 lg:py-0 items-center">
                  <Text
                    className="font-['gregular'] lg:text-xl text-[#939393]"
                    body="International Association for Quality Assurance in
                    Pre-Tertiary & Higher
                    Education"
                  />
                  <Logo src={qa} alt="" className="w-40 lg:w-60"/>
                  </div>
              </div>
            </div>
          </div>
        )}
        {noVerify &&
        <div className="flex flex-col justify-center items-center">
            <Logo src={bad} alt="" className="w-20 lg:w-28"/>
            <Text
                className="font-['gmedium'] w-3/4 pt-4 lg:pt-10 text-center text-[24px] lg:text-[32px]"
                body='Invalid Certificate ID'
              />
        </div>}
      </div>
}
      </div>
    </div>
  );
};

export default Verify;
