import React from "react";
import logo from "../../../images/Konukkupoo.png";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BsFillBagFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { MdOutlineCardGiftcard } from "react-icons/md";
import "./footer.scss";
function Footer() {
  return (
    <footer id="footer">
      <div className="up">
        <div className="leftfooter">
          <img src={logo} alt="logo" />
          <p>
            <h2>about our website title</h2>
            konukkupo means buy and go in telugu which is one of the official
            languages of India
          </p>
        </div>
        <div className="midfooter">
          <h1>Konukkupoo</h1>
          <p>
            we are started this ecommerce website to facilitate shopkeepers a
            platform for their business in online and also for the comfort of
            customers
          </p>
        </div>
        <div className="rightfooter">
          <h4>Follow Us</h4>
          <a href="https://www.instagram.com/_rishi__rr/" target={"_blank"} rel={"noreferrer"}>
            <p>Instagram</p>
            <AiFillInstagram />
          </a>
          <a href="https://www.youtube.com/@mpcjeeeducator4771" target={"_blank"}  rel={"noreferrer"}>
            <p>Youtube</p>
            <AiFillYoutube />
          </a>
          <a href="https://twitter.com/reddyRishiii" target={"_blank"}  rel={"noreferrer"}>
            <p>Twitter</p>
            <AiFillTwitterSquare />
          </a>
        </div>
      </div>
      <div className="down">
        <a href="#1" target={"_blank"}>
            <BsFillBagFill />
          <p>
                Become a Seller
          </p>
        </a>
        <a href="#1" target={"_blank"}>
            <MdOutlineCardGiftcard />
          <p>
            GiftCards
          </p>
        </a>
        <a href="#1" target={"_blank"}>
            <BsFillQuestionCircleFill />
          <p>
            Help Center
          </p>
        </a>
        <p>Copyrights &copy; RishithReddy</p>
      </div>
    </footer>
  );
}

export default Footer;
