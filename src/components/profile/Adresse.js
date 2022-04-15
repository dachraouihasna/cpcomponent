import React from "react";

function Adresse({ fullAdresse }) {
    console.log(fullAdresse)
    return (


        <div>
            {fullAdresse.num} {fullAdresse.rue} {fullAdresse.cite} {fullAdresse.ville}
        </div>

    );
}

export default Adresse;