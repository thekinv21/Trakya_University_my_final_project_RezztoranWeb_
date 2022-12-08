import { BiRestaurant } from "react-icons/bi";
import {
  FaStar,
  FaUser,
  FaHeart,
  FaSignOutAlt,
  FaHome,
  FaAddressCard,
  FaComment
} from "react-icons/fa";


//---------------------Header Links-----------------------

export const HeaderWebLinks = [
  {
    name: "Ana Sayfa",
    href: "#",
    icon: <FaHome fontSize="16px" />,
  },
  {
    name: "Hakkımızda",
    href: "#",
    icon: <FaAddressCard fontSize="16px" />,
  },
  {
    name: "Restoranlar",
    href: "#",
    icon: <BiRestaurant fontSize="16px" />,
  },
];


//------------------- Navbar Links----------------------
export const NavbarMenuLinks = [
  {
    name: "Restoranlar",
    href: "#",
    icon: <BiRestaurant fontSize="18px" />,
  },
  {
    name: "Favori Restoranlar",
    href: "#",
    icon: <FaHeart fontSize="18px" />,
  },
  {
    name: "Bonus Puanlar",
    href: "#",
    icon: <FaStar fontSize="18px" />,
  },
  {
    name: "Profilim",
    href: "/profile",
    icon: <FaUser fontSize="18px" />,
  },
  {
    name: "Çikiş",
    href: "/signin",
    icon: <FaSignOutAlt fontSize="18px" />,
  },
];


//-------------------Profile Card Links----------------------
export const ProfileMenuLinks = [
  {
    name: "Restoranlar",
    href: "#",
    icon: <BiRestaurant fontSize="18px" />,
  },
  {
    name: "Favori Restoranlar",
    href: "#",
    icon: <FaHeart fontSize="18px" />,
  },
  {
    name: "Bonus Puanlar",
    href: "#",
    icon: <FaStar fontSize="18px" />,
  },
  {
    name: "Profilim",
    href: "/profile",
    icon: <FaUser fontSize="18px" />,
  },

  {
    name: "Yorumlar",
    href: "#",
    icon: <FaComment fontSize="18px" />,
  },

  {
    name: "Çikiş",
    href: "/signin",
    icon: <FaSignOutAlt fontSize="18px" />,
  },
];