import Text from "../../../../atoms/Text"


const CreativeDesign = () => {
  return (
    <div className="bg-[#0D0032] px-4 lg:px-14 py-20 lg:py-14 flex flex-col lg:flex-row">
      <div className="w-full">
        <p className="w-[70%] leading-[1.2] text-corange font-['aristbold'] text-3xl lg:text-[64px]">Creative & Motion <span className="text-white">Graphics Design</span></p>
        <Text className="text-white text-lg lg:text-2xl font-['aristbold']" body='Out-compete & out-earn some of the best designers you know. '/>
        <Text className="text-white font-['gmedium']" body='What does it take to be a top level creative designer? This course will answer that by combining still creative tools like Adobe Photoshop, Adobe Illustrator and Motion Design tools like Adobe After Effects and more to give you a comprehensive background as well as soft-skills training to prepare you for the world of freelancing and remote employment. '/>

      </div>
      <div className="w-[56%]"></div>
    </div>
  )
}

export default CreativeDesign
