"use client";
import React from "react";

const DownloadResume = () => {
  const downloadResume = () => {
    const pdfUrl = "/assets/resume/Rishi_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Rishi Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <p
        onClick={downloadResume}
        className="hover:text-blue-600 hover:underline font-semibold cursor-pointer"
      >
        Download Resume
      </p>
      <a
        href="mailto:koushikrishi23@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 hover:underline font-semibold cursor-pointer"
      >
        koushikrishi23@gmail.com
      </a>
      <a
        href="tel:7773936878"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 hover:underline font-semibold cursor-pointer"
      >
        9550711886
      </a>
    </>
  );
};

export default DownloadResume;
