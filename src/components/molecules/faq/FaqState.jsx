import { useRef, useState } from "react";
import elipse from "../../../assets/images/Ellipse 1.png";
import Logo from '../../atoms/Logo';
import {BiChevronRight} from 'react-icons/bi'
import {BiChevronUp} from 'react-icons/bi'
import PropTypes from "prop-types" 


const FaqState = ({list}) => {
    const [title, setTitle] = useState(false);
    const faqref = useRef()
    const {top,body} = list
    const handleState = () => {
        setTitle(!title);
      };
  return (
    <div className="py-2">
      {!title && 
        <div
          className="w-full cursor-pointer py-3 px-2 lg:px-6 flex items-center justify-between faqborder"
          onClick={handleState}
        >
          <h5 className="w-full flex items-center gap-3 ">
            <div className='w-4'><Logo src={elipse} className="w-full" alt=""/></div>
            <p className='w-full lg:text-lg font-["gsemibold"]'>{top}</p>
          </h5>
          <div className='w-6'>
          <BiChevronRight className='w-full text-2xl text-cblue'/>
          </div>
        </div>
      }
      {title && (
        <div
          className="w-full cursor-pointer py-3 px-2 lg:px-6 flex items-center justify-between faqborder border-b  rounded-b-none"
          onClick={handleState}
        >
          <h5 className="w-full flex items-center gap-3">
            <div className='w-4'><Logo src={elipse} alt="" className="w-full" /></div>
            <p className='w-full lg:text-lg font-["gsemibold"]'>{top}</p>
          </h5>
          <div className='w-6'>
          <BiChevronUp className='w-full text-2xl text-cblue'/>
          </div>
        </div>
      )}
      {title && (
        <div className="pt-3 pb-10 px-2 lg:px-6 bg-[#FCFCFE] ">
          <pre dangerouslySetInnerHTML={{ __html: body }} className="font-['gregular'] text-cdark leading-relaxed" ref={faqref}/>
           
        </div>
      )}
    </div>
  )
}
FaqState.propTypes = {
   list: PropTypes.object
}
export default FaqState
