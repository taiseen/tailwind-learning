import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs"
import images from "../img";


const Footer = () => {

    return (
        <div className="border-t px-8 py-4 text-center bg-gray-800 flex flex-col md:flex-row items-center justify-between space-y-4">

            <div className='flex items-center gap-2'>
                <img
                    alt="imgName"
                    className='w-14'
                    src={images.logo}
                />
            </div>

            <p className="text-white font-thin md:text-xl">Copy Right &copy; 2022 | All Right Received By ❤ Taiseen </p>

            <div className="flex gap-3 pb-4">
                <a href="/#"><BsFacebook className="text-white text-2xl" /></a>
                <a href="/#"><BsInstagram className="text-white text-2xl" /></a>
                <a href="/#"><BsTwitter className="text-white text-2xl" /></a>
                <a href="/#"><BsLinkedin className="text-white text-2xl" /></a>
            </div>
        </div>
    )
}

export default Footer;