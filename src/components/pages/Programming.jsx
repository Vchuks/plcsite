import Learning from "../molecules/home/Learning"
import CourseProgramming from "../molecules/school/CourseProgramming"
import How from "../molecules/school/How"
import ProgrammingHero from "../molecules/school/programming/ProgrammingHero"

const Programming = () => {
  return (
    <div>
      <ProgrammingHero/>
      <CourseProgramming/>
      <How/>
      <Learning/>
    </div>
  )
}

export default Programming
