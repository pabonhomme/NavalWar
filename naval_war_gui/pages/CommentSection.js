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
    <main className={styles.mainmanu}>
    <div className={styles.container}>
      <h1 className={styles.title}>Comment Board</h1>
    </div>
    <div className={styles.CommentBoard}>
      <ul className={styles.ulcomment}>
        {comments.map((comment, index) => (
          <li key={index} className={styles.comment} >
            {comment}
          </li>
        ))}
      </ul>
    </div>

    <div className={styles.WriteComment}>
      <form className={styles.newCommentForm} onSubmit={handleCommentSubmit}>
        <textarea
          className={styles.textarea}
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
      </div>

    </main>
  );
};

export default CommentBoard;

