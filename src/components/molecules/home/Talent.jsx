import Logo from "../../atoms/Logo"
import timg1 from '../../../assets/images/afriglobe.png'
import timg2 from '../../../assets/images/afriglobe (1).png'
import timg3 from '../../../assets/images/afriglobe (2).png'
import timg4 from '../../../assets/images/Exclude.png'
import timg5 from '../../../assets/images/palmpay.png'
import timg6 from '../../../assets/images/palmpay (1).png'
import timg7 from '../../../assets/images/palmpay (2).png'
import timg8 from '../../../assets/images/palmpay (3).png'
import timg9 from '../../../assets/images/palmpay (4).png'
import timg10 from '../../../assets/images/palmpay (5).png'
import timg11 from '../../../assets/images/palmpay (6).png'
import timg12 from '../../../assets/images/palmpay (7).png'
import timg13 from '../../../assets/images/palmpay (8).png'
import timg14 from '../../../assets/images/palmpay (9).png'
import timg15 from '../../../assets/images/palmpay (10).png'
import timg16 from '../../../assets/images/palmpay (11).png'
import timg17 from '../../../assets/images/palmpay (12).png'
import timg18 from '../../../assets/images/palmpay (13).png'
import timg19 from '../../../assets/images/palmpay (14).png'
import timg20 from '../../../assets/images/palmpay (15).png'
import timg21 from '../../../assets/images/palmpay (16).png'
import timg22 from '../../../assets/images/palmpay (17).png'
import timg23 from '../../../assets/images/palmpay (18).png'
import Text from "../../atoms/Text"

const Talent = () => {
  return (
    <div className="px-4 lg:px-14 py-20 lg:py-14 talent-box">
      <div className="w-20 h-2 rounded-2xl my-2 bg-corange"></div>
      <p className="text-cdark font-['aristsemibold'] text-3xl lg:text-5xl">
        Where Our <span className="text-corange">Talents Have Worked </span>
      </p>
      <Text className="lg:text-lg ttext font-['gmedium'] py-2" body="Pluralcode prepares you to compete at the very top, these are few examples where our talents have worked."/>
      <div className='flex lg:flex-wrap justify-center gap-8 py-10 talent'>
        <div className='w-40 lg:w-36'><Logo alt="" src={timg5} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg1} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg6} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg7} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg8} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg9} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg10} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg11} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg12} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg13} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg14} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg15} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg2} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg16} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg4} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg17} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg18} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg19} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg3} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg20} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg21} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg22} className="w-full"/></div>
        <div className='w-40 lg:w-36 '><Logo alt="" src={timg23} className="w-full"/></div>
    </div>
    
    </div>
  )
}

export default Talent
