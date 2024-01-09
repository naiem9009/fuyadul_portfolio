import {Link} from "react-router-dom";


const Footer = () => {


    return (
        <div className='section-color p-5'>
            <div className='flex flex-row w-full items-center justify-between'>
                <div>Fuyadul Islam</div>

                <div className='md:flex flex-row gap-5 font-roboto hidden'>
                    <Link className='text-hover-primary duration-200' to='/'>Home</Link>
                    <Link className='text-hover-primary duration-200' to='/portfolio'>Portfolio</Link>
                    <Link className='text-hover-primary duration-200' to='/about-me'>About Me</Link>
                    <Link className='text-hover-primary duration-200' to='/testimonial'>Testimonial</Link>
                </div>

                <div className='flex flex-row items-center gap-3'>
                    <i className="fi fi-brands-facebook text-xl cursor-pointer"></i>
                    <i className="fi fi-brands-twitter text-xl cursor-pointer"></i>
                    <i className="fi fi-brands-instagram text-xl cursor-pointer"></i>
                    <i className="fi fi-brands-whatsapp text-xl cursor-pointer"></i>
                </div>
            </div>

            <hr className='my-5' />

            <div className='text-end'>
                <p className='text-sm text-gray-600/60'>MADE BY DEVELOPER NAIM</p>
            </div>

        </div>
    )
}

export default Footer