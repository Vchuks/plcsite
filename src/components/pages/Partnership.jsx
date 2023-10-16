import {Suspense, lazy} from 'react'
const PartnerHero = lazy(()=> import("../molecules/partner/PartnerHero")) 
import Partnerbody from "../molecules/partner/Partnerbody"


const Partnership = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
      <PartnerHero/>
      </Suspense>
      <Partnerbody/>
    </div>
  )
}

export default Partnership
