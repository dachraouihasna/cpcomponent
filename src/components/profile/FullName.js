import React from "react";


function Name({ fullName }) {
    return (
        <div>
            {fullName.nom} {fullName.prenom}
        </div>

    );
}

export default Name;