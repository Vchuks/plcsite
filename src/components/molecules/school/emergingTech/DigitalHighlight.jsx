import Logo from "../../../atoms/Logo";
import Text from "../../../atoms/Text";
import dot from "../../../../assets/images/Ellipse 1.png";

const DigitalHighlight = () => {
  return (
    <div className="bg-[#22205712] px-4 lg:px-14 py-10 lg:py-14">
      <div className="w-20 h-2 rounded-2xl my-3 bg-corange"></div>
      <p className="relative text-cdark w-max font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl">
        Course <span className="text-corange">Highlights</span>
      </p>
      <div className="w-full m-auto flex flex-col justify-center lg:flex-row py-8 gap-14 lg:py-16">
        <div data-aos="fade-up" data-aos-duration="2000">
        <div className="w-11/12 lg:w-[450px] h-full lg:h-[510px] xxxl:w-[500px] flex flex-col justify-between m-auto bg-white relative border border-[#0D0032] rounded-ss-[8px] rounded-ee-[8px]">
          <div className="text-white text-2xl lg:text-3xl p-4 lg:px-5 lg:pt-8 lg:pb-7 bg-cdark">

        <Text
            className='w-56'
            body="Digital Assets
            Banking"
            />
            </div>
          <Text
            className="font-['gregular'] text-lg lg:text-xl p-4 lg:p-6 lg:w-11/12"
            body="Become an expert in trading digital assets and managing portfolios."
          />
          <ul className="text-cdark lg:text-lg px-4 lg:px-0 pb-8 lg:w-8/12 m-auto">
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li className="">Introduction to Web Three</li>
            </div>

            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Blockchain Technology</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Introduction to Cryptocurrencies</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Usage and Applications of Crypto</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>NFTs: Usage and Applications</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>DAO</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>The role of Wallet & Exchanges </li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Understanding Market Cycles</li>
            </div>
            
          </ul>
          <div className="absolute rounded-ss-[8px] rounded-ee-[8px] w-full h-full -z-10 -left-5 -bottom-5 bg-cdark border border-cdark"></div>
          <div className="w-full"></div>
        </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
        <div className="w-11/12 lg:w-[450px] xxxl:w-[500px] h-full lg:h-[510px] flex flex-col justify-between  m-auto shad bg-white relative border border-[#0D0032] rounded-ss-[8px] rounded-ee-[8px]">
          <div className="text-white text-2xl lg:text-3xl p-4 lg:p-5 lg:pt-8 lg:pb-7 bg-corange">

          <Text
            className='w-56'
            body="Digital Assets
            Banking"
            />
            </div>
          <Text
            className="font-['gregular'] text-lg lg:text-xl p-4 lg:p-6 lg:w-11/12"
            body="Become an expert in trading digital assets and managing portfolios."
          />
          <ul className="text-cdark lg:text-lg px-4 lg:px-0 pb-8 lg:w-8/12 m-auto ">
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li className="">Portfolio Diversification</li>
            </div>

            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>TWT Review</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Ethereum Review</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>XRP Review</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>BSCPAD Review</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>AIPAD Review (Open AI)</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Practical Live Sessions</li>
            </div>
            <div className="flex items-baseline gap-3 my-1">
              <Logo className="w-[10px]" alt="" src={dot} />
              <li>Digital Assets Investment Banking</li>
            </div>
            
          </ul>
          <div className="absolute rounded-ss-[8px] rounded-ee-[8px] w-full h-full -z-10 -left-5 -bottom-5 bg-corange border border-cdark"></div>
          <div className="w-full"></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalHighlight;
