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
 * <tr><td>2023/02/21  <td>3.0      <td>Ao XIE  <td>Code refactoring
 * <tr><td>2023/02/10  <td>2.1      <td>Ao XIE  <td>Add funcs about type of boats.
 * <tr><td>2023/02/09  <td>2.0      <td>Ao XIE  <td>First Edition of table of the boats.
 * <tr><td>2023/02/03  <td>1.0      <td>Ao XIE  <td>Creating the initial version
 * </table>
 ******************************************************************
 */

 // 1 -> 5
 // 4 3 3 2
import React from "react"

import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

class Boat{
    constructor(name, size, location, direction, situation){
        this.name = name;
        this.size = size;
        this.location = location; // Int for the location.
        this.direction = direction;
        this.situation = situation; // True -> Existe already;
    }
};

export default function BoatMap({getLocation, getType, getDirection}){

    var Carrier = new Boat("Carrier", 5, 0, null, false);
    var Battleship = new Boat("Battleship", 4, 0, null, false);
    var Destroyer = new Boat("Destroyer", 3, 0, null, false);
    var Submarine = new Boat("Submarine", 3, 0, null, false);
    var Patrol_Boat = new Boat("Patrol_Boat", 2, 0, null, false);

    var listBoat = new Array();
    listBoat[0] = Carrier; 
    listBoat[1] = Battleship;
    listBoat[2] = Destroyer;
    listBoat[3] = Submarine;
    listBoat[4] = Patrol_Boat;

    var typeBoat = -1; //If typeBoat is -1, then msg to choose boat.

    const [selected, setSeleted] = useState('');
    const [infoBoat, setInfoBoat] = useState('');

    // For the color of each lattice.
    const handleClick = (index) => {
        setSeleted([...selected, index]);
        // To store the position in the instance.
        if ( typeBoat == -1) { alert("Please choose the type of this boat!"); }
        else { listBoat[typeBoat].position = index; }
    }

    // To store the type in the instance.
    const handleType = (index) => {
        typeBoat = index; // typeBoat -> order in the list of boat.
    }

    // To store the direction in the instance.
    const handleDirection = (index) => {
        if (typeBoat == -1) { alert("Please choose the type of this boat!"); }
        else { listBoat[typeBoat].direction = index; }
    }

    // Use this to submit all the informations at once.
    const submitInfos = () => {
        console.log("GET IT");
        getType(type);
        getDirection(direction);
    }

    const table = [];
    for (let i=0; i<11; i++){
        const row = [];
        for (let j=0; j<11; j++){
            const index = 10 * i + j;
            if(i==0){
                row.push(
                    <td 
                    key={index}
                    style={{
                        width:'50',
                        height:'50px',
                        border: '1px solid #ccc',
                        textAlign: 'center'
                    }}>
                        {j}
                    </td>
                );
            }
            else if(j == 0){
                row.push(
                    <td 
                    key={index}
                    style={{
                        width:'50px',
                        height:'50px',
                        border: '1px solid #ccc',
                        textAlign: 'center'
                    }}>
                        {i}
                    </td>
                );
            }
            else{
                const isSelected = selected.includes(index);
                row.push(
                    <td
                        key={index}
                        onClick={ () => handleClick(index)}
                        style = {{
                            backgroundColor: isSelected? '#00bcd4' : 'transparent',
                            width:'50px',
                            height:'50px',
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
        <div className="row g-3" onSubmit={() => submitInfos()}>
            <table 
                className="col-sm-9"
                style={{ borderCollapse: 'collapse' }}
            >
                <tbody>{table}</tbody>
            </table>
            <div className="col-sm" >
                <select 
                    key="getType"
                    className="form-select" 
                    onChange={handleType}
                    aria-label="Disabled select example" 
                    style={{
                        backgroundColor:'transparent'
                    }}
                >
                    <option key="0" defaultValue>TYPE</option>
                    
                </select>
                <br/>
                <select 
                    key="getDirection"
                    className="form-select" 
                    onChange={handleDirection}
                    aria-label="Disabled select example" 
                    style={{backgroundColor:'transparent'}}
                >
                    <option defaultValue>DIRECTION</option>
                    <option key="Hor" value="Hor">Horizontal</option>
                    <option key="Ver" value="Ver">Vertical</option>
                </select>
                <br/>
                <button 
                    onClick={submitInfos}
                    type="submit" 
                    className="btn btn-primary" 
                    style={{textAlign:'center'}}
                >
                    SAVE
                </button>
            </div>
        </div>
      );
 };