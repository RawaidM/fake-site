import React from "react";
import Video from "../videos/hemenhallederim.mp4";
import VideoThumbnail from "../images/VideoThumbnail.jpg";
import { BsPlayFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import Modal from "react-modal";

import "video-react/dist/video-react.css";
import {
  Player,
  BigPlayButton,
  LoadingSpinner,
  ControlBar,
  ReplayControl,
  ForwardControl,
  VolumeMenuButton,
} from "video-react";

const Youtube = () => {
  const [IsOpen, setIsOpen] = React.useState(false);

  return (
    <div className="absolute -mt-24 sm:-mt-44 w-full">
      <div className="relative">
        <div
          className="w-11/12 sm:w-6/12 mx-auto shadow-xl"
          onClick={() => setIsOpen(true)}
        >
          <img src={VideoThumbnail} alt="$$$$$" />
          <BsPlayFill
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            size={100}
            color="#e6e6e6cc"
          />
        </div>

        <Modal
          closeTimeoutMS={150}
          isOpen={IsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={{
            overlay: {
              zIndex: 40,
              backgroundColor: "#00000066",
            },
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              overflow: "hidden",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "0",
            },
          }}
          className="w-11/12 sm:w-8/12 shadow-xl"
        >
          <Player>
            <source src={Video} />
            <BigPlayButton position="center" />
            <LoadingSpinner />
            <ControlBar autoHide={false}>
              <ReplayControl seconds={5} order={2.1} />
              <ForwardControl seconds={10} order={3.3} />
              <VolumeMenuButton vertical />
            </ControlBar>
          </Player>
          <div
            className="absolute top-0 right-0 cursor-pointer mr-1 mt-1 text-[#161616b0] hover:text-[#161616] hover:animate-pulse transition-colors duration-150"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose size={40} />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Youtube;
