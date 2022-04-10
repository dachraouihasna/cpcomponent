import React from "react";
import { fullAdresse } from "../../Data/data"
function Adresse() {
    return (

        <div>
            <h3>{fullAdresse.num} {fullAdresse.rue} {fullAdresse.cité} {fullAdresse.ville}</h3>

        </div>
    );
}

export default Adresse;