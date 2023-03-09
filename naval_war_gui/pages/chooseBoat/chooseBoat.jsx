/** @file chosseBoat.js
 * @brief       The page of add boats
 * @author      Ao XIE
 * @date        2023.02.02
 * @version     2.0
 * @copyright   Copyright (c) 2023 XIE Ao. All rights reserved.
 *****************************************************************
 * @attention
 * Development environment: macOS Ventura 13.2
 * @par Modification log:
 * <table>
 * <tr><th>Date        <th>Version  <th>Author    <th>Description
 * <tr><td>2023/03/09  <td>2.0      <td>Ao XIE  <td>Change the fn of button to change user
 * <tr><td>2023/02/03  <td>1.0      <td>Ao XIE  <td>Creating the initial version
 * </table>
 ******************************************************************
 */


import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from '../../styles/Home.module.css';

import BoatMap from "./boatMap";



export default function ChooseBoat() {

    const storedUser1 = sessionStorage.getItem('user1');
    const storedUser2 = sessionStorage.getItem('user2');

    const [user, setUser] = useState('');
    const router = useRouter();

    useEffect(() => {

        if (storedUser1 != null && storedUser2 != null) {
            setUser(storedUser1);
        }
    }, [])

    const onClick = (event) => {
        event.preventDefault();
        if (user == storedUser1) {
            setUser(storedUser2);
        }
        else {
            router.push('/battle/battleField');
        }
    }


    return (
        <form className={styles.mainmanu}>
            <h1 className="text-center">It's time to get ready!</h1>
            <h1 className="text-center">
                Dear {user}, Please make your choice!
            </h1>
            <br />
            <BoatMap key={user} />
            <br />
            <button
                type="submit"
                className="btn btn-primary"
                style={{ textAlign: 'center' }}
                onClick={onClick} // Have to be there, it's just the function of this button
            >
                SAVE
            </button>
            <br />
        </form>
    )
}