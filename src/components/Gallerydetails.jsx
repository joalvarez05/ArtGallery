import React, { useEffect } from "react";

function Gallerydetails({ descripcion }) {
  // useEffect(() => {
  //   console.log("MONTAJE");
  // }, []);

  // useEffect(() => {
  //   return () => {
  //     console.log("DESMONTAJE");
  //   };
  //   //!ARRAY DE DEPENDENCIA
  // }, []);

  return (
    <>
      <div>
        <p>{descripcion}</p>
      </div>
    </>
  );
}

export default Gallerydetails;
