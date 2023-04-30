import React from "react";
import FavoriteNoteList from "./FavoriteNoteList";
import AllNotes from "./AllNotes";

export default function NoteList(): JSX.Element {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    async function getNotes() {
      setLoading(true);
      await fetch("/api/notes")
        .then((res) => {
          const data = res.json();
          Promise.all([data]).then((value) => {
            setNotes(value[0].notes);
          });
          setLoading(false);
        })
        .catch((err) => {
          console.log("error::", err);
          setLoading(false);
        });
    }
    getNotes();
  }, []);

  return (
    <div>
      <FavoriteNoteList notes={notes} loading={loading} />
      <AllNotes notes={notes} loading={loading} />
    </div>
  );
}
