import React, { ReactElement } from "react";

interface Props {
  outline?: boolean;
  text?: any;
  onClick?: any;
  className?: string;
  loading?: boolean;
}

function BlueButton({
  outline,
  text,
  onClick,
  className,
  loading,
}: Props): ReactElement {
  return (
    <button
      type="button"
      onClick={loading ? () => console.log("loading...") : onClick}
      className={`${className} ${
        outline
          ? "text-blue-700 bg-white border hover:bg-blue-700 hover:text-white"
          : "bg-blue-700 text-white hover:bg-blue-800 "
      } rounded outline-none border-blue-700 `}
    >
      {loading ? (
        <div className="flex flex-row items-center justify-center font-semibold p-2 capitalize">
          <div
            className={`animate-spin rounded-full h-5 w-5 mr-2 border-t-2  border-b-2 ${
              outline ? "border-blue-700 hover:border-white" : "border-white"
            }`}
          ></div>
          <p className="font-semibold capitalize">Loading...</p>
        </div>
      ) : (
        <div className="font-semibold p-2 capitalize text-sm text-center mx-auto flex flex-col items-center">
          {" "}
          {text}
        </div>
      )}
    </button>
  );
}

export default BlueButton;
