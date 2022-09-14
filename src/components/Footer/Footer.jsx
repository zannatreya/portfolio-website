import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer class="footer footer-center p-10 mt-36 bg-secondary text-base-content rounded">
            <div class="grid grid-flow-col gap-4">
                <Link class="link link-hover" to={'/about'} >ABOUT</Link>
                <Link class="link link-hover" to={'/contact'} >CONTACT</Link>
                {/* <a class="link link-hover" download={'resume-zannatul'} href="../../../resume/resume-zannatul.pdf">RESUME</a> */}
            </div>
            <div>
                <div class="grid grid-flow-col gap-4">
                    <a href='https://www.linkedin.com/in/zannatul-binta-bahar/' target="_blank"><img className='w-7 h-7' src="https://img.icons8.com/ios-filled/50/undefined/linkedin.png" /></a>

                    <a href='https://github.com/zannatreya' target="_blank" ><img className='w-7 h-7' src="https://img.icons8.com/ios-glyphs/30/undefined/github.png" /></a>

                    <a href='https://stackoverflow.com/users/19067787/zannatul-binta-bahar' target="_blank" ><img className='w-7 h-7' src="https://img.icons8.com/plumpy/24/undefined/stackoverflow.png" /></a>
                </div>
            </div>
            <div>
                <p className='font-sans'>© Zannatul Binta Bahar, {date}</p>
            </div>
        </footer>
    );
};

export default Footer;