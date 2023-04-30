import React, { useState } from "react";
import Pagination from "./Pagination";
import NoteCard from "./NoteCard";

export default function CardListx() {
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
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = notes.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  //   console.log(currentCards);

  return (
    <div className="container mx-auto py-4 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32">
      <h1 className="text-3xl font-bold mb-4">My Notes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentCards.length === 0 ? (
          <div className="flex justify-center items-center">
            <h1>You don't have any note....</h1>
          </div>
        ) : (
          <>
            {currentCards.map((note: any) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        cardsPerPage={cardsPerPage}
        totalCards={notes.length}
        paginate={paginate}
        setCardsPerPage={setCardsPerPage}
      />
    </div>
  );
}
