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

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/Home.module.css';
import User from "./addUser.js";
import { Inter } from '@next/font/google'
import ChooseBoat from "../chooseBoat/chooseBoat";

const inter = Inter({ subsets: ['latin'] })

export default function Login() {

    const router = useRouter();

    // FUNCTIONS TO GET INFOMATIONS
    const [firstNameUA, setFirsetNameUA] = useState('');
    const [firstNameUB, setFirsetNameUB] = useState('');

    const handleFA = (value) => {
        setFirsetNameUA(value);
    }
    const handleFB = (value) => {
        setFirsetNameUB(value);
    }

/*  ******* For the users in the location storage
    const setUsers = () => {
        useEffect(() => {
            sessionStorage.setItem('user1', firstNameUA);
            sessionStorage.setItem('user2', firstNameUB);
            console.log(sessionStorage.getItem('user1'))
            console.log(sessionStorage.getItem('user2'))

            window.addEventListener('beforeUnload', function () {
                sessionStorage.removeItem('user1');
                sessionStorage.removeItem('user2');
            })
        }, []);
        console.log("hello")
    } */

    const onSubmit = (event) => {
        event.preventDefault();
        //setUsers();

        /* TEST PART ************************************/
        router.push('/chooseBoat/chooseBoat/')
        console.log(firstNameUA);
        console.log(firstNameUB);
        /* TEST PART ************************************/

        /*fetch(`http://localhost:5199/api/Game/start/${firstNameUA}/${firstNameUB}`, {
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

                router.push('/chooseBoat/chooseBoat');

            })
            .catch((error) => {
                alert(error.message);
            }); */

    }

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