/** @file boatMap.js
 * @brief       The component of add 5 boats foreach player.
 * @author      Ao XIE
 * @date        2023.02.03
 * @version     1.0.0
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

 import React from "react"

 import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

 export default function BoatMap(){
    const [selected, setSeleted] = useState('');
    const handleClick = (index) => {
        setSeleted([...selected, index]);
    }

    const table = [];
    for (let i=0; i<10; i++){
        const row = [];
        for (let j=0; j<10; j++){
            const index = 10*i + j;
            const isSelected = selected.includes(index);
            row.push(
                <td
                    key={index}
                    onClick={() => handleClick(index)}
                    style = {{
                        backgroundColor: isSelected? '#00bcd4' : 'transparent',
                        width:'50px',
                        height:'50px',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}
                >
                    {index}
                </td>
            );
        }
        table.push(<tr key={i}>{row}</tr>)
    }

    return (
        <table style={{ borderCollapse: 'collapse' }}>
          <tbody>{table}</tbody>
        </table>
      );
 };