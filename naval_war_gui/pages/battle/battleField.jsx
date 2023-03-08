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
    const [user, setUser] = useState('');

    const [mapUser1, setMapUser1] = useState('');
    const [mapUser2, setMapUser2] = useState('');

    const [response, setResponse] = useState('');

    const setMap1 = () => {
        let map = getPost();
        setMapUser1(map);
    }

    const setMap2 = () => {
        let map = getPost();
        setMapUser2(map);
    }

    const sendPost = () => {
        // TODO: FUNCTION TO SEND THE POST
    };

    const getPlayer = () => {
        let playerNow = "Player T_T I don't know who :-(....";
        return playerNow;
    }

    const sendPixel = async (event) => {
        event.preventDefault();
        const send = await fetch('fight/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'applicztion/json'
            },
            body: JSON.stringify({
                getPlayer,
                user
            })
        });
    }
    const getUser = () => {
        // to get if needed to change user of not
        if (response == false) {
            return false;
        }
    }

    const getPost = () => {
        fetch('')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(object => {
                console.log("This time u get as follow:");
                console.log(object);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    /*     const handleClick = (index) => {
            setSeleted([...selected, index]);
        } */

    const handleClick = (index) => {
        setSeleted(index);
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
            <h2 className="text-center">Time for {getPlayer()}</h2>
            <table
                className="col-sm-9"
                style={{ borderCollapse: 'collapse' }}
            >
                <tbody key={user}>{table}</tbody>
            </table>
        </div>
    );
}