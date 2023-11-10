import Text from "../../../../../atoms/Text";

const CreativeDesign = () => {
  
  return (
    <div className="bg-[#0D0032] px-4 lg:px-14 pt-10 lg:pt-14  flex flex-col lg:flex-row items-center">
      <div className="w-full pb-10 lg:pb-6 ">
        <p className="w-[80%] xxxl:w-[50%] leading-[1] text-corange font-['aristbold'] text-3xl lg:text-[64px] xxxl:text-[80px]">
          Content <span className="text-white">Creation</span>
        </p>
        <Text
          className="text-white py-2 lg:py-0 text-lg lg:text-2xl xxxl:text-3xl font-['aristbold']"
          body="Unlock your creative potential and show the world what you are made of.  "
        />
        <Text
          className="text-white font-['gmedium'] xxxl:w-[80%] xxxl:text-2xl lg:pe-2"
          body="We now live in the world of attention. The wealthiest and most influential people in this era all have something in common; their ability to command attention through content. Whether it’s Elon Musk, Gary Vaynerchuk, MR Beast, Don Jazzy, Donald Trump, Joe Rogan. These guys have mastered the art of using content and attention to create wealth and wield political power, learn how it is done. "
        />
      </div>
      <div className="lg:w-[65%] xl:w-[70%] h-full  wrappercontent xl:h-[370px] xxxl:h-[660px]  relative rounded-t-[24px]">
        {/* <button
          className="ex text-xl lg:text-3xl lg:p-5 text-black exx"
          onClick={handleClose}
        >
          x
        </button>

        <Logo
          src={playbtn}
          id="play"
          className="absolute w-14 playimg cursor-pointer  top-[35%] left-[43%]"
          alt=""
          onClick={handlePlay}
        />
        <div className="video">
          <video
            width="100%"
            height="100%"
            id="video1"
            className="vid"
            controls
          >
            <source
              src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/advert.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
        </div> */}
      </div>
    </div>
  );
};

export default CreativeDesign;
