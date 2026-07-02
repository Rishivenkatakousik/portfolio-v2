"use client";
import React from "react";

const DownloadResume = () => {
  const downloadResume = () => {
    const pdfUrl = "/assets/resume/Rishi.pdf";
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
        href="mailto:lakshmivasavi0@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 hover:underline font-semibold cursor-pointer"
      >
        lakshmivasavi0@gmail.com
      </a>
      <a
        href="tel:7661907205"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 hover:underline font-semibold cursor-pointer"
      >
        7661907205
      </a>
    </>
  );
};

export default DownloadResume;
