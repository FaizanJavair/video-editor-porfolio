/* eslint-disable */
import { BiPencil, BiPaint, BiPhotoAlbum, BiPolygon } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { AiOutlineScissor, AiOutlineBgColors, AiFillPicture, AiFillYoutube } from "react-icons/ai";
import { FaVideo, FaRegNewspaper,  FaFileAudio } from "react-icons/fa";

 

export const servicesData = [
    {
        id: 1,
        title: 'Video Editing',
        icon: <FaVideo/>
    },
    {
        id: 2,
        title: 'Video Trimming',
        icon: <AiOutlineScissor /> 
    },
    {
        id: 3,
        title: 'Color Correction',
        icon: <BiPaint /> 
    },
    {
        id: 4,
        title: 'Content Writing',
        icon: <BiPencil />
    },
    // {
    //     id: 4,
    //     title: 'Internet Research',
    //     icon: <FaInternetExplorer />
    // },
    // {
    //     id: 5,
    //     title: 'Tutoring',
    //     icon: <FaChalkboardTeacher />
    // },

    {
        id: 6,
        title: 'Photo Editing',
        icon: <BiPhotoAlbum />
    },
    {
        id: 7,
        title: 'Audio Editing',
        icon: <FaFileAudio />
    },
    // {
    //     id: 8,
    //     title: 'Pinterest Virtual Assistant',
    //     icon: <FaPinterest />
    // }, 
    {
        id: 9,
        title: 'Thumbnail Editing',
        icon: <AiFillPicture />
    },
    {
        id: 10,
        title: 'Logo Creation', 
        icon: <BiPolygon />
    },
   
    {
        id: 12,
        title: 'YouTube Studio',
        icon: <AiFillYoutube />
    },
    {
        id: 13,
        title: 'Blog Posting',
        icon: <FaRegNewspaper />
    },

]

// Uncomment your required service.
// Couldn't find the required services? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
// You can also add on your own 😉.