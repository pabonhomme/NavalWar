/** @file chosseBoat.js
 * @brief       The page of add boats
 * @author      Ao XIE
 * @date        2023.02.02
 * @version     1.0.1
 * @copyright   Copyright (c) 2023 XIE Ao. All rights reserved.
 *****************************************************************
 * @attention
 * Development environment: macOS Ventura 13.2
 * @par Modification log:
 * <table>
 * <tr><th>Date        <th>Version  <th>Author    <th>Description
 * <tr><td>2023/02/03  <td>1.0      <td>Ao XIE  <td>Creating the initial version
 * </table>
 ******************************************************************
 */


import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from '../../styles/Home.module.css';

import BoatMap from "./boatMap";


export default function ChooseBoat() {
    const router = useRouter();
    // For the times of user.
    // 0 -> 4 user1
    // 5 -> 9 user2
    // 10 -> done
    const [user, setUser] = useState(0);
    const [boat, setBoat] = useState('');

    const handleBoat = (value) => {
        setBoat(value);
        let i = user;
        i += 1;
        setUser(i);

        /* const json = JSON.stringify(boat);
            fetch('/api/person', {
                method: 'POST',
                body: json,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error sending person instance: ', error);
                }); */
    }

    const getUser = () => {
        let userNow = "user1";
        if (4 < user && user <= 9) {
            userNow = "user2";
        }
        if (user == 10) {
            userNow = "Done";
            // After the two users finished their boat, 
            // turn to page of game.
            router.push('../battle/battleField');
        }
        return userNow;
    }

    const ShowUser = () => {
        let userNow = getUser();
        return (
            <h1 className="text-center">
                {userNow}
            </h1>
        );
    }

    var userNow = getUser();
    return (
        <div className={styles.mainmanu}>
            <ShowUser />
            <br />
            <BoatMap
                key={userNow}
                setBoat={handleBoat}
                user={user}
            />
        </div>
    )
}