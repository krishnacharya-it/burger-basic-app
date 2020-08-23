import React from 'react';
import './DemoStyle.css';

function Users(props) {
  return (
    <div>
      <div className="chip">
        <img src="https://www.pinclipart.com/picdir/middle/165-1653686_female-user-icon-png-download-user-colorful-icon.png" alt="Person" width="96" height="96"/>
        <input type="text" onChange={props.changetext}/>
         {props.name}
        <span className="closebtn" onClick={props.click}>&times;</span>
      </div>
      <br/> <br/> <br/>
    </div>
  );
}

export default Users;