import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  PlusCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  BlockPicker,
  AlphaPicker,
  Checkboard,
  CirclePicker,
  ChromePicker,
  CompactPicker,
  TwitterPicker,
  SliderPicker,
} from "react-color";

export default function AddNoteModal() {
  const [open, setOpen] = useState<boolean>(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    // tags: [],
    colorLabel: "",
    createdAt: Date.now(),
  });

  const cancelButtonRef = useRef(null);

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  function handleChangeComplete(color: any) {
    setNote({ ...note, colorLabel: color.hex });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(note),
    })
      .then((res) => {
        console.log(res);
        setOpen(false);
        alert("Note created successfully");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-evenly m-3 text-white bg-green-500 border-0 2xl:py-2 xl:py-2 lg:py-2 md:py-2 py-1 2xl:px-4 xl:px-4 lg:px-4 md:px-4 px-2 focus:outline-none hover:bg-green-600 rounded text-sm"
      >
        <PlusCircleIcon className="h-5 w-5" />
        <span className="2xl:block xl:block lg:block md:block hidden">
          Add Note
        </span>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <InformationCircleIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Add Note
                        </Dialog.Title>
                        <div className="mt-2 w-full">
                          <form action="" onSubmit={handleSubmit}>
                            <input
                              onChange={handleChange}
                              value={note.title}
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Title"
                              className="w-full bg-white my-2 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />

                            <textarea
                              onChange={handleChange}
                              value={note.content}
                              name="content"
                              id="content"
                              cols={50}
                              rows={5}
                              placeholder="Type note here ..."
                              className="w-full bg-white my-2 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></textarea>
                            <div className="relative mb-4 w-full">
                              <label
                                htmlFor="colorLabel"
                                className="leading-7 text-sm text-gray-600"
                              >
                                Color Label
                              </label>
                              <TwitterPicker
                                // triangle="hide"
                                className="w-full bg-white my-2 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                color={note.colorLabel}
                                onChangeComplete={handleChangeComplete}
                              />
                            </div>

                            <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                              <button
                                type="submit"
                                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                              >
                                Save
                              </button>
                              <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                onClick={() => setOpen(false)}
                                ref={cancelButtonRef}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
