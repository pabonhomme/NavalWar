/** @file boatMap.js
 * @brief       The component of add 5 boats foreach player.
 * @author      Ao XIE
 * @date        2023.02.10
 * @version     3.2.0
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

import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Swal from "sweetalert2";
//import TypeBoat from "./typeBoat";

class Boat {

    constructor(name, size, location, direction) {
        this.name = name;
        this.size = size;
        this.location = location; // Int for the location.
        this.direction = direction;
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

export default function BoatMap() {

    var Carrier = new Boat("Carrier", 5, 0, null);
    var Battleship = new Boat("Battleship", 4, 0, null);
    var Destroyer = new Boat("Destroyer", 3, 0, null);
    var Submarine = new Boat("Submarine", 3, 0, null);
    var Patrol_Boat = new Boat("Patrol_Boat", 2, 0, null);

    //var listBoat[Carrier, Battleship, Destroyer, Submarine, Patrol_Boat];
    var listBoat = new Array();
    listBoat[0] = Carrier;
    listBoat[1] = Battleship;
    listBoat[2] = Destroyer;
    listBoat[3] = Submarine;
    listBoat[4] = Patrol_Boat;

    const [selected, setSeleted] = useState('');
    const [dirBoat, setDirBoat] = useState(null);
    const [typeBoat, setTypeBoat] = useState(null);
    const [typeExiste, setTypeExiste] = useState('');
    const [size, setSize] = useState('');


    function splitDigits(num) {
        const tens = Math.floor(num / 10);
        const ones = num % 10;
        return [tens, ones];
    }


    // For the color of each lattice.
    const handleClick = (index) => {
        if (typeBoat == null) {
            Swal.fire({
                title: 'Whoops!',
                text: 'Please choose the type of this boat!',
                icon: 'error',
                confirmButtonText: 'Fine'
            });
        }
        else if (dirBoat == null) {
            Swal.fire({
                title: 'Whoops!',
                text: 'Please choose the direction of this boat!',
                icon: 'error',
                confirmButtonText: 'Fine'
            });
        }
        else if (typeExiste.includes(typeBoat)) {
            Swal.fire({
                title: 'Whoops!',
                text: 'You have this type of boat already!',
                icon: 'error',
                confirmButtonText: 'Fine'
            });
        }
        /*         else {
                    let [x, y] = splitDigits(index);
                    console.log("tessst");
                    fetch(`http://localhost:5199/api/Game/putBoat/${x}/${y}/${dirBoat}/${size}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then((response) => {
                            if (!response.ok) {
                                Swal.fire({
                                    title: 'Whoops!',
                                    text: 'U can not put your boat here!',
                                    icon: 'error',
                                    confirmButtonText: 'Fine'
                                });
                            }
                            else {
                                // TO change colour of the grid of a boat
                                var table = [];
                                if (dirBoat == "HORIZONTAL") {
                                    for (let i = 0; i < listBoat[typeBoat].size; i++) {
                                        table.push(index + i);
                                    }
                                }
                                else {
                                    for (let j = 0; j < listBoat[typeBoat].size; ++j) {
                                        table.push(index + j * 10);
                                    }
                                }
                                setTypeExiste(typeBoat);
                                setSeleted([...selected, table]); // Replace the single numbers to array of numbers.
                                // To informing the user that this boat is been placed
                                Swal.fire({
                                    position: 'top-end',
                                    title: 'Lovely!',
                                    text: 'You have one more boat now!',
                                    icon: 'success',
                                    showConfirmButton: false,
                                });
                            }
        
                        }
        
        
                        )
                        .catch((error) => {
                            alert(error.message);
                        }); */

        // TEST TEST ***************************************** TEST PART
        else {
            // TO change colour of the grid of a boat
            var table = [];
            if (dirBoat == "HORIZONTAL") {
                for (let i = 0; i < listBoat[typeBoat].size; i++) {
                    table.push(index + i);
                }
            }
            else {
                for (let j = 0; j < listBoat[typeBoat].size; ++j) {
                    table.push(index + j * 10);
                }
            }
            setTypeExiste([...typeExiste, typeBoat]);
            setSeleted([...selected, table]); // Replace the single numbers to array of numbers.
            // To informing the user that this boat is been placed
            Swal.fire({
                position: 'top-end',
                title: 'Lovely!',
                text: 'You have one more boat now!',
                icon: 'success',
                showConfirmButton: false,
            });
        }
        // TEST TEST ***************************************** TEST PART
    }


    // To store the type in the instance.
    const handleType = (index) => {
        if (typeExiste.includes(index.target.value)) {
            Swal.fire({
                title: 'Whoops!',
                text: 'You have this type of boat already!',
                icon: 'error',
                confirmButtonText: 'Fine'
            });
        }
        else {
            setTypeBoat(index.target.value);
            setSize(index.target.value);
        } // typeBoat -> order in the list of boat. 
    }

    // To store the direction in the instance.
    const handleDirection = (index) => {
        if (typeBoat == null) {
            Swal.fire({
                title: 'Whoops!',
                text: 'Please choose the type of this boat!',
                icon: 'error',
                confirmButtonText: 'Fine'
            });
        }
        else {
            setDirBoat(index.target.value);
        }
    }


    // To get the options of boat
    const optionBoat = [];
    for (let i = 0; i < 5; i++) {
        optionBoat.push(
            <option key={i} value={i}>
                {listBoat[i].name}
            </option>
        )
    }


    const setIsSelected = (index) => {
        for (let i = 0; i < selected.length; i++) {
            if (selected[i].indexOf(index) !== -1) {
                return true;
            }
        }
        return false;
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
                const isSelected = setIsSelected(index);
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
                    <option key="null" defaultValue>TYPE</option>
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
                    <option key="null" defaultValue>DIRECTION</option>
                    <option key="HORIZONTAL" value="HORIZONTAL">Horizontal</option>
                    <option key="VERTICAL" value="VERTICAL">Vertical</option>
                </select>
            </div>
        </div>
    );
};