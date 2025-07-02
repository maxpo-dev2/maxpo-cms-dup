import React from "react";

const CustomButton = ({
  onClick,
  name,
  icon=<> </>,
}: {
  onClick: () => void;
  name: string;
  icon?: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
    >
      {icon}
      {name}
    </button>
  );
};

export default CustomButton;
