import Say from "../molecules/home/Say"
import Culture from "../molecules/why/Culture"
import Help from "../molecules/why/Help"
import Reach from "../molecules/why/Reach"
import WhyHero from "../molecules/why/WhyHero"


const Why = () => {
  return (
    <div>
      <WhyHero/>
      <Help/>
      <Say/>
      <Culture/>
      <Reach/>
    </div>
  )
}

export default Why
