import React from "react";

interface Props {
  outline?: boolean;
  text?: any;
  onClick?: any;
  className?: string;
  loading?: boolean;
}

const PrimaryButton = ({
  outline,
  text,
  onClick,
  className,
  loading,
}: Props) => {
  return (
    <button
      onClick={onClick ? onClick : () => console.log("no action available")}
      className={`${className} ${
        outline
          ? "text-primary-original bg-white border hover:bg-primary-original hover:text-white"
          : "bg-primary-original text-white hover:bg-primary-light "
      } rounded outline-none border-primary-original `}
    >
      {loading ? (
        <div className="text-sm font-semibold md:p-3 p-2 capitalize">
          Loading ...{" "}
        </div>
      ) : (
        <div className="text-sm font-semibold md:p-3 p-2 capitalize">
          {text}
        </div>
      )}
    </button>
  );
};

export default PrimaryButton;
