import React from "react";
import NoteCard from "./NoteCard";

export default function FavoriteNoteList(props: any) {
  return (
    <div className="my-4 mx-3">
      <h3 className="text-2xl font-semibold ml-4 mb-2">Favorites</h3>
      <div className="py-3 flex overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide">
        {props.loading ? (
          <div className="w-full flex justify-center items-center">
            <p>LOADING...</p>
          </div>
        ) : (
          <>
            {props.notes ? (
              <>
                {props.notes.map((note: any, idx: any) => (
                  <NoteCard note={note} key={idx} />
                ))}
              </>
            ) : (
              <div className="w-full flex justify-center items-center">
                <p>Something wrong happened!!</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
