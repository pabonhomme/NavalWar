/**************************** IMPORTANT ******************************/
// Game description page.
/** @file manuel.tsx
 * @brief       Programme initialisation screen
 * @author      Xuanzhe XIA
 * @date        2023.02.03
 * @version     1.0.0
 * @copyright   Copyright (c)
 *****************************************************************
 * @attention
 * Development environment: Windows
 * @par Modification log:
 * <table>
 * <tr><th>Date        <th>Version  <th>Author    <th>Description
 * <tr><td>2023/02/03  <td>1.0      <td>Xuanzhe XIA  <td>Creating the initial version
 * </table>
 ******************************************************************
 */

import Link from 'next/link'
import styles from '../styles/Home.module.css';


export default function manuel() {
  return (
    <>
    <main className={styles.mainmanu}>
    
    
        <h1 className={styles.titremanu}>NavalWar</h1>
          <p className={styles.pmanu}>Battleship is a two-player pen and paper game
           that originated during the First World War. The game has been developed
            in different versions in several countries to date and is
          currently part of Hasbro's Family Game Night.</p>
        <h2 className={styles.titremanu2}>History</h2>
          <p className={styles.pmanu}>The history of Battleship goes back to a French game 
          called L'Attaque from the First World War. The game was released for the PC in 1979 and a sound and light version was released in 1989. The game was also released on consoles and handhelds as part of Hasbro Family Game Night, and in 2012 Universal released the naval battle movie of the same name.
           A next-gen console version of the game was released by Ubisoft.</p>
        <h2 className={styles.titremanu2}>How to play</h2>
          <p className={styles.pmanu}>
          Two players each have two 10 x 10 grids, one to indicate the position of their own ships and one to guess the position of the enemy's ships, with the horizontal axis of the grid being distinguished by numbers and the vertical axis by letters. Before the game begins, the two players each draw their fleet positions on grid one - each player opens with five ships, an aircraft carrier, a destroyer, a battleship, a cruiser and a submarine (this is the 1990 Milton Bradley version of the rules), each ship arranged horizontally or vertically on the grid, occupying several consecutive grids (5 for carriers, 2 for destroyers, 3 for cruisers, 3 for submarines and 4 for battleships), different warships cannot occupy duplicate grids.
          At the start of the game, two players start each turn by declaring the co-ordinates of one of their opponent's squares (e.g. 3A, 5C, etc.) The grid declared is equivalent to an attack, and the attacker declares whether or not he has been hit. When all grids of a warship are hit, the ship is sunk and the opponent reports "xxx sunk." If one side has lost all its ships, the game is over.The most important feature of this game is the fog of war, both sides do not know the position of the enemy fleet at the beginning and can only play blindly. As more and more positions are hit, the position of the opponent's fleet is gradually presumed and the game becomes more and more exciting.
          </p>

          
    </main>
    </>
  )
}