import { Suspense, lazy } from "react";
import Bridge from "../molecules/home/Bridge";
const Hero = lazy(() => import("../molecules/home/Hero"));
const Learning = lazy(() => import("../molecules/home/Learning"));
const News = lazy(() => import("../molecules/home/News"));
const Say = lazy(() => import("../molecules/home/Say"));
const School = lazy(() => import("../molecules/home/School"));
const Talent = lazy(() => import("../molecules/home/Talent"));
const Video = lazy(() => import("../molecules/home/Video"));
const Why = lazy(() => import("../molecules/home/Why"));

const Home = () => {
  return (
    <div className="">
      <Suspense fallback={<p>Loading...</p>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Bridge />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Why />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <School />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Talent />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Say />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Video />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Learning />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <News />
      </Suspense>
    </div>
  );
};

export default Home;
