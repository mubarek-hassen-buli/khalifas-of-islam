import React from "react";

interface DownloadButtonProps {
  pdfPath: string;
  label?: string;
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  pdfPath,
  label = "Download PDF",
  className = "",
}) => {
  if (!pdfPath) return null;

  return (
    <a
      href={pdfPath}
      download
      className={`inline-flex items-center px-4 py-2 bg-gold-light text-islamic-black font-medium rounded-md hover:bg-gold-dark transition-colors duration-200 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      {label}
    </a>
  );
};

export default DownloadButton;
