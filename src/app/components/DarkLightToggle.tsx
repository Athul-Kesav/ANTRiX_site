"use client";

import "./DL_Toggle.css";

export default function () {

    function changeTheme() {
        //Change theme
        console.log("Theme Changed");
    }
  return (
    <>
      <label className="switch">
        <input type="checkbox" onClick={changeTheme}/>
        <span className="slider"></span>
      </label>
    </>
  );
}
