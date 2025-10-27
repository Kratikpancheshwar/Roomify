import React from 'react'
import Logo from '../../assets/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const footerLinks = ['Home', 'Features', 'Downloads', 'Plans & Pricing', 'Contact Us']
    const socialLinks = [
        {
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/_aryan_aswal_45/'
        },
        {
            icon: <FaFacebook />,
            link: 'https://www.facebook.com/profile.php?id=100088831088706&ref=xav_ig_profile_web'
        },
        {
            icon: <FaXTwitter />,
            link: 'https://www.twitter.com'
        },
        {
            icon: <FaGithub />,
            link: 'https://www.github.com'
        }
    ]
    return (
        <div className='my-10 md:my-20'>
            <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-0'>
                {/* Logo and Description */}
                <div className='text-center md:text-left'>
                    <img src={Logo} alt='logo' className='h-8 md:h-10 w-auto mx-auto md:mx-0' />
                    <p className='text-gray-500 font-medium text-sm mt-2'>Experience efficient collaboration</p>
                    <p className='text-gray-500 font-medium text-sm'>Enjoy ultimate video calling app</p>
                </div>

                {/* Links and Social */}
                <div className='flex flex-col items-center md:items-end gap-4 md:gap-5'>
                    {/* Navigation Links */}
                    <div className='flex flex-wrap justify-center md:justify-end gap-3 md:gap-5'>
                        {
                            footerLinks.map((link, index) => (
                                <p key={index} className='text-black font-medium cursor-pointer text-sm md:text-base hover:text-gray-700'>{link}</p>
                            ))
                        }
                    </div>

                    {/* Social Links */}
                    <div className='flex items-center gap-3 md:gap-5'>
                        <h1 className='font-semibold text-gray-500 text-sm md:text-base'>Follow us</h1>
                        {
                            socialLinks.map((social, index) => (
                                <a 
                                    href={social.link} 
                                    key={index} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-gray-500 font-medium cursor-pointer hover:text-black text-lg md:text-xl transition-colors'
                                >
                                 {social.icon}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
         
        </div>
    )
}

export default Footer