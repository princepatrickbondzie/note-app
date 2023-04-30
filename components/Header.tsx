import React from "react";
import SearchableNoteList from "./elements/search/SearchableNoteList";
import AddNoteModal from "./notelist/AddNoteModal";
import Dropdown from "./elements/Dropdown";

export default function Header() {
  const [notes, setNotes] = React.useState([]);

  async function fetchNotes() {
    // const res = await fetch("/api/notes", {
    //   method: "GET",
    // });
    // const data = res.json();
    // Promise.all([data]).then((value) => {
    //   console.log(value[0].notes);
    // });
  }

  React.useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <header className="h-[7rem] bg-white w-full flex shadow justify-center items-center px-4">
      <div className="flex flex-col justify-evenly items-center w-full h-full">
        <div className="flex justify-between items-center w-full border-b pb-1 h-[3rem]">
          <div>NOTE</div>
          <div>
            <Dropdown />
          </div>
        </div>
        <div className="flex justify-center items-center h-[3.5rem] w-full">
          <SearchableNoteList notes={notes} />
          <AddNoteModal />
        </div>
      </div>
    </header>
  );
}
