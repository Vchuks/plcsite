import Logo from "../../../../atoms/Logo";
import Text from "../../../../atoms/Text";
import picone from '../../../../../assets/images/Frame 20686.png'
import pictwo from '../../../../../assets/images/Frame 20686 (1).png'
import picthree from '../../../../../assets/images/Frame 20686 (2).png'
import picfour from '../../../../../assets/images/Frame 20686 (3).png'
import picfive from '../../../../../assets/images/Frame 20686 (4).png'
import DigitalContent from "../../../../../contextData/DigitalContent";
import { useContext } from "react";
import TextLink from "../../../../atoms/TextLink";

const CourseHighlights = () => {
    const {digital, cohort} = useContext(DigitalContent)
  const numFor = Intl.NumberFormat("en-US");

  const text = `<li>Introduction to Graphics Design & Design Elements.</li>
<li>Principles of modern design and how users respond to your style.</li>
<li>Explore the dynamic trends & styles, discovering how they shape individual and brand identities.</li>
<li>How to Navigate Adobe Photoshop and use all the tools within the toolbar.</li>
<li>Understand background removal, photo retouching and photo healing.</li>
<li>Introduction to Animation and different Animation styles.</li>
<li>How to create short-stop motion animation.</li>
<li>Character Design, Storyboarding and how to setup a story board for your animation.</li>
<li>Motion graphics tools like Adobe After Effects.</li>
<li>Character Rigging.</li>
<li>2D Animation.</li>
    `;

  const textTwo = `In addition to learning everything listed above, you will be exposed to soft-skills training for how they can use this skills for wealth creation through freelancing, and employment. You will learn how to design and position your portfolio to attract international attention, as well as how to set yourself up for continuous growth and development into more advanced roles and more high paying positions and careers. 
    
    You will also be given access to our talent network where you can collaborate and share ideas with like minded individuals, as well as get mentored weekly by experts in the field.`;
  return (
    <div className="px-4 lg:px-14 pb-10 lg:pb-14 flex flex-col-reverse lg:flex-row bg-[#F8F8FA]">
      <div className="w-full pe-4 pt-10 lg:pt-14">
        <div className="w-20 h-2 rounded-2xl my-3 bg-corange"></div>
        <p className="relative text-cdark w-max font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl">
          Course <span className="text-corange">Highlights</span>
        </p>
        <p className="font-[gregular] lg:text-lg">In this course you will learn:</p>
        <ul
          dangerouslySetInnerHTML={{ __html: text }}
          className=" font-[gregular] listStyle lg:text-lg ps-4 py-8 "
        ></ul>
        <pre className="font-[gregular] lg:text-lg">{textTwo}</pre>
      </div>
      <div className="lg:w-[65%] xl:w-[70%] digitalcourse pt-8">
        <div className="w-[90%] m-auto text-center">
        <p className="text-corange font-[gbold] text-[30px] lg:text-[40px]">
            N {numFor.format(digital[1]?.ngn_price)}
            <span className="text-cgray text-xl lg:text-2xl font-[gmedium]">
              {" "}
              | N <span className="line-through">{numFor.format(digital[1]?.ngn_offset)}</span>
            </span>
          </p>
          <Text
            className="font-[gregular] text-cgray"
            body="Take advantage of this transformational course"
          />
          <div className="w-11/12 m-auto text-start my-4">
            <label className="py-2">Cohort (Start Month)</label>
            <select className="selectDig w-full font-[gmedium] outline-none border border-[#22205747] px-3 flex items-center justify-center text-sm text-cdark rounded-[10px] bg-white pt-4 2xl:pt-5 2xl:pb-5  pb-3 ">
              <option className="px-2">{cohort[0]?.name}</option>
            </select>
          </div>
        <div className="flex flex-col gap-6 my-4">
            <hr className="w-full mt-2 mb-3"/>
            <button className="p-4 bg-corange rounded-[10px] text-white font-[gsemibold]">Pay {numFor.format(digital[1]?.ngn_price)}</button>
            <TextLink target='_blank' to="https://pluralcode.academy/chat-advisor" className='w-full' body={<button className="w-full border p-4 rounded-[10px] bg-white text-corange border-corange">Chat with Student Advisor</button>} />
        </div>
        <div className="flex flex-col gap-6 py-4">
        <div className="flex gap-6 text-start">
            <div className="w-16">
                <Logo className="w-full" src={picone} alt=""/>
            </div>
            <div>
                <Text className='font-[gregular] lg:text-lg' body='Duration'/>
                <Text className='font-[gbold] text-cgray text-xl lg:text-[32px]' body='8weeks'/>
            </div>
        </div>
        <div className="flex gap-6 text-start">
            <div className="w-16">
                <Logo className="w-full" src={pictwo} alt=""/>
            </div>
            <div>
                <Text className='font-[gregular] lg:text-lg' body='Instructor-Led Course'/>
                <Text className='font-[gbold] text-cgray text-xl lg:text-[32px]' body='Paid'/>
            </div>
        </div>
        <div className="flex gap-6 text-start">
            <div className="w-16">
                <Logo className="w-full" src={picthree} alt=""/>
            </div>
            <div>
                <Text className='font-[gregular] lg:text-lg' body='Certificate'/>
                <Text className='font-[gbold] text-cgray text-xl lg:text-[32px]' body='Yes'/>
            </div>
        </div>
        <div className="flex gap-6 text-start">
            <div className="w-16">
                <Logo className="w-full" src={picfour} alt=""/>
            </div>
            <div>
                <Text className='font-[gregular] lg:text-lg' body='Language'/>
                <Text className='font-[gbold] text-cgray text-xl lg:text-[32px]' body='English'/>
            </div>
        </div>
        <div className="flex gap-6 text-start">
            <div className="w-16">
                <Logo className="w-full" src={picfive} alt=""/>
            </div>
            <div>
                <Text className='font-[gregular] lg:text-lg' body='Next Start Date'/>
                <Text className='font-[gbold] text-cgray text-xl lg:text-[32px]' body={cohort[0]?.name}/>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHighlights;
