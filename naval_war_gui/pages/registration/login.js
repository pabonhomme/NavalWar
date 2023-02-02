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

import React from "react";
import { useState } from "react";

export default function Login(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setMessage(`Hello ${firstName} ${lastName}!`);
        setFirstName('');
        setLastName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={(event) =>
                    setFirstName(event.target.value)
                }
            />
            <br />
            <input 
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                placeholder="First Name"
                onChange={(event) =>
                    setLastName(event.target.value)
                }
            />

            <button type="submit">Submit</button>

            <br />

            <h2>{message}</h2>
        </form>
    )
 }