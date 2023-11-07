import Text from"../../../../../atoms/Text"
import Logo from "../../../../../atoms/Logo"
import playbtn from '../../../../../../assets/images/playbtn.png'
// import framebox from '../../../../../assets/images/thumb.jpg'
// import { useRef } from "react"


const CreativeDesign = () => {
const article =`No matter what career path you choose, you’re going to sell. Whether you are looking for a raise from your boss, or you are looking for funding from an investor, or even looking to earn income from selling a product, this is for you. The reason you are not earning more is that you are not selling more, period!

Learn how to prospect high quality leads, build relationships and convert those relationships into millions in sales income.`

  const handlePlay = () => {
    const videocard = document.querySelector("#video1");
    const videoWrapper = document.querySelector(".video");
    const wrapper = document.querySelector(".wrapperart");
    const close =document.querySelector('.ex');
    const playimg =document.querySelector('.playimg');
    playimg.style.display="none"
    videocard.play();
    videoWrapper.style.display = "block";
    close.style.display="block";
    wrapper.classList.add('wrapperc2') 
    wrapper.classList.remove('wrapperart') 
  };
  

  
  const handleClose = () => {
    const videoWrapper = document.querySelector(".video");
    const wrapper = document.querySelector(".wrapperc2");
    const videocard = document.querySelector("#video1");
    const playimg =document.querySelector('.playimg');
    const close =document.querySelector('.ex');
    playimg.style.display="block"
    close.style.display="none"
    videocard.pause();
    videocard.currentTime = 0;
    videoWrapper.style.display = "none";
    wrapper.classList.add('wrapperart')
    wrapper.classList.remove('wrapperc2')
  };
  return (
    <div className="bg-[#0D0032] px-4 lg:px-14 pt-10 lg:pt-14  flex flex-col lg:flex-row items-center">
      <div className="w-full pb-10 lg:pb-6 ">
        <p className="w-[70%] xxxl:w-[50%] leading-[1] text-corange font-['aristbold'] text-3xl lg:text-[64px] xxxl:text-[80px]">The Art Of <span className="text-white">Selling</span></p>
        <Text className="text-white py-2 lg:py-0 text-lg lg:text-2xl xxxl:text-3xl font-['aristbold']" body='Learn the secrets of the I% sellers & make millions in commission '/>
        <pre className="text-white font-['gmedium'] xxxl:w-[80%] xxxl:text-2xl lg:pe-2"> {article} </pre>

      </div>
      <div className="lg:w-[65%] wrapperart xxxl:h-[650px] pb-0 lg:pb-10 bg-white  relative rounded-t-[24px]">
      <button
        className="ex text-xl lg:text-3xl lg:p-5 text-black exx"
        onClick={handleClose}
      >
        x
      </button>
        {/* <Logo src={framebox} className='w-full h-full'/> */}
        
        <Logo src={playbtn}id='play' className='absolute w-14 playimg cursor-pointer  top-[35%] left-[43%]' alt='' onClick={handlePlay}/>
        <div className="video">
        <video width="100%" height="100%" id="video1" className="vid" controls>
          <source
            src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/advert.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
      </div>
      </div>
    </div>
  )
}

export default CreativeDesign
