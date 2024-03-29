import AnimationWrapper from "../utils/AnimationWrapper.jsx"
import SectionWrapper from "../components/SectionWrapper.component.jsx";
import selfImage from "../assets/image/self-photo.png"
import aboutMeImage from "../assets/image/About-Me.png"
import portfolioImage from "../assets/image/portfolio-image.png"
import {Link} from "react-router-dom";
import { portfolioData, skillsData, testimonialData } from "../../data.js";
import Skills from "../components/Skills.component.jsx";
import About from "../components/About.component.jsx";
import Portfolio from "../components/Portfolio.component.jsx";
import Testimonial from "../components/Testimonial.component.jsx";


const HomePage = () => {

    return (

        <AnimationWrapper className='pb-20'>
            <div className='md:pt-0 pt-24 section-color w-full md:p-5 lg:p-0 px-5'>
                <SectionWrapper>
                    <div
                        className='flex md:flex-row flex-col md:justify-between items-center md:gap-0 gap-6 font-roboto md:min-h-screen min-h-[80vh]'>
                        <div>
                            <h1 className='md:text-2xl text-xl font-semibold mb-3'>Hey, I'm <span className="text-bold text-primary">Fuyadul Islam</span></h1>
                            <h1 className='md:text-6xl text-3xl font-bold mb-3'>I am <span className='text-primary'>Web Developer</span>
                                <br/> & Graphics Desinger</h1>
                            <p className='text-gray-500/60 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. <br/> Suspendisse varius enim in eros elementum tristique.</p>
                            <Link className='primary-btn' to=''>Get In Touch</Link>
                        </div>

                        <div className='md:w-1/2 w-full'>
                            <img className='w-full h-full object-cover' src={selfImage} alt="Fuyadul Islam"/>
                        </div>
                    </div>
                </SectionWrapper>
            </div>


            <div className="md:p-5 lg:p-0 px-5">
                <SectionWrapper>
                    <div className='font-roboto mt-20 mb-10'>
                        <h1 className='text-xl font-semibold'>My Skills</h1>
                        <h1 className='text-4xl font-bold'>My Skills</h1>
                    </div>

                    <div className='grid md:grid-cols-4 grid-cols md:gap-4 gap-2 font-roboto'>
                        {skillsData?.filter((_item, index) => index < 4)?.map((item, index) => (
                            <Skills key={index} icon={item.icon} heading={item.heading} content={item.content} />
                        ))}
                    </div>

                    <About aboutImage={aboutMeImage} />


                    <div className='mt-20 font-roboto pb-10'>
                        <h1 className='text-xl font-semibold'>Recent Project</h1>
                        <h1 className='text-4xl font-bold'>My Portfolio</h1>

                        <div className='mt-10 grid md:grid-cols-3 grid-cols md:gap-5 gap-3'>
                            {portfolioData?.filter((_item, i) => i < 3)?.map((item, index) => (
                                <Portfolio key={index} portfolioImage={item.image} heading={item.heading} content={item.content} />
                            ))}
                        </div>

                    </div>

                </SectionWrapper>
            </div>

            <div className='font-roboto pb-10 section-color px-5 pt-20 '>
               <SectionWrapper>
                   <div>
                       <h1 className='text-xl font-semibold'>Clients Feedback</h1>
                       <h1 className='text-4xl font-bold'>Customer testimonials</h1>

                       <div className='grid md:grid-cols-3 grid-cols mt-5 md:gap-5 gap-3'>

                        {testimonialData?.filter((item, i) => item.rates >= 4)?.filter((_item, i) => i < 3)?.map((item, index) => (
                            <Testimonial key={index} rates={item.rates} message={item.message} client={item.client} />
                        ))}


                           {/* <div className='border border-[#006B6A] p-5 rounded-md'>
                               <div className='flex flex-row gap-2 mb-2'>
                                   <i className="fi fi-sr-star"></i>
                                   <i className="fi fi-sr-star"></i>
                                   <i className="fi fi-sr-star"></i>
                                   <i className="fi fi-sr-star"></i>
                                   <i className="fi fi-sr-star"></i>
                               </div>
                               <p className='mb-3 text-gray-600/60 text-sm'>Lorem ipsum dolor sit amet, consectetur
                                   adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
                                   quis viverra.</p>
                               <div className='flex flex-row gap-3 items-center'>
                                   <img className='w-16 h-16 rounded-full object-cover'
                                        src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg"
                                        alt=""/>

                                   <div>
                                       <h1>Naim Hossen</h1>
                                       <p>JavaScript Developer</p>
                                   </div>
                               </div>
                           </div> */}


         
                       </div>
                   </div>
               </SectionWrapper>
            </div>


            {/*<SectionWrapper>*/}
                <div className='mt-20 md:w-1/2 w-full mx-auto pb-10 md:p-5 lg:p-0 px-5'>
                    <h1 className='text-xl font-semibold text-center'>Get In Touch</h1>
                    <h1 className='text-4xl font-bold text-center'>Contact me</h1>

                    <p className='text-sm text-gray-700/60 text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <form action="" className='mt-6'>
                        <div className='grid md:grid-cols-2 grid-cols md:gap-5 gap-2'>
                            <div>
                                <label htmlFor="">First Name</label>
                                <input type="text" className='w-full h-12 px-3 border rounded-md mt-2'/>
                            </div>

                            <div>
                                <label htmlFor="">Last Name</label>
                                <input type="text" className='w-full h-12 px-3 border rounded-md mt-2'/>
                            </div>

                            <div>
                                <label htmlFor="">Email</label>
                                <input type="text" className='w-full h-12 px-3 border rounded-md mt-2'/>
                            </div>

                            <div>
                                <label htmlFor="">Phone Number</label>
                                <input type="text" className='w-full h-12 px-3 border rounded-md mt-2'/>
                            </div>
                        </div>

                        <div className="mt-2">
                            <label htmlFor="">Message</label>
                            <textarea type="text" className='w-full h-40 p-3 border rounded-md mt-2' placeholder='Type your message'></textarea>
                        </div>

                        <input type="submit" value='SEND' className='primary-btn cursor-pointer mt-5' />

                    </form>
                </div>
            {/*</SectionWrapper>*/}
        </AnimationWrapper>

    )
}

export default HomePage