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
import styles from '../../styles/Home.module.css';

import BoatMap from "./boatMap";

export default function ChooseBoat() {
    const [boat, setBoat] = useState('');

    const handleBoat = (value) => {
        setBoat(value);
        // Then, we need to send a POST to backend with this fonction.
        // TODO: POST FUNCTION
    }


    return (
        <div className={styles.mainmanu}>
            <BoatMap
                setBoat={handleBoat}
            />
        </div>
    )
 }