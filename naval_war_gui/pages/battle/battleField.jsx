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

    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [visited, setVisited] = useState([]);
    const [haveBoat, setHaveBoat] = useState([]);
    const [nbRound, setNbRound] = useState(0);


    useEffect(() => {
        fetch(`http://localhost:5199/api/Game/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        })
            .then((gameData) => {
                setGame(gameData);
            })
    }, [])

    useEffect(() => {
        if (game != null) {
            setLoading(false);
            refreshData();
            if (nbRound != 0) {
                fetch('http://localhost:5199/api/Game/isGameFinished', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => response.json())
                    .then((isFinished) => {
                        if (isFinished === true) {
                            someoneWin();
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            }
        }
        console.log(game)
    }, [game])

    function refreshData() {
        const tableVisited = [];
        const tableBoat = [];

        if (game.currentPlayer === game.p2.id) {
            // for VISITED
            const visitedItems = game.p1.board.grid.filter((gridItem) => gridItem.isVisited);
            const visitedItemsPositions = visitedItems.map((visitedItem) => visitedItem.positions);
            visitedItemsPositions.map((position) => {
                tableVisited.push((position.item1 + 1) * 10 + (position.item2 + 1));
            });

            // for SHIP
            const shipItems = game.p1.board.grid.filter((gridItem) => gridItem.ship);
            const shipItemsPositions = shipItems.map((shipItem) => shipItem.positions);
            shipItemsPositions.map((position) => {
                tableBoat.push((position.item1 + 1) * 10 + (position.item2 + 1));
            });
        }
        if (game.currentPlayer === game.p1.id) {
            // for VISITED
            const visitedItems = game.p2.board.grid.filter((gridItem) => gridItem.isVisited);
            const visitedItemsPositions = visitedItems.map((visitedItem) => visitedItem.positions);
            visitedItemsPositions.map((position) => {
                tableVisited.push((position.item1 + 1) * 10 + (position.item2 + 1));
            });

            // for SHIP
            const shipItems = game.p2.board.grid.filter((gridItem) => gridItem.ship);
            const shipItemsPositions = shipItems.map((shipItem) => shipItem.positions);
            shipItemsPositions.map((position) => {
                tableBoat.push((position.item1 + 1) * 10 + (position.item2 + 1));
            });
        }
        setVisited(tableVisited);
        setHaveBoat(tableBoat);
    }

    const handleClick = (index, e) => {
        e.preventDefault();
        var [x, y] = splitDigits(index);
        fetch(`http://localhost:5199/api/Game/shoot/${x - 1}/${y - 1}`, {
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
                    throw new Error("Error 404");
                }
                else {
                    return response.json();
                }
            })
            .then((response) => {
                //setVisited([...visited, index]);
                //refreshMap(response);
                // console.log("VISITED ", visited);
                setGame(response);
                setNbRound(1);

                setTimeout(() => {
                    changerUser();
                }, 1000);

                // To get the turn 
            }).catch((error) => {
                console.log(error.message);
            });
    }

    function changerUser() {
        fetch('http://localhost:5199/api/Game/changeTurn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json();

        })
            .then((response) => {
                setGame(response);
                // To get the turn 
            }).catch((error) => {
                console.log(error.message);
            });
    };


    function splitDigits(num) {
        const y = num % 10;
        const x = (num - y) / 10;
        return [x, y]
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

    /* const setIsVisited = (index) => {
        for (let i = 0; i < visited.length; i++) {
            if (visited[i].includes(index) != -1) {
                return true;
            }
            return visited[i].includes(index);
        }
    } */
    const setIsVisited = (index) => {
        return visited.includes(index);
    }
    /* const setIsBoat = (index) => {
        for (let i = 0; i < haveBoat.length; i++) {
            if (haveBoat[i].indexOf(index) != -1) {
                return true;
            }
        }
        return false;
    } */
    const setIsBoat = (index) => {
        return haveBoat.includes(index);
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
                        onClick={(e) => handleClick(index, e)}
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

    if (loading) {
        return (
            <>
                <div className={styles.mainmanu}>
                    <h1 className="text-left">Naval War Gaming</h1>

                </div>
            </>
        )
    }

    return (
        <div className={styles.mainmanu}>
            <h1 className="text-left">Naval War Gaming</h1>
            <h2 className="text-center">It's your turn, {game.currentPlayer == 1 ? game.p1.pseudo : game.p2.pseudo}</h2>
            <table
                className="col-sm-9"
                key={game.currentPlayer}
                style={{ borderCollapse: 'collapse' }}
            >
                <tbody key={game.currentPlayer == 1 ? game.p1 : game.p2}>{table}</tbody>
            </table>
        </div>
    );
}