import Text from "../../atoms/Text"


const Why = () => {
  return (
    <div className="px-4 lg:px-14 py-8 lg:py-14 why-box">

    <div className="w-20 h-2 rounded-2xl my-2 bg-corange"></div>
      <p className="text-cdark font-['aristsemibold'] text-3xl lg:text-5xl">
        Why <span className="text-corange">PluralCode?</span>
      </p>
      <div className="m-auto lg:ml-auto w-11/12 lg:w-9/12 text-white grid  lg:grid-cols-9 gap-10  py-20">
        <div className="relative h-full w-full lg:col-start-2  lg:col-span-4 mt-4">
          <div className="bg-cblue rounded-2xl py-8 px-4 text-center">
          <Text className="text-3xl lg:text-5xl font-['gmedium']" body="2,000+"/>
            <Text className="text-2xl pt-2" body="Graduates"/>
          </div>
          <div className="absolute back2"></div>
        </div>
        <div className="relative h-full w-full lg:col-span-4 lg:col-end-10">
          <div className="whytwo rounded-2xl py-8 px-4 text-center">
          <Text className="text-3xl lg:text-5xl font-['gmedium']" body="13,000+"/>
            <Text className="text-2xl pt-2" body="Community Strength"/>
          </div>
          <div className="absolute back"></div>
        </div>
        <div className="relative h-full w-full lg:col-start-1  lg:col-span-4">
          <div className="bg-cpurple rounded-2xl py-8 px-4 text-center">
          <Text className="text-3xl lg:text-5xl font-['gmedium']" body="90 Percent+"/>
            <Text className="text-2xl pt-2" body="Graduation Rate"/>
          </div>
          <div className="absolute back"></div>
        </div>
        <div className="relative h-full w-full  lg:col-end-9 lg:col-span-4 mt-4">
          <div className="bg-corange rounded-2xl py-8 px-4 text-center">
          <Text className="text-3xl lg:text-5xl font-['gmedium']" body="500+"/>
            <Text className="text-2xl pt-2" body="Scholarship Granted"/>
          </div>
          <div className="absolute back3"></div>
        </div>
      </div>
    </div>
  )
}

export default Why
