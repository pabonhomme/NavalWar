/** @file addUser.tsx
 * @brief       The player module, which contains an avatar as well as two input fields.
 * @author      Ao XIE
 * @date        2023.02.08
 * @version     1.1.2
 * @copyright   Copyright (c) 2023 XIE Ao. All rights reserved.
 *****************************************************************
 * @attention
 * Development environment: macOS
 * @par Modification log:
 * <table>
 * <tr><th>Date        <th>Version  <th>Author    <th>Description
 * <tr><td>2023/02/08  <td>1,1      <td>Ao XIE  <td>Set the organisation and send infos to parent
 * <tr><td>2023/02/07  <td>1.0      <td>Ao XIE  <td>Creating the initial version
 * </table>
 ******************************************************************
 */

 import React from "react";
 import userDefaultPhoto from "./userDefaultPhoto.png";

 import Image from 'next/image';
 import { useState } from "react";

 export default function User({onFirstName, onLastName}){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const getFirstName = (event) => {
        setFirstName(event.target.value);
        onFirstName(event.target.value);
    }

    const getLastName = (event) => {
        setLastName(event.target.value);
        onLastName(event.target.value);
    }

    return (
        <div class="row">
            <div class="col">
                <Image 
                    src={userDefaultPhoto} 
                    class="rounded mx-auto d-block" 
                    alt="photo of users by default"
                />
            </div>
            <div class="col">
                <br/>
                <br/>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">First Name</span>
                    <input 
                        type="text" 
                        class="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                        onChange={getFirstName}
                    />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Last Name</span>
                    <input 
                        type="text" 
                        class="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                        onChange={getLastName} 
                    />
                </div> 
            </div>
        </div>
    )
 }