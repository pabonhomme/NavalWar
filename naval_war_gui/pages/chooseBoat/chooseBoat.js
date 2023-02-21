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
    const [location, setLocation] = useState();
    const [type, setType] = useState();
    const [direction, setDirection] = useState();

    const handleLocation = (value) => {
        setLocation(value);
    }

    const handleType = (value) => {
        setType(value);
    }

    const handleDirection = (value) => {
        setDirection(value);
    }


    return (
        <div className={styles.mainmanu}>
            <BoatMap
                getLocation={handleLocation}
                getType={handleType}
                getDirection={handleDirection}
            />
        </div>
    )
 }