import React from "react";

export default function SearchInput(props: any) {
  const setText = (text: string) => {
    props.onChange(text);
  };

  return (
    <div className="flex justify-start items-center relative 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[70%] w-[90%]">
      <input
        className="text-sm leading-none text-left text-gray-600 2xl:py-3 xl:py-3 lg:py-3 md:py-3 px-4 py-1.5 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 w-full border rounded border-gray-300  outline-none transition-colors duration-200 ease-in-out"
        type="text"
        id="text"
        name="text"
        placeholder="Search notes..."
        value={props.value ? props.value : ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <svg
        className="absolute right-3 z-10 cursor-pointer"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
          stroke="#4B5563"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 21L15 15"
          stroke="#4B5563"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
