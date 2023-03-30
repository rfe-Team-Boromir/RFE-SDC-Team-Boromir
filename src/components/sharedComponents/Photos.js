import React from "react";
import PhotoModal from "./PhotoModal.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setClickedPhoto } from "../../reducers/modalSlice";
import "../../style.css";

const Photos = ({ photos, width = 150, height = 150, custom = false }) => {
  const dispatch = useDispatch();

  return (
    <div className={"photos " + (custom ? "" : "px-5 py-3")}>
      {photos.map((photoUrl, index) => {
        return (
          <img
            className={
              "cursor-pointer" +
              (custom
                ? " border-secondary hover:border-base-200 transition-colors"
                : "")
            }
            key={photoUrl + index}
            onClick={(e) =>
              dispatch(setClickedPhoto({ clickedPhoto: e.target.src }))
            }
            src={photoUrl}
            width={width}
            height={height}
            alt=""
          />
        );
      })}
    </div>
  );
};

export default Photos;
