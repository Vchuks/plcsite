import Logo from "../atoms/Logo";
import plogo from "../../assets/images/plclogo.png";
import inst from "../../assets/images/bi_instagram.png";
import face from "../../assets/images/Group.png";
import twit from "../../assets/images/Group (1).png";
import link from "../../assets/images/Group (2).png";
import tik from '../../assets/images/Group 20686.png';
import { Link } from "react-router-dom";
import tel from '../../assets/images/phone-call 1.png'
import inout from '../../assets/images/Instagram Outline.png'
import email from '../../assets/images/envelope 2.png'
import faceout from '../../assets/images/Facebook Outline.png'
import twitout from '../../assets/images/Twitter Outline.png'

const Footer = () => {
  return (
    <div className="py-14 px-4 lg:px-20 w-full flex flex-col lg:flex-row gap-5 justify-between footer font-['gmedium']">
      <div className="w-60 lg:w-72">
        <Logo src={plogo} className="" alt=""/>
        <p className="py-4 font-['gsemibold']">Acquire tech skills to build a borderless career.</p>
        <div className="flex gap-3">
          <a href="https://instagram.com/pluralcode_academy?igshid=MzRlODBiNWFlZA=="><Logo src={inst} className="w-6" alt="" /></a>
          <a href="https://www.facebook.com/PlcTechAcademy?mibextid=LQQJ4d"><Logo src={face} className="w-6" alt="" /></a>
          <a href="https://twitter.com/pluralcode?s=21&t=B1MuR2VoGVHj3cpdZyDZzw"><Logo src={twit} className="w-6" alt="" /></a>
          <a href="https://www.linkedin.com/company/pluralcode-technologies/"><Logo src={link} className="w-6" alt="" /></a>
          <a href="https://www.tiktok.com/@pluralcodeacademy?_t=8cARWxT1YVK&_r=1"><Logo src={tik}  className="w-6" alt=""/></a>
        </div>
      </div>

      <div className="w-full foot flex flex-col md:flex-row lg:justify-end gap-5 mt-3 lg:mt-0 xl:gap-12 2xl:gap-24 lg:pb-10">
        <div className="flex flex-col gap-2">
          <h5 className="pb-1">Top Courses</h5>
          <Link to="#">Data Analytics</Link>
          <Link to="#">Business Analytics</Link>
          <Link to="#">Full-Stack Development</Link>
          <Link to="#">Front-End Development</Link>
          <Link to="#">Cloud Computing</Link>
          
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="pb-1">Top Courses</h5>
          <Link to="#">Cyber Security</Link>
          <Link to="#">Product Design</Link>
          <Link to="#">Product Management</Link>
          <Link to="#">Scrum Product Management</Link>
          <Link to="#">Agile Project Management</Link>
          
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="pb-1">Policies</h5>
          <Link to="https://pluralcode.academy/payment/terms.html">Terms and Condition</Link>
          <Link to="https://pluralcode.academy/payment/terms.html">Student Loan Policy</Link>
          <Link to="https://pluralcode.academy/payment/terms.html">Refunds Policy</Link>
          <Link to="https://pluralcode.academy/payment/terms.html">Privacy Policy</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="pb-1">Contact</h5>
          <div className="flex gap-3 items-center"><Logo className="w-4" alt="" src={tel}/><Link to="tel:+2347083153185">+(234) 708-315-3185.</Link></div>
          <div className="flex gap-3 items-center"><Logo className="w-4" alt="" src={tel}/><a href="tel:+2348131529862">+(234) 813-152-9862.</a></div>
          <div className="flex gap-3 items-center"><Logo className="w-4" alt="" src={twitout} /><a href="https://twitter.com/pluralcode?s=21&t=B1MuR2VoGVHj3cpdZyDZzw">pluralcode</a></div>
          <div className="flex gap-3 items-center"><Logo className="w-4" alt="" src={inout} /><a href="https://instagram.com/pluralcode_academy?igshid=MzRlODBiNWFlZA==">pluralcode_academy</a></div>
          <div className="flex gap-3 items-center"><Logo className="w-4" alt="" src={faceout}/><a href="https://www.facebook.com/PlcTechAcademy?mibextid=LQQJ4d">pluralcode_academy</a></div>
          <div className="flex gap-3 items-center"><Logo className="w-4" alt="" src={email}/><Link to="mailto:Info@pluralcode.academy">support@pluralcode.academy</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
