/** @file boatMap.js
 * @brief       The component of add 5 boats foreach player.
 * @author      Ao XIE
 * @date        2023.02.10
 * @version     2.1.1
 * @copyright   Copyright (c) 2023 XIE Ao. All rights reserved.
 *****************************************************************
 * @attention
 * Development environment: macOS Ventura 13.2
 * @par Modification log:
 * <table>
 * <tr><th>Date        <th>Version  <th>Author    <th>Description
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

 export default function BoatMap(){
    const [selected, setSeleted] = useState('');
    const [type, setType] = useState('');
    const [direction, setDirection] = useState('');

    
    

    const handleClick = (index) => {
        setSeleted([...selected, index]);
    }

    const handleType = (index) => {
        setType([...type, index.target.value]);
    }

    const handleDirection = (index) => {
        setDirection([...direction, index.target.value]);
    }

    const submitInfos = (locationParam, typeParam, directionParam) => {
        /* setSeleted([...selected, locationParam]);
        setType([...type, typeParam.target.value]);
        setDirection([...direction, directionParam.target.value]); */
        console.log("GET IT");
        // Use this to submit all the informations at one time.
    }

    /*     <option value="1">Carrier(5)</option>
                    <option value="2">Battleship(4)</option>
                    <option value="3">Destroyer(3)</option>
                    <option value="4">Submarine(3)</option>
                    <option value="5">Patrol Boat(2)</option> */
    // To get the numbers of each kind of boat.
    const typeBoat = [];
    var numBoats = [0, 0, 0, 0, 0];
    for (let i=0; i<5; i++){
        switch (i){
            case 0:
                if(numBoats[i]==0){
                    typeBoat.push(
                        <option value="1">Carrier(5)</option>
                    );
                }
                break;
            case 1:
                if(numBoats[i]==0){
                    typeBoat.push(
                        <option value="2">Battleship(4)</option>
                    );
                }
                break;
            case 2:
                if(numBoats[i]==0){
                    typeBoat.push(
                        <option value="3">Destroyer(3)</option>
                    );
                }
                break;
            case 3:
                if(numBoats[i]==0){
                    typeBoat.push(
                        <option value="4">Submarine(3)</option>
                    );
                }
                break;
            case 4:
                if(numBoats[i]==0){
                    typeBoat.push(
                        <option value="5">Patrol Boat(2)</option>
                    );
                }
                break;

        }
        /* 
        if(numBoats[i] == 0){
            typeBoat.push(
                <option value={i}>Carrier{i}</option>
            );
        } */
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
                        onClick={() => handleClick(index)}
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
                    <option selected disabled>TYPE</option>
                    {typeBoat}
                </select>
                <br/>
                <select 
                    key="getDirection"
                    className="form-select" 
                    onChange={handleDirection}
                    aria-label="Disabled select example" 
                    style={{backgroundColor:'transparent'}}
                >
                    <option selected disabled>DIRECTION</option>
                    <option value="Hor">Horizontal</option>
                    <option value="Ver">Vertical</option>
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
                <div>
                    {typeBoat}
                </div>
            </div>
        </div>
      );
 };