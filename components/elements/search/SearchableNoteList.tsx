import React from "react";
import SearchInput from "./SearchInput";
import NoteList from "../../notelist/NoteList";

export default function SearchableNoteList(props: any) {
  const [searchText, setSearchText] = React.useState("");
  const [searching, setSearching] = React.useState(false);
  //   const foundNotes = filterNotes(props.notes, searchText);
  // console.log(searchText);

  return (
    <>
      <SearchInput value={searchText} onChange={setSearchText} />
      {/* <NoteList
        notes={foundNotes}
        emptyHeading={`No matches for “${searchText}”`}
      /> */}
    </>
  );
}

// async function filterNotes(notes: any, searchText: string) {
//   return await notes.filter((note: any) =>
//     note.title.toLowerCase().includes(searchText.toLowerCase())
//   );
// }
