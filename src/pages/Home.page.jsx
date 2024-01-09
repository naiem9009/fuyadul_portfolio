import AnimationWrapper from "../utils/AnimationWrapper.jsx"
import SectionWrapper from "../components/SectionWrapper.component.jsx";
import selfImage from "../assets/image/self-photo.png"
import aboutMe from "../assets/image/About-Me.png"
import portfolioImage from "../assets/image/portfolio-image.png"
import {Link} from "react-router-dom";


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
                    <div className='font-roboto mt-20'>
                        <h1 className='text-xl font-semibold'>My Skills</h1>
                        <h1 className='text-4xl font-bold'>My Skills</h1>
                    </div>

                    <div className='grid md:grid-cols-4 grid-cols md:gap-4 gap-2 font-roboto'>
                        <div
                            className='mt-10 section-color p-5 border-b-2 border-white hover:border-b-2 hover:border-[#5E3BEE] rounded-b-xl duration-100'>
                            <i className="fi fi-rr-display-code text-4xl mb-2"></i>
                            <h1 className='text-xl font-bold mb-2'>Strategy & Direction</h1>
                            <p className='text-sm text-gray-500/60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in eros elementum tristique.</p>
                        </div>

                        <div
                            className='mt-10 section-color p-5 border-b-2 border-white hover:border-b-2 hover:border-[#5E3BEE] rounded-b-xl duration-100'>
                            <i className="fi fi-rr-display-code text-4xl mb-2"></i>
                            <h1 className='text-xl font-bold mb-2'>Strategy & Direction</h1>
                            <p className='text-sm text-gray-500/60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in eros elementum tristique.</p>
                        </div>

                        <div
                            className='mt-10 section-color p-5 border-b-2 border-white hover:border-b-2 hover:border-[#5E3BEE] rounded-b-xl duration-100'>
                            <i className="fi fi-rr-display-code text-4xl mb-2"></i>
                            <h1 className='text-xl font-bold mb-2'>Strategy & Direction</h1>
                            <p className='text-sm text-gray-500/60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in eros elementum tristique.</p>
                        </div>

                        <div
                            className='mt-10 section-color p-5 border-b-2 border-white hover:border-b-2 hover:border-[#5E3BEE] rounded-b-xl duration-100'>
                            <i className="fi fi-rr-display-code text-4xl mb-2"></i>
                            <h1 className='text-xl font-bold mb-2'>Strategy & Direction</h1>
                            <p className='text-sm text-gray-500/60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in eros elementum tristique.</p>
                        </div>
                    </div>
                    {/*</SectionWrapper>*/}


                    {/*<SectionWrapper>*/}
                    <div className='mt-20 flex md:flex-row flex-col justify-around items-center font-roboto md:gap-0 gap-4'>

                        <div className='md:w-1/3 w-1/2'>
                            <img className='w-full h-full object-cover' src={aboutMe} alt="Fuyadul Islam"/>
                        </div>

                        <div className='md:w-1/2 w-full'>
                            <h1 className='text-xl font-semibold mb-2'>About</h1>
                            <h1 className='text-4xl font-bold mb-5'>About Me</h1>

                            <p className='text-sm text-gray-700/60 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris
                                duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in
                                amet pellentesque.</p>

                            <p className='text-sm text-gray-700/60'>Sit turpis pretium eget maecenas. Vestibulum dolor
                                mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod
                                risus r.</p>

                        </div>

                    </div>
                    {/*</SectionWrapper>*/}


                    {/*<SectionWrapper>*/}

                    <div className='mt-20 font-roboto pb-10'>
                        <h1 className='text-xl font-semibold'>Recent Project</h1>
                        <h1 className='text-4xl font-bold'>My Portfolio</h1>

                        <div className='mt-10 grid md:grid-cols-3 grid-cols md:gap-5 gap-3'>
                            <div>
                                <img className='' src={portfolioImage} alt="portfolio image"/>

                                <div className='p-3'>
                                    <h1 className='text-xl font-bold'>Ahuse</h1>
                                    <p className='text-sm text-gray-600/80 mb-4'>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse varius enim in eros.</p>
                                    <Link className='border-b border-gray-500' to=''>View In Github</Link>
                                </div>
                            </div>

                            <div>
                                <img className='' src={portfolioImage} alt="portfolio image"/>

                                <div className='p-3'>
                                    <h1 className='text-xl font-bold'>Ahuse</h1>
                                    <p className='text-sm text-gray-600/80 mb-4'>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse varius enim in eros.</p>
                                    <Link className='border-b border-gray-500' to=''>View In Github</Link>
                                </div>
                            </div>

                            <div>
                                <img className='' src={portfolioImage} alt="portfolio image"/>

                                <div className='p-3'>
                                    <h1 className='text-xl font-bold'>Ahuse</h1>
                                    <p className='text-sm text-gray-600/80 mb-4'>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse varius enim in eros.</p>
                                    <Link className='border-b border-gray-500' to=''>View In Github</Link>
                                </div>
                            </div>
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
                           <div className='border border-[#006B6A] p-5 rounded-md'>
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
                               {/*006B6A*/}
                               <div className='flex flex-row gap-3 items-center'>
                                   <img className='w-16 h-16 rounded-full object-cover'
                                        src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg"
                                        alt=""/>

                                   <div>
                                       <h1>Naim Hossen</h1>
                                       <p>JavaScript Developer</p>
                                   </div>
                               </div>
                           </div>


                           <div className='border border-[#006B6A] p-5 rounded-md'>
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
                               {/*006B6A*/}
                               <div className='flex flex-row gap-3 items-center'>
                                   <img className='w-16 h-16 rounded-full object-cover'
                                        src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg"
                                        alt=""/>

                                   <div>
                                       <h1>Naim Hossen</h1>
                                       <p>JavaScript Developer</p>
                                   </div>
                               </div>
                           </div>


                           <div className='border border-[#006B6A] p-5 rounded-md'>
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
                               {/*006B6A*/}
                               <div className='flex flex-row gap-3 items-center'>
                                   <img className='w-16 h-16 rounded-full object-cover'
                                        src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg"
                                        alt=""/>

                                   <div>
                                       <h1>Naim Hossen</h1>
                                       <p>JavaScript Developer</p>
                                   </div>
                               </div>
                           </div>
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

                        <div>
                            <label htmlFor="">First Name</label>
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