/** @file login.js
 * @brief       To get the infos of the users
 * @author      Ao XIE
 * @date        2023.01.28
 * @version     1.1.1
 * @copyright   Copyright (c) 2023 XIE Ao. All rights reserved.
 *****************************************************************
 * @attention
 * Development environment: macOS Ventura 13.2
 * Using Fetch API
 * @par Modification log:
 * <table>
 * <tr><th>Date        <th>Version  <th>Author    <th>Description
 * <tr><td>2023/02/08  <td>1.1      <td>Ao XIE  <td>Get children infos, send POSTs.
 * <tr><td>2023/02/02  <td>1.0      <td>Ao XIE  <td>Creating the initial version
 * </table>
 ******************************************************************
 */

import React from "react";
import Link from "next/link";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/Home.module.css';


import User from "./addUser.js";

export default function Login() {


    // FUNCTIONS TO GET INFOMATIONS
    const [firstNameUA, setFirsetNameUA] = useState('');
    const [firstNameUB, setFirsetNameUB] = useState('');

    const handleFA = (value) => {
        setFirsetNameUA(value);
    }
    const handleFB = (value) => {
        setFirsetNameUB(value);
    }
    const handleLA = (value) => {
        setLastNameUA(value);
    }
    const handleLB = (value) => {
        setLastNameUB(value);
    }

    function onSubmit(event) {
        console.log("tessst");
        event.preventDefault();
        fetch(`http://localhost:5199/api/Game/start/${firstNameUA}/${firstNameUB}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    return response.text().then((errorMessage) => {
                        throw new Error(errorMessage);
                    });
                }

                window.location.href = "http://localhost:3000/chooseBoat/chooseBoat";

            })
            .catch((error) => {
                alert(error.message);
            });
    }

    //FUNCTIONS TO SEND POST
    {/* <Link href={"../chooseBoat/chooseBoat"}>
                    ≈
                </Link> */}

    //onSubmit={handleSubmit}
    return (
        <div className={styles.mainmanu}>
            <form className="container" onSubmit={onSubmit}>
                <div className="container">
                    <User
                        onFirstName={handleFA}
                    />
                    <br />
                    <User
                        onFirstName={handleFB}
                    />
                </div>
                <br />
                <button type="submit" className="btn btn-primary" style={{ textAlign: 'center' }}>
                    HERE WE GO!
                </button>
            </form>
        </div>
    )
}