import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import DeleteModal from "./DeleteModal";
import moment from "moment";

export default function NoteCard(props: { note: any; key: any }) {
  const [bgColor, setBgColor] = React.useState("#FFFFFF"); // default background color
  const [favorite, setFavorite] = React.useState(false);
  const [payload] = React.useState(JSON.parse(props.note.payload));

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const handleDelete = (id?: string) => {
    // Code to delete note
    alert("Are you sure you want to delete this note?");
    console.log(id);
  };

  const handleEdit = (payload: any) => {
    // Code to edit note
  };

  React.useEffect(() => {
    if (JSON.parse(props.note.payload).colorLabel) {
      setBgColor(JSON.parse(props.note.payload).colorLabel);
    }
  }, [props]);

  return (
    <div
      key={props.key}
      className={`bg-[${bgColor}] flex flex-col justify-between rounded-lg border border-gray-400 mb-6 py-5 px-4`}
    >
      <div>
        <h4 className="text-gray-800 truncate capitalize overflow-hidden dark:text-gray-100 font-bold mb-3">
          {payload.title ? payload.title : ""}
        </h4>
        <p className="text-gray-800 line-clamp-3 dark:text-gray-100 text-sm ">
          {payload.content ? payload.content : ""}
        </p>
      </div>
      <div className="mt-4">
        <button onClick={toggleFavorite} className="mb-3 flex items-center">
          {favorite ? (
            <AiFillHeart className="text-red-500 cursor-pointer text-lg" />
          ) : (
            <AiOutlineHeart className="text-xl text-gray-500 cursor-pointer" />
          )}
        </button>

        <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
          <p className="text-sm">
            {" "}
            {payload.createdAt ? (
              <>{moment(payload.createdAt).format("MMM D, YYYY")}</>
            ) : (
              ""
            )}
          </p>
          <div className="flex">
            {/* <div className="w-6 h-6 mx-2 cursor-pointer rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center">
              <AiOutlineDelete onClick={() => handleDelete(props.note._id)} />
            </div> */}
            <DeleteModal id={props.note._id} />
            <div className="w-6 h-6 cursor-pointer rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-pencil"
                width={15}
                height={15}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
