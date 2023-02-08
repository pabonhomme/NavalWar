/** @file login.js
 * @brief       To get the infos of the users
 * @author      Ao XIE
 * @date        2023.01.28
 * @version     1.1.0
 * @copyright   Copyright (c) 2023 XIE Ao. All rights reserved.
 *****************************************************************
 * @attention
 * Development environment: Windows
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
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/Home.module.css';

import User from "./addUser.js";

export default function Login(){

    // FUNCTIONS TO GET INFOMATIONS
    const [firstNameUA, setFirsetNameUA] = useState('');
    const [firstNameUB, setFirsetNameUB] = useState('');
    const [lastNameUA, setLastNameUA] = useState('');
    const [lastNameUB, setLastNameUB] = useState('');

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

    //FUNCTIONS TO SEND POST
    const handleSubmit = async(event) => {
        event.preventDefault();
        const response = await fetch('siteweb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstNameUA,
                lastNameUA,
                firstNameUB,
                lastNameUB
            })
        });

        if(!response.ok){
            console.error('POST ERROR');
            return;
        }
        const data = await response.json();
        console.log('Data received: ', data);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.mainmanu}>
            <div class="container">
                <User 
                    onFirstName={handleFA}
                    onLastName={handleLA}
                />
                <br/>
                <User
                    onFirstName={handleFB}
                    onLastName={handleLB}
                />
            </div>
            <br/>
            <button 
                type="submit"
                class="btn btn-light"
            >
                HERE WE GO!
            </button>
        </form>
    )
 }