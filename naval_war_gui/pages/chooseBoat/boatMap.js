/** @file boatMap.js
 * @brief       The component of add 5 boats foreach player.
 * @author      Ao XIE
 * @date        2023.02.03
 * @version     2.0.0
 * @copyright   Copyright (c) 2023 XIE Ao. All rights reserved.
 *****************************************************************
 * @attention
 * Development environment: macOS Ventura 13.2
 * @par Modification log:
 * <table>
 * <tr><th>Date        <th>Version  <th>Author    <th>Description
 * <tr><td>2023/02/09  <td>2.0      <td>Ao XIE  <td>First Edition of table of the boats.
 * <tr><td>2023/02/03  <td>1.0      <td>Ao XIE  <td>Creating the initial version
 * </table>
 ******************************************************************
 */

 import React from "react"

 import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

 export default function BoatMap(){
    const [selectedX, setSeletedX] = useState('');
    const [selectedY, setSeletedY] = useState('');
    const handleClick = (indexX, indexY) => {
        setSeletedX([...selectedX, indexX]);
        setSeletedY([...selectedY, indexY]);
    }

    const table = [];
    for (let i=0; i<11; i++){
        const row = [];
        for (let j=0; j<11; j++){
            if(i==0){
                row.push(
                    <td style={{
                        width:'50',
                        height:'50px',
                        border: '1px solid #ccc',
                        textAlign: 'center'
                    }}>
                        {j}
                    </td>
                );
            }
            else if(j == 0){
                row.push(
                    <td style={{
                        width:'50px',
                        height:'50px',
                        border: '1px solid #ccc',
                        textAlign: 'center'
                    }}>
                        {i}
                    </td>
                );
            }
            else{
                const isSelectedX = selectedX.includes(i);
                const isSelectedY = selectedY.includes(j);
                row.push(
                    <td
                        //key={indexX*10+indexY}
                        onClick={() => handleClick(i, j)}
                        style = {{
                            backgroundColor: (isSelectedX && isSelectedY)? '#00bcd4' : 'transparent',
                            width:'50px',
                            height:'50px',
                            textAlign: 'center',
                            border: '1px solid #ccc'
                        }}
                    >
                        *
                    </td>
                );
            }
        }
        table.push(<tr key={i}>{row}</tr>)
    }

    return (
        <table style={{ borderCollapse: 'collapse' }}>
          <tbody>{table}</tbody>
        </table>
      );
 };