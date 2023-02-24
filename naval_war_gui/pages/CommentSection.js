/**************************** IMPORTANT ******************************/
// Comments section page.
/** @file CommentSection.js
 * @brief       Comments section page
 * @author      Xuanzhe XIA
 * @date        2023.02.10
 * @version     1.0.0
 * @copyright   Copyright (c)
 *****************************************************************
 * @attention
 * Development environment: Windows
 * @par Modification log:
 * <table>
 * <tr><th>Date        <th>Version  <th>Author    <th>Description
 * <tr><td>2023/02/24  <td>2.0      <td>Xuanzhe XIA  <td>Beautification
 * <tr><td>2023/02/10  <td>1.0      <td>Xuanzhe XIA  <td>Comments section page
 * </table>
 ******************************************************************
 */


import React, { useState } from "react";
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image'
import ImgUser from '../public/CommentImg.jpg'




const CommentBoard = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <main className="container-fluid">
      <div className="container">
        <h1 className="text-center">Comment Board</h1>
        
      </div>
      <div className="row">
        {comments.map((comment, index) => (
          <div key={index} className="col-12 mb-2">
            <div className="media bg-light rounded p-3">
              <span className="media-body" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <Image src={ImgUser} className="mr-3 rounded-circle inline-block" alt="User" />
                <p>{comment}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <form className="col-12" onSubmit={handleCommentSubmit}>
          <div className="input-group mb-3">
          <Image src={ImgUser} className="mr-3 rounded-circle inline-block" alt="User" />
            <textarea
              className="form-control"
              value={newComment}
              onChange={(event) => setNewComment(event.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CommentBoard;



