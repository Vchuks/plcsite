import Bridge from "../molecules/home/Bridge"
import Hero from "../molecules/home/Hero"
import Learning from "../molecules/home/Learning"
import News from "../molecules/home/News"
import Say from "../molecules/home/Say"
import School from "../molecules/home/School"
import Talent from "../molecules/home/Talent"
import Video from "../molecules/home/Video"
import Why from "../molecules/home/Why"

const Home = () => {
  return (
    <div className="">
      <Hero/>
      <Bridge/>
      <Why/>
      <School/>
      <Talent/>
      <Say/>
      <Video/>
      <Learning/>
      <News/>
    </div>
  )
}

export default Home
