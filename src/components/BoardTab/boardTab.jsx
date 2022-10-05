import React from 'react'
import BasicTable from '../reactTable/basicTable';
import './boardTab.Css'
import { BoardStyles } from './boardTab.Css';

function BoardTab() {
  return (
      <>
          <BoardStyles>
      <div className="Main-Board">
        <h1>Admin Dashboard </h1>
        </div>
        <div>
          <BasicTable/>
        </div>
        </BoardStyles>
    </>
  );
}

export default BoardTab
