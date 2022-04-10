import React from "react";
import { fullName } from "../../Data/data"
function Name() {
    return (
        <div>
            <h3>{fullName.nom}  {fullName.prenom}</h3>

        </div>

    );
}

export default Name;