import React from "react";
import NoteCard from "./NoteCard";

export default function AllNotes(props: any) {
  return (
    <div className="my-4 mx-3">
      <h3 className="text-2xl font-semibold ml-4 mb-2">All Notes</h3>
      <div className="grid border py-3 grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-4 justify-center items-center">
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
