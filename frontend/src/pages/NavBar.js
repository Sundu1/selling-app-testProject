import React, { useEffect, useState, Fragment } from "react";
import { CiLogin } from "react-icons/ci";
import { SERVER_API_URL } from "../config";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // const googleAuthenticate = (state, code) => async (dispatch) => {
  //   if (state && code && !localStorage.getItem("access")) {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     };

  //     const details = {
  //       state: state,
  //       code: code,
  //     };

  //     const formBody = Object.keys(details)
  //       .map(
  //         (key) =>
  //           encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
  //       )
  //       .join("&");

  //     try {
  //       const res = await axios.post(
  //         `${SERVER_API_URL}/auth/o/google-oauth2/?${formBody}`,
  //         config
  //       );

  //       dispatch({
  //         payload: res.data,
  //       });

  //       dispatch(load_user());
  //     } catch (err) {
  //       dispatch({});
  //     }
  //   }
  // };

  return (
    <Fragment>
      <div className="fixed flex justify-end  bg-gray-800 w-[80em] h-12 rounded-lg top-3 shadow-2xl">
        <button
          className="text-green-500 hover:bg-green-800 p-3 rounded-3xl text-lg font-bold"
          onClick={handleToggle}
        >
          Login
        </button>
      </div>

      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={
          toggle
            ? "fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
            : "hidden"
        }
      >
        <div className="flex justify-center h-full w-full">
          <div
            className="flex justify-center h-full backdrop-blur-sm w-full"
            onClick={handleToggle}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="modal_login">
              <button className="bg-teal-500 p-2.5 rounded-lg font-bold text-lg text-white hover:bg-teal-800 hover:text-gray-100">
                sign in with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
