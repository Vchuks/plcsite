import Text from"../../../../../atoms/Text"


const CreativeDesign = () => {

  return (
    <div className="bg-[#0D0032] px-4 lg:px-14 pt-10 lg:pt-14  flex flex-col lg:flex-row items-center">
      <div className="w-full pb-10 lg:pb-6 ">
        <p className="w-[80%] lg:w-full xl:w-[90%] 2xl:w-[80%] xxxl:w-[60%] leading-[1] text-corange font-['aristbold'] text-3xl lg:text-[64px] xxxl:text-[80px]">Excel Masterclass <span className="text-white">[Beginner to Advance]</span></p>
        <Text className="text-white py-2 lg:py-0 text-lg lg:text-2xl xxxl:text-3xl font-['aristbold']" body='Acquire the skills and competence to ‘Excel’ in the professional world. '/>
        <Text className="text-white font-['gmedium'] xxxl:w-[80%] xxxl:text-2xl lg:pe-2" body='MS Excel remains one of the most widely used business tools of all time, that is because it is necessary for almost everything you do as a profession. From keeping records, to automation, financial analysis, budgeting, business, inventory, data analytics, visual presentation. Virtually anything can be accomplished with Excel, which makes it the perfect tool to master for anyone looking to join the workforce. '/>

      </div>
      <div className="lg:w-[65%] xl:w-[62%] 2xl:w-[70%] h-full  wrapperexcel xl:h-[370px] xxxl:h-[660px]   relative rounded-t-[24px]">
      </div>
    </div>
  )
}

export default CreativeDesign
