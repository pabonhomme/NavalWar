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
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';

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
        <ul className="list-unstyled">
          {comments.map((comment, index) => (
            <li key={index} className="col-12 mb-2 p-3 bg-light rounded" >
              {comment}
            </li>
          ))}
        </ul>
      </div>

      <div className="row">
        <form className="col-12" onSubmit={handleCommentSubmit}>
          <textarea
            className="form-control"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          />
          <button className="btn btn-primary mt-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default CommentBoard;


