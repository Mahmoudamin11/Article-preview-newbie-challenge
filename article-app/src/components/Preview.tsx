import drawer from "../assets/drawers.jpg";
import person from "../assets/avatar-michelle.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import ShareIcons from "./ShareIcons";
import { useState } from "react";

const Preview = () => {
  const screenWidth = window.innerWidth;
  let cond = false;
  {
    screenWidth >= 768 ? (cond = true) : (cond = false);
  }
  const [icon, setIconState] = useState(false);
  return (
    <div className="mainContent  md:grid md:grid-cols-[40%_1fr] relative w-full sm:w-2/3 md:w-10/12 min-[1010px]:w-10/12 bg-white overflow-hidden md:overflow-visible rounded-xl">
      <div className="img-container  h-60 sm:h-80 md:h-auto md:w-full overflow-hidden">
        <img
          className="w-full h-full md:rounded-tl-xl md:rounded-bl-xl"
          src={drawer}
          alt="drawer-img"
        />
      </div>
      {/* Start styling from here  */}
      <div className="midContent px-5 py-6 md:p-8 min-[1010px]:px-14 min-[1010px]:py-6">
        <h1 className="text-xl md:text-2xl min-[1010px]:text-3xl text-Very-Dark-Grayish-Blue font-designBold mb-5 min-[1115px]:mb-9">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="text-lg min-[1010px]:text-xl text-Desaturated-Dark-Blue mb-5 min-[1115px]:mb-9">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>

        <div className="lower-cont flex justify-between items-center">
          <div className="img-title flex items-center justify-between">
            <img
              className="w-14 h-14 rounded-full mr-5"
              src={person}
              alt="person-img"
            />
            <div className="text&date text-sm">
              <h4 className="font-designBold tracking-wider text-Very-Dark-Grayish-Blue">
                Michelle Appleton
              </h4>
              <p className="block text-Grayish-Blue tracking-wider font-designNormal">
                28 Jun 2020
              </p>
            </div>
          </div>

          <div
            onClick={() =>
              icon == false ? setIconState(true) : setIconState(false)
            }
            className={
              icon
                ? "bg-Very-Dark-Grayish-Blue share-icon w-11 h-11 rounded-full  flex justify-center items-center cursor-pointer md:relative"
                : "bg-Light-Grayish-Blue share-icon w-11 h-11 rounded-full  flex justify-center items-center cursor-pointer md:relative"
            }
            // className="share-icon w-11 h-11 rounded-full  flex justify-center items-center cursor-pointer md:relative"
          >
            <FontAwesomeIcon
              className={
                icon
                  ? "text-Light-Grayish-Blue transition-all duration-300"
                  : "text-Very-Dark-Grayish-Blue transition-all duration-300"
              }
              icon={faShare}
              size="xl"
            />
            {cond && icon && <ShareIcons onClose={() => setIconState(false)} />}
          </div>
        </div>
      </div>
      {cond && icon && <ShareIcons onClose={() => setIconState(false)} />}
    </div>
  );
};

export default Preview;
