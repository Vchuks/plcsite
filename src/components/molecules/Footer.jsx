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
      <div className="w-60 lg:w-72 xxxl:w-96">
        <Logo src={plogo} className="" alt=""/>
        <p className="py-4 font-['gsemibold'] xxxl:text-2xl">Acquire tech skills to build a borderless career.</p>
        <div className="flex gap-3">
          <a target="_blank" rel="noreferrer" href="https://instagram.com/pluralcode_academy?igshid=MzRlODBiNWFlZA=="><Logo src={inst} className="w-6" alt="" /></a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/PlcTechAcademy?mibextid=LQQJ4d"><Logo src={face} className="w-6" alt="" /></a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/pluralcode?s=21&t=B1MuR2VoGVHj3cpdZyDZzw"><Logo src={twit} className="w-6" alt="" /></a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/pluralcode-technologies/"><Logo src={link} className="w-6" alt="" /></a>
          <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@pluralcodeacademy?_t=8cARWxT1YVK&_r=1"><Logo src={tik}  className="w-6" alt=""/></a>
        </div>
      </div>

      <div className="w-full foot flex flex-col md:flex-row lg:justify-end gap-5 mt-3 lg:mt-0 xl:gap-12 2xl:gap-24 lg:pb-10">
        <div className="flex flex-col gap-2">
          <h5 className="pb-1 xxxl:text-2xl">Top Courses</h5>
          <Link className="xxxl:text-xl" to="/school/data">Data Analytics</Link>
          <Link className="xxxl:text-xl" to="/school/data">Business Analytics</Link>
          <Link className="xxxl:text-xl" to="/school/programming">Full-Stack Development</Link>
          <Link className="xxxl:text-xl" to="/school/programming">Front-End Development</Link>
          <Link className="xxxl:text-xl" to="/school/cloud">Cloud Computing</Link>
          
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="pb-1 xxxl:text-2xl">Top Courses</h5>
          <Link className="xxxl:text-xl" to="/school/cloud">Cyber Security</Link>
          <Link className="xxxl:text-xl" to="/school/product">Product Design</Link>
          <Link className="xxxl:text-xl" to="/school/product">Product Management</Link>
          <Link className="xxxl:text-xl" to="/school/product">Scrum Product Management</Link>
          <Link className="xxxl:text-xl" to="/school/product">Agile Project Management</Link>
          
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="pb-1 xxxl:text-2xl">Policies</h5>
          <Link className="xxxl:text-xl" to="https://pluralcode.academy/payment/terms.html" target="_blank">Terms and Condition</Link>
          <Link className="xxxl:text-xl" to="https://pluralcode.academy/payment/terms.html" target="_blank">Student Loan Policy</Link>
          <Link className="xxxl:text-xl" to="https://pluralcode.academy/payment/terms.html" target="_blank">Refunds Policy</Link>
          <Link className="xxxl:text-xl" to="https://pluralcode.academy/payment/terms.html" target="_blank">Privacy Policy</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="pb-1 xxxl:text-2xl">Contact</h5>
          <div className="flex gap-3 xxxl:text-xl items-center"><Logo className="w-4 xxxl:w-5" alt="" src={tel}/><Link to="tel:+2347083153185" target="_blank">+(234) 708-315-3185.</Link></div>
          <div className="flex gap-3 xxxl:text-xl items-center"><Logo className="w-4 xxxl:w-5" alt="" src={tel}/><a href="tel:+2348131529862" target="_blank" rel="noreferrer">+(234) 813-152-9862.</a></div>
          <div className="flex gap-3 xxxl:text-xl items-center"><Logo className="w-4 xxxl:w-5" alt="" src={twitout} /><a href="https://twitter.com/pluralcode?s=21&t=B1MuR2VoGVHj3cpdZyDZzw" target="_blank" rel="noreferrer">pluralcode</a></div>
          <div className="flex gap-3 xxxl:text-xl items-center"><Logo className="w-4 xxxl:w-5" alt="" src={inout} /><a href="https://instagram.com/pluralcode_academy?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer">pluralcode_academy</a></div>
          <div className="flex gap-3 xxxl:text-xl items-center"><Logo className="w-4 xxxl:w-5" alt="" src={faceout}/><a href="https://www.facebook.com/PlcTechAcademy?mibextid=LQQJ4d" target="_blank" rel="noreferrer">pluralcode_academy</a></div>
          <div className="flex gap-3 xxxl:text-xl items-center"><Logo className="w-4 xxxl:w-5" alt="" src={email}/><Link to="mailto:Info@pluralcode.academy" target="_blank">support@pluralcode.academy</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
