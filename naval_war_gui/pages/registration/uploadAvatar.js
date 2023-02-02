/** @file uploadAvatar.js
 * @brief       Upload an avatar
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
 * <tr><td>2023/01/28  <td>1.0      <td>Ao XIE  <td>Creating the initial version
 * </table>
 ******************************************************************
 */

import React, { useState } from "react";

const UploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <input type = "file" onChange={handleFileUpload} />
      {selectedFile ? <p>{selectedFile.name}</p> : <p>No File selected</p>}
    </div>
  );
};
 
