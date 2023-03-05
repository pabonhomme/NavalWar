import React from "react";
import { useState } from "react";

export default function TypeBoat (keyType, listBoat) {

    const optionBoat = [];
    for (let i = 0; i < 5; i++) {
        let x = infoBoat.includes(listBoat[i].name);
        if (x = true/* listBoat[i].situation == false */) {
            optionBoat.push(
                <option key={i} value={i}>
                    {listBoat[i].name}
                </option>
            )
            keyType = i;
        }
    }
    return (
        {optionBoat}
    );
}