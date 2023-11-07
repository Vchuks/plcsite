import Text from"../../../../../atoms/Text"
import Logo from "../../../../../atoms/Logo"
import playbtn from '../../../../../../assets/images/playbtn.png'
// import framebox from '../../../../../assets/images/thumb.jpg'
// import { useRef } from "react"


const CreativeDesign = () => {


  const handlePlay = () => {
    const videocard = document.querySelector("#video1");
    const videoWrapper = document.querySelector(".video");
    const wrapper = document.querySelector(".wrappercontent");
    const close =document.querySelector('.ex');
    const playimg =document.querySelector('.playimg');
    playimg.style.display="none"
    videocard.play();
    videoWrapper.style.display = "block";
    close.style.display="block";
    wrapper.classList.add('wrapperc2') 
    wrapper.classList.remove('wrappercontent') 
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
    wrapper.classList.add('wrappercontent')
    wrapper.classList.remove('wrapperc2')
  };
  return (
    <div className="bg-[#0D0032] px-4 lg:px-14 pt-10 lg:pt-14  flex flex-col lg:flex-row items-center">
      <div className="w-full pb-10 lg:pb-6 ">
        <p className="w-[70%] xxxl:w-[50%] leading-[1] text-corange font-['aristbold'] text-3xl lg:text-[64px] xxxl:text-[80px]">Content <span className="text-white">Creation</span></p>
        <Text className="text-white py-2 lg:py-0 text-lg lg:text-2xl xxxl:text-3xl font-['aristbold']" body='Unlock your creative potential and show the world what you are made of.  '/>
        <Text className="text-white font-['gmedium'] xxxl:w-[80%] xxxl:text-2xl lg:pe-2" body='We now live in the world of attention. The wealthiest and most influential people in this era all have something in common; their ability to command attention through content. Whether it’s Elon Musk, Gary Vaynerchuk, MR Beast, Don Jazzy, Donald Trump, Joe Rogan. These guys have mastered the art of using content and attention to create wealth and wield political power, learn how it is done. '/>

      </div>
      <div className="lg:w-[65%] wrappercontent xxxl:h-[650px] pb-0 lg:pb-10 bg-white  relative rounded-t-[24px]">
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
