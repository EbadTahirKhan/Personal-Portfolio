import React from "react";
import "../index.css";
const Footer = () => {
  return (
    <footer className="bg-[#151030] text-white py-6">
      <div className="container mx-auto flex items-center justify-center pl-10 pr-10">
        <div>
          <h2 className="text-2xl mr-3 font-bold">Connect with Me | </h2>
        </div>
        <div className="flex space-x-5">
          {/* Replace the following URLs with your actual social media profile URLs */}

          <a
            href="https://www.linkedin.com/in/ebad-tahir-khan-29603526b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin icons"></i>
          </a>
          <a
            href="https://github.com/EbadTahirKhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github icons"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
