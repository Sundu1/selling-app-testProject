import React, { useEffect, useState, Fragment } from "react";
import { UploadProductFileToAPI } from "../model/UploadProductFileToAPI";

const UploadProductFile = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [file, setFile] = useState(null);

  const handleModalToggle = () => {
    setModalToggle(!modalToggle);
  };

  const handleUploadFile = () => {
    UploadProductFileToAPI(file);
    window.location.reload(true);
  };

  return (
    <Fragment>
      <div className="flex justify-center">
        <button
          className="block text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none
                 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600
                  dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          type="button"
          data-modal-toggle="authentication-modal"
          onClick={handleModalToggle}
        >
          Upload
        </button>
      </div>

      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={
          modalToggle
            ? "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
            : "hidden"
        }
      >
        <div className="flex justify-center h-full w-full">
          <div
            className="flex justify-center h-full backdrop-blur-sm w-full"
            onClick={handleModalToggle}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="modal_upload_div rounded-xl">
              <div className="flex justify-center items-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
              </div>
              <button
                className="bg-teal-500 p-2.5 rounded-lg text-white font-bold text-lg"
                onClick={handleUploadFile}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UploadProductFile;
