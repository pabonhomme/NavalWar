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

 export default function User({onFirstName}){

    const [firstName, setFirstName] = useState('');

    const getFirstName = (event) => {
        setFirstName(event.target.value);
        onFirstName(event.target.value);
    }


    return (
        <div className="row">
            <div className="col">
                <Image 
                    src={userDefaultPhoto} 
                    className="rounded mx-auto d-block" 
                    alt="photo of users by default"
                />
            </div>
            <div className="col">
                <br/>
                <br/>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">First Name</span>
                    <input 
                        type="text" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                        onChange={getFirstName}
                    />
                </div>
            </div>
        </div>
    )
 }