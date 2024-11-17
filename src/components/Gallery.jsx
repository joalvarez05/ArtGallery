import React, { useEffect, useState } from "react";
import { sculptureList } from "../data/data.js";
import Gallerydetails from "./Gallerydetails.jsx";

function Gallery() {
  //! HOOKS - useState y useEffect
  //? useState
  const [index, setIndex] = useState(0);

  const [show, setShow] = useState(false);

  let escultura = sculptureList[index];

  return (
    <>
      <h2>Gallery</h2>
      <div>
        <button
          onClick={() => setIndex(index - 1)}
          //   disabled={index === 0}
          disabled={index === 0 ? true : false}
        >
          Back
        </button>

        <button
          onClick={() => setIndex(index + 1)}
          disabled={index + 1 === sculptureList.length}
        >
          Next
        </button>
      </div>
      <h2>
        {escultura.name} by {escultura.artist}
      </h2>
      <h2>
        {index + 1} de {sculptureList.length}
      </h2>
      <img src={escultura.url} alt={escultura.alt} />
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {/* ---------------- props ------------------ */}
      <div>
        {show && <Gallerydetails descripcion={escultura.description} />}
      </div>
    </>
  );
}

export default Gallery;
