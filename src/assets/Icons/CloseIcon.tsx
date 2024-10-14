import React from "react";

interface ICloseIcon {
  onClose: () => void;
}

const CloseIcon: React.FC<ICloseIcon> = ({ onClose }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 absolute text-gray-400 top-5 right-5 hover:text-gray-600 hover:cursor-pointer"
        onClick={onClose}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default CloseIcon;
