/** @file login.js
 * @brief       To get the infos of the users
 * @author      Ao XIE
 * @date        2023.01.28
 * @version     1.0.0
 * @copyright   Copyright (c) 2023 XIE Ao. All rights reserved.
 *****************************************************************
 * @attention
 * Development environment: Windows
 * @par Modification log:
 * <table>
 * <tr><th>Date        <th>Version  <th>Author    <th>Description
 * <tr><td>2023/02/02  <td>1.0      <td>Ao XIE  <td>Creating the initial version
 * </table>
 ******************************************************************
 */

import React from "react"
import Image from 'next/image'
import Link from "next/link"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'

import userDefaultPhoto from "./userDefaultPhoto.png";
import ChooseBoat from "../chooseBoat/chooseBoat.js";

export default function Login(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const [user1, setUser1] = useState('');
    const [user2, setUser2] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setMessage(`${user1} is been kept!`);
        setFirstName('');
        setLastName('');
    }

    return (
        <form class="mb-3">
            <Image 
                src={userDefaultPhoto} 
                class="rounded mx-auto d-block" 
                alt="photo of users by default"
            />
            <label for="firstName" class="form-label">First Name</label>
            <input 
                type="text"
                id="firstName"
                class="form-control"
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={(event) =>
                    setFirstName(event.target.value)
                }
            />
            <label for="lastName" class="form-label">Last Name</label>
            <input 
                type="text"
                id="lastName"
                class="form-control"
                name="lastName"
                value={lastName}
                placeholder="First Name"
                onChange={(event) =>
                    setLastName(event.target.value)
                }
            />

            <button 
                type="submit" 
                class="btn btn-primary"
                onClick={handleSubmit}
                >Submit</button>
            <br />
            <br />
            <button type="submit" class="btn btn-primary">
                <Link to="/ChooseBoat">Start</Link>
            </button>

            <br />
            <br />

            <h2>{message}</h2>
        </form>
    )
 }