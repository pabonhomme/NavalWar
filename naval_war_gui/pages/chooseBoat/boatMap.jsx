/** @file boatMap.js
 * @brief       The component of add 5 boats foreach player.
 * @author      Ao XIE
 * @date        2023.02.10
 * @version     2.1.2
 * @copyright   Copyright (c) 2023 XIE Ao. All rights reserved.
 *****************************************************************
 * @attention
 * Development environment: macOS Ventura 13.2
 * @par Modification log:
 * <table>
 * <tr><th>Date        <th>Version  <th>Author    <th>Description 
 * <tr><td>2023/03/03  <td>3.2      <td>Ao XIE  <td>Finished but not really
 * <tr><td>2023/02/21  <td>3.1      <td>Ao XIE  <td>Set the information of boat to a state.
 * <tr><td>2023/02/21  <td>3.0      <td>Ao XIE  <td>Code refactoring
 * <tr><td>2023/02/10  <td>2.1      <td>Ao XIE  <td>Add funcs about type of boats.
 * <tr><td>2023/02/09  <td>2.0      <td>Ao XIE  <td>First Edition of table of the boats.
 * <tr><td>2023/02/03  <td>1.0      <td>Ao XIE  <td>Creating the initial version
 * </table>
 ******************************************************************
 */

// 1 -> 5
// 4 3 3 2
import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

//import TypeBoat from "./typeBoat";

class Boat {

    constructor(name, size, location, direction, situation) {
        this.name = name;
        this.size = size;
        this.location = location; // Int for the location.
        this.direction = direction;
        this.situation = situation; // True -> Existe already;
    }

    // function to get infos for a boat.
    getBoat() {
        let infomationForBoat =
            this.name + ";" + this.size + ";" +
            this.location + ";" + this.direction + ";" +
            this.situation;
        return infomationForBoat;

    }
};

export default function BoatMap({ setBoat }) {

    var Carrier = new Boat("Carrier", 5, 0, null, false);
    var Battleship = new Boat("Battleship", 4, 0, null, false);
    var Destroyer = new Boat("Destroyer", 3, 0, null, false);
    var Submarine = new Boat("Submarine", 3, 0, null, false);
    var Patrol_Boat = new Boat("Patrol_Boat", 2, 0, null, false);

    //var listBoat[Carrier, Battleship, Destroyer, Submarine, Patrol_Boat];
    var listBoat = new Array();
    listBoat[0] = Carrier;
    listBoat[1] = Battleship;
    listBoat[2] = Destroyer;
    listBoat[3] = Submarine;
    listBoat[4] = Patrol_Boat;

    const [selected, setSeleted] = useState('');
    const [infoBoat, setInfoBoat] = useState('');
    const [dirBoat, setDirBoat] = useState(null);
    const [typeBoat, setTypeBoat] = useState(null);
    const [localBoat, setLocalBoat] = useState(null);

    // For the color of each lattice.
    const handleClick = (index) => {

        // To store the location in the instance.
        if (typeBoat == null) { alert("Please choose the type of this boat!"); }
        else if (dirBoat == null) { alert("Please choose the direction of this boat!"); }
        else {
            /* if (dirBoat == "Hor") {
                var table = [];

                for (let i=0; i<listBoat[typeBoat].size; i++) {
                    table.push(index+i);
                }
                setSeleted([...selected, table]);
            }
            else {
                for (let j=0; j<listBoat[typeBoat].size; ++j) {
                    setSeleted([...selected, index+(10*j)]);
                }
            }
            setLocalBoat(index); */
            setSeleted([...selected, index]);
            setLocalBoat(index);
        }
    }

    // To store the type in the instance.
    const handleType = (index) => {
        setTypeBoat(index.target.value); // typeBoat -> order in the list of boat.
    }

    // To store the direction in the instance.
    const handleDirection = (index) => {
        if (typeBoat == null) { alert("Please choose the type of this boat!"); }
        else {
            setDirBoat(index.target.value);
        }
    }

    // Use this to submit all the informations at once.
    const submitInfos = () => {
        if (typeBoat == null || dirBoat == null || localBoat == null) {
            alert("ATTENTION TO YOUR BOAT!!!!")
        }
        else {
            listBoat[typeBoat].direction = dirBoat;
            listBoat[typeBoat].location = localBoat;
            listBoat[typeBoat].situation = true;
            setInfoBoat([...infoBoat, listBoat[typeBoat]]);
            setBoat(listBoat[typeBoat]);
            console.log("GET IT");

            console.log(JSON.stringify(Carrier));
            //this.forceUpdate();
            //window.location.reload();
        }
    }

    const optionBoat = [];
    for (let i = 0; i < 5; i++) {
        let x = infoBoat.includes(listBoat[i].name);
        if (x = true/* listBoat[i].situation == false */) {
            optionBoat.push(
                <option key={i} value={i}>
                    {listBoat[i].name}
                </option>
            )
        }
    }


    const table = [];
    for (let i = 0; i < 11; i++) {
        const row = [];
        for (let j = 0; j < 11; j++) {
            const index = 10 * i + j;
            if (i == 0) {
                row.push(
                    <td
                        key={index}
                        style={{
                            width: '50',
                            height: '50px',
                            border: '1px solid #ccc',
                            textAlign: 'center'
                        }}>
                        {j}
                    </td>
                );
            }
            else if (j == 0) {
                row.push(
                    <td
                        key={index}
                        style={{
                            width: '50px',
                            height: '50px',
                            border: '1px solid #ccc',
                            textAlign: 'center'
                        }}>
                        {i}
                    </td>
                );
            }
            else {
                const isSelected = selected.includes(index);
                row.push(
                    <td
                        key={index}
                        onClick={() => handleClick(index)}
                        style={{
                            backgroundColor: isSelected ? '#00bcd4' : 'transparent',
                            width: '50px',
                            height: '50px',
                            textAlign: 'center',
                            border: '1px solid #ccc'
                        }}
                    >
                    </td>
                );
            }
        }
        table.push(<tr key={i}>{row}</tr>)
    }


    return (
        <div className="row g-3">
            <table
                className="col-sm-9"
                style={{ borderCollapse: 'collapse' }}
            >
                <tbody>{table}</tbody>
            </table>
            <div className="col-sm" >
                <br />
                <select
                    key="getType"
                    className="form-select"
                    onChange={handleType}
                    aria-label="Disabled select example"
                    style={{
                        backgroundColor: 'transparent'
                    }}
                >
                    <option key="0" defaultValue>TYPE</option>
                    {optionBoat}
                </select>
                <br />
                <select
                    key="getDirection"
                    className="form-select"
                    onChange={handleDirection}
                    aria-label="Disabled select example"
                    style={{ backgroundColor: 'transparent' }}
                >
                    <option defaultValue>DIRECTION</option>
                    <option key="Hor" value="Hor">Horizontal</option>
                    <option key="Ver" value="Ver">Vertical</option>
                </select>
                <br />
                <button
                    onClick={submitInfos}
                    type="submit"
                    className="btn btn-primary"
                    style={{ textAlign: 'center' }}
                >
                    SAVE
                </button>
            </div>
        </div>
    );
};