import React from 'react';

const boardsAux = [{title:'board1'}, {title:'board2'}];

const Board = () => {
  return (
    <div>
    <div>
      <div>
        <span/>
      </div>
      <h3>Personal Boards</h3>
    </div>

      <ul>
        {
          boardsAux.map( (board) => {
            return (
                <li>
                  <a>
                    <span/>
                    <span>
                      <span>{board.title}</span>
                    </span>
                  </a>
                </li>
              )
            })
          }
        <li>
          <a>
            <span/>
            <span>
              <span>Create new board…</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
    )
}

export default Board;
