import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";

interface props {
  onClose: () => void;
}

const ShareIcons = ({ onClose }: props) => {
  return (
    <div className="bg-Very-Dark-Grayish-Blue transition-all duration-150 md:cursor-default absolute bottom-0 left-0 w-full md:w-60 flex items-center justify-between px-8 py-6 md:bottom-1.5full  md:left-1/2 z-50 md:px-7 md:py-5 md:rounded-lg md:transform md:-translate-x-1/2 md:before:content-[''] md:before:w-0 md:before:h-0 md:before:border-20 md:before:border-b-transparent md:before:border-l-transparent md:before:border-r-transparent md:before:border-solid  md:before:border-t-Very-Dark-Grayish-Blue md:before:absolute md:before:-bottom-[59%] md:before:left-1/2 md:before:transform md:before:-translate-y-1/4 md:before:-translate-x-1/2 ">
      <span className="uppercase text-md md:text-sm tracking-more-widest text-Desaturated-Dark-Blue font-designBold">
        share
      </span>
      <div className="mid-icons flex">
        <img
          className="mr-5 w-6 md:w-5 md:mr-4 cursor-pointer"
          src={facebookIcon}
          alt=""
        />
        <img
          className="mr-5 w-6 md:w-5 md:mr-4 cursor-pointer"
          src={twitterIcon}
          alt=""
        />
        <img
          className="mr-5 w-6 md:w-5 md:mr-4 cursor-pointer"
          src={pinterestIcon}
          alt=""
        />
      </div>
      <div className="share-icon cursor-pointer w-10 h-10 md:hidden rounded-full bg-Desaturated-Dark-Blue flex justify-center items-center">
        <FontAwesomeIcon
          onClick={onClose}
          className="text-Light-Grayish-Blue"
          icon={faShare}
          size="xl"
        />
      </div>
    </div>
  );
};

export default ShareIcons;
