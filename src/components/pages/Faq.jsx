import List from '../molecules/faq/FaqList';
import FaqState from '../molecules/faq/FaqState';
import curve from "../../assets/images/Vector 5.png";
import Logo from "../atoms/Logo";




const Faq = () => {
  
   
    const faq = List.map(each=>{
        return <FaqState key={each.top} list={each}/>
})
  return (
    <div className='bg-[#F5F6FA] px-4 lg:px-14 py-10 lg:py-14'>
        <div className="pb-7 lg:pb-20">
        <div className="w-20 h-2 rounded-2xl my-3 bg-corange"></div>
        <p className="relative text-cdark lg:w-max font-['aristsemibold'] text-3xl lg:text-5xl">
          Frequently <span className="text-corange">Asked </span>Questions
          <span className="hidden lg:block absolute w-[100px] h-full top-[45%] -right-[18%]">
            <Logo src={curve} alt="" className="w-full" />
          </span>
        </p>
      </div>
        {faq}
</div>
  )
}

export default Faq

