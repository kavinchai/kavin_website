import React from "react";
import "../css/SideNav.css";
import { RiGithubLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SideNav = () => {
  const copyFunc = () => {
    navigator.clipboard.writeText("kavinchai00@gmail.com");
    // toast("Hello Geeks");
    toast.success("Copied!", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      icon: false,
      theme: "dark",
      closeButton: false,
      toastId: "copied",
    });
  };
  return (
    <div className="sideNavContainer">
      <div className="iconsSection">
        <a href="https://github.com/kavinchai" target="_blank">
          <RiGithubLine className="iconType1 icon" />
        </a>
        <a href="https://www.linkedin.com/in/kavinchai" target="_blank">
          <FiLinkedin className="iconType2 icon" />
        </a>
        <button onClick={copyFunc} className="sideBtn">
          <MdOutlineEmail className="iconType1 icon" />
        </button>
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
        />
      </div>
    </div>
  );
};

export default SideNav;
