import { ReactNavbar } from "overlay-navbar";
import {RiAccountCircleFill} from "react-icons/ri";
import {FcSearch} from "react-icons/fc"
import {BsFillCartCheckFill } from "react-icons/bs";
import logo from '../../../images/Konukkupoo.png'
function Header() {
    const ob={
        profileIcon:true,
        profileIconSize:"3vmax",
        profileIconMargin:"1rem",
        ProfileIconElement: RiAccountCircleFill, 
        searchIcon:true,
        searchIconSize:"3vmax",
        searchIconMargin:"1rem",
        SearchIconElement:FcSearch,
        cartIcon:true,
        cartIconSize:"3vmax",
        CartIconElement:BsFillCartCheckFill,
        logo:logo,
        burgerColorHover: "#eb4034",
        logoWidth: "20vmax",
        navColor1: "rgba(255, 204, 230)",
        logoHoverSize: "10px",
        logoHoverColor: "#eb4034",
        link1Text: "Home",
        link2Text: "Products",
        link3Text: "Contact",
        link4Text: "About",
        link1Url: "/",
        link2Url: "/products",
        link3Url: "/contact",
        link4Url: "/about",
        link1Size: "1.3vmax",
        link1Color: "rgba(35, 35, 35,0.8)",
        nav1justifyContent: "flex-end",
        nav2justifyContent: "flex-end",
        nav3justifyContent: "flex-start",
        nav4justifyContent: "flex-start",
        link1ColorHover: "#eb4034",
        link1Margin: "1vmax",
        profileIconUrl: "/login",
        profileIconColor: "rgba(35, 35, 35,0.8)",
        searchIconColor: "rgba(35, 35, 35,0.8)",
        cartIconColor: "rgba(35, 35, 35,0.8)",
        profileIconColorHover: "#eb4034",
        searchIconColorHover: "#eb4034",
        cartIconColorHover: "#eb4034",
        cartIconMargin: "1vmax",
    }
  return (
    <ReactNavbar {...ob}/>
  )
}

export default Header