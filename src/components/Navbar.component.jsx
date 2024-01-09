import {Outlet, Link} from "react-router-dom";
import {useState} from "react";

const NavbarComponent = () => {

    const [openNav, setOpenNav] = useState(false)

    return (
        <>
            <div className='fixed w-full z-50 top-0'>
                <nav className='p-5 flex flex-row justify-between items-center bg-white drop-shadow'>
                    <div className='font-roboto heading text-2xl'>Fuyadul Islam</div>

                    <div className='md:flex flex-row gap-5 font-roboto hidden'>
                        <Link className='text-hover-primary duration-200' to='/' >Home</Link>
                        <Link className='text-hover-primary duration-200' to='/portfolio' >Portfolio</Link>
                        <Link className='text-hover-primary duration-200' to='/about-me' >About Me</Link>
                        <Link className='text-hover-primary duration-200' to='/testimonial' >Testimonial</Link>
                    </div>

                    <div className='font-roboto md:block hidden'>
                        <Link className='secondary-btn hover-btn' to='/contact'>Contact</Link>
                    </div>

                {/*    mobile Nav Icon  */}
                    <div onClick={() => setOpenNav(currentVal => !currentVal)}
                         className='md:hidden block cursor-pointer text-hover-primary'>

                        {!openNav ? <i className="fi fi-br-menu-burger"></i> : <i className="fi fi-br-cross"></i>}


                    </div>
                </nav>

                {/*  mobile menu  */}
                {openNav && (
                    <nav className='w-60 h-80 animate-nav bg-white absolute top-18 right-3 overflow-hidden md:hidden block'>
                        <Link className='px-3 text-hover-primary duration-200 hover:bg-gray-300/40 hover:border-l-4 hover:border-yellow-500 py-3 block' to='/' >Home</Link>
                        <Link className='px-3 text-hover-primary duration-200 hover:bg-gray-300/40 hover:border-l-4 hover:border-yellow-500 py-3 block' to='/' >Portfolio</Link>
                        <Link className='px-3 text-hover-primary duration-200 hover:bg-gray-300/40 hover:border-l-4 hover:border-yellow-500 py-3 block' to='/' >About Me</Link>
                        <Link className='px-3 text-hover-primary duration-200 hover:bg-gray-300/40 hover:border-l-4 hover:border-yellow-500 py-3 block' to='/' >Testimonial</Link>
                        <Link className='px-3 text-hover-primary duration-200 hover:bg-gray-300/40 hover:border-l-4 hover:border-yellow-500 py-3 block' to='/' >Contact</Link>


                    </nav>
                )}
            </div>

            <Outlet />
        </>


    )
}

export default NavbarComponent