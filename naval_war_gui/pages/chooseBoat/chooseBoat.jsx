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
    /********************************* Test Part */
    const user1 = "Paul";
    const user2 = "Ao";
    /********************************* Test Part */

    const router = useRouter();
    const [user, setUser] = useState(null);
    
    
    const onClick = () => {
        console.log("hello")
        if (user == user1) {
            setUser(user2);
        }
        else if (user == null){
            setUser(user1);
        }
        else {
            router.push('/battle/BattleFiled');
        }
    }

    return (
        <form className={styles.mainmanu}>
            <h1 className="text-center">
                Dear {user}, please make your choice!
            </h1>
            <br />
            <BoatMap
                key={user}
            />
            <br />
            <button
                type="submit"
                className="btn btn-primary"
                style={{ textAlign: 'center' }}
                onClick={onClick}
            >
                SAVE
            </button>
            <br />
        </form>
    )
}