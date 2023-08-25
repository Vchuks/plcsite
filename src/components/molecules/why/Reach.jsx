import Text from "../../atoms/Text"
import Logo from "../../atoms/Logo"
import { Link } from "react-router-dom";
import tel from '../../../assets/images/phone-call 1.png'
import inout from '../../../assets/images/Instagram Outline.png'
import email from '../../../assets/images/envelope 2.png'
import faceout from '../../../assets/images/Facebook Outline.png'
import twitout from '../../../assets/images/Twitter Outline.png'
import location from '../../../assets/images/marker 1.png'

const Reach = () => {
  return (
    <div className="flex bg:[#F3F3F4] lg:w-[80%] m-auto items-center px-4 lg:px-14 py-10 lg:py-14 pb-0">
      <div className="w-full">
        <Text body="Reach Out to Us" className="py-4 text-cblue text-5xl"/>
        <div className="py-2 flex font-['gmedium'] text-cdark gap-3 items-center"><Logo className="w-4" alt="" src={tel}/><Link to="tel:+2347083153185" target="_blank">+(234) 813-152-9862, +(234) 708-315-3185.</Link></div>
          <div className="py-2 font-['gmedium'] text-cdark flex gap-3 items-center"><Logo className="w-4" alt="" src={twitout} /><a href="https://twitter.com/pluralcode?s=21&t=B1MuR2VoGVHj3cpdZyDZzw" target="_blank" rel="noreferrer">pluralcode</a></div>
          <div className="py-2 font-['gmedium'] text-cdark flex gap-3 items-center"><Logo className="w-4" alt="" src={inout} /><a href="https://instagram.com/pluralcode_academy?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer">pluralcode_academy</a></div>
          <div className="py-2 font-['gmedium'] text-cdark flex gap-3 items-center"><Logo className="w-4" alt="" src={faceout}/><a href="https://www.facebook.com/PlcTechAcademy?mibextid=LQQJ4d" target="_blank" rel="noreferrer">pluralcode_academy</a></div>
          <div className="py-2 font-['gmedium'] text-cdark flex gap-3 items-center"><Logo className="w-4" alt="" src={email}/><Link to="mailto:Info@pluralcode.academy" target="_blank">support@pluralcode.academy | admissions@pluralcode.academy </Link></div>
          <div className="py-2 font-['gmedium'] text-cdark flex gap-3 items-center"><Logo className="w-4" alt="" src={location}/><Link to="#">Toyin Street Ikeja, Lagos State, Nigeria | Norrsken House, Kigali, Rwanda</Link></div>
        </div>
      <div className="w-full">
        <Logo src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/new7.png" alt="" className="" />
      </div>
    </div>
  )
}

export default Reach
