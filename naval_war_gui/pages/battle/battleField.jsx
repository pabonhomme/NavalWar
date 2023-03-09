/** @file battleField.jsx
 * @brief       The page of battle.
 * @author      Ao XIE
 * @date        2023.03.03
 * @version     2.1
 * @copyright   Copyright (c) 2023 XIE Ao. All rights reserved.
 *****************************************************************
 * @attention
 * Development environment: macOS Ventura 13.2
 * @par Modification log:
 * <table>
 * <tr><th>Date        <th>Version  <th>Author    <th>Description 
 * <tr><td>2023/03/09  <td>2.0      <td>Ao XIE  <td>Update POST to backend
 * <tr><td>2023/03/07  <td>1.1      <td>Ao XIE  <td>Add fn of GET and POST
 * <tr><td>2023/02/03  <td>1.0      <td>Ao XIE  <td>Creating the initial version
 * </table>
 ******************************************************************
 */


import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import Swal from "sweetalert2";

export default function Battle() {

    const storedUser1 = sessionStorage.getItem('user1');
    const storedUser2 = sessionStorage.getItem('user2');

    const [visited, setVisited] = useState('');
    const [haveBoat, setHaveBoat] = useState('');
    const [user, setUser] = useState('');

    // Set the first player
    useEffect(() => {
        if (storedUser1 != null && storedUser2 != null) {
            setUser(storedUser1);
        }
    }, [])


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
                if (!response.ok) {
                    Swal.fire({
                        title: 'Whoops!',
                        text: 'You can not choose there!!',
                        icon: 'error',
                        confirmButtonText: 'Fine'
                    });
                }
                else {
                    tableVisited = [];
                    tableBoat = [];

                    if (user == storedUser2) {
                        // for VISITED
                        const visitedItems = response.p1.board.grid.filter((gridItem) => gridItem.isVisited);
                        const visitedItemsPositions = visitedItems.map((visitedItem) => visitedItem.positions);
                        visitedItemsPositions.map((position) => {
                            tableVisited.push(position.item1 * 10 + position.item2);
                        });
                        // for SHIP
                        const shipItems = response.p1.board.grid.filter((gridItem) => gridItem.ship);
                        const shipItemsPositions = shipItems.map((shipItem) => shipItem.positions);
                        shipItemsPositions.map((position) => {
                            tableBoat.push(position.item1 * 10 + position.item2);
                        });
                    }
                    if (user == storedUser1) {
                        // for VISITED
                        const visitedItems = response.p2.board.grid.filter((gridItem) => gridItem.isVisited);
                        const visitedItemsPositions = visitedItems.map((visitedItem) => visitedItem.positions);
                        visitedItemsPositions.map((position) => {
                            tableVisited.push(position.item1 * 10 + position.item2);
                        });
                        // for SHIP
                        const shipItems = response.p2.board.grid.filter((gridItem) => gridItem.ship);
                        const shipItemsPositions = shipItems.map((shipItem) => shipItem.positions);
                        shipItemsPositions.map((position) => {
                            tableBoat.push(position.item1 * 10 + position.item2);
                        });
                    }
                    setVisited(tableVisited);
                    setHaveBoat(tableBoat);

                    // To get the turn 
                    if (!tableVisited.indexOf(index) || !tableBoat.indexOf(index)) {
                        setTimeout(() => {
                            changerUser();
                        }, 2000);
                    }
                    else {
                        fetch('http://localhost:5199/api/Game/isGameFinished', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        .then((response) => {
                            if (response==true) {
                                someoneWin();
                            }
                        })
                    }
                }
            })
    }

    const changerUser = () => {
        if (user == storedUser1) { setUser(storedUser2); }
        if (user == storedUser2) { setUser(storedUser1); }
    };

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

    const setIsVisited = (index) => {
        for (let i = 0; i < visited.length; i++) {
            if (isVisited[i].indexOf(index) != -1) {
                return true;
            }
        }
        return false;
    }
    const setIsBoat = (index) => {
        for (let i = 0; i < haveBoat.length; i++) {
            if (haveBoat[i].indexOf(index) != -1) {
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
                const isVisited = setIsVisited(index);
                const isBoat = setIsBoat(index);
                row.push(
                    <td
                        key={index}
                        onClick={() => handleClick(index)}
                        style={{
                            // If haven't been visited, always transparent
                            // Then, do have boat -> RED
                            //       do not have -> BLUE
                            backgroundColor: isVisited ? (isBoat ? '#DA291C' : '#00bcd4') : 'transparent',
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
            <h1 className="text-left">Naval War Gaming</h1>
            <h2 className="text-center">It's your turn, {user}</h2>
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