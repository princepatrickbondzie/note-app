import { useState } from "react";

const Alert = ({ type, message }: { type: string; message: string }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div
          className={`${
            type === "success"
              ? "bg-green-100 border-green-400 text-green-700"
              : "bg-red-100 border-red-400 text-red-700"
          } border px-4 py-3 rounded relative`}
          role="alert"
        >
          <strong className="font-bold">
            {type === "success" ? "Success!" : "Error!"}
          </strong>
          <span className="block sm:inline">{message}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-gray-500 cursor-pointer"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => setShow(false)}
            >
              <title>Close</title>
              <path
                fillRule="evenodd"
                d="M14.348 5.652a.5.5 0 00-.707 0L10 9.293 6.357 5.65a.5.5 0 10-.708.708L9.293 10l-3.643 3.643a.5.5 0 10.708.708L10 10.707l3.643 3.643a.5.5 0 00.708-.708L10.707 10l3.643-3.643a.5.5 0 000-.707z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      )}
    </>
  );
};

export default Alert;
