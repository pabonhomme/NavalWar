/** @file battleField.jsx
 * @brief       The page of battle.
 * @author      Ao XIE
 * @date        2023.03.03
 * @version     1.0.0
 * @copyright   Copyright (c) 2023 XIE Ao. All rights reserved.
 *****************************************************************
 * @attention
 * Development environment: macOS Ventura 13.2
 * @par Modification log:
 * <table>
 * <tr><th>Date        <th>Version  <th>Author    <th>Description 
 * <tr><td>2023/03/07  <td>1.1      <td>Ao XIE  <td>Add fn of GET and POST
 * <tr><td>2023/02/03  <td>1.0      <td>Ao XIE  <td>Creating the initial version
 * </table>
 ******************************************************************
 */


import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import styles from '../../styles/Home.module.css';

export default function Battle() {

    // true -> player 1
    // false -> player 2
    const [selected, setSeleted] = useState('');
    const [haveBoat, setHaveBoat] = useState('');
    const [user, setUser] = useState(true);


    function splitDigits(num) {
        const tens = Math.floor(num / 10);
        const ones = num % 10;
        return [tens, ones];
    }

    const handleClick = (index) => {
        var [x, y] = splitDigits(index);
        fetch('http://localhost:5199/api/Game/shot/${x}/${y}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if(!response.ok) {
                alert("Something wrong");
            }
            else{
                setSeleted(index);
                // to set the situation of boat
                for (let i=0; i<10; i++){
                    for (let j=0; j<10 ; j++){
                        // Set those in differet color
                        /************************* IMPORTANT */
                    }
                }
            }
        })
    }

    const someoneWin = () => {
        Swal.fire({
            title: 'Congratulations! YOU ARE THE WINNER!',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
        })
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
        <div className={styles.mainmanu}>
            <h1 className="text-center">Gaming</h1>
            <h2 className="text-center">Time for {}</h2>
            <table
                className="col-sm-9"
                key={user}
                style={{ borderCollapse: 'collapse' }}
            >
                <tbody key={user}>{table}</tbody>
            </table>
        </div>
    );
}