import React from "react";

import "./style.scss";

function ContactMePortion() {


    return(

<div className="shade">
    <br/>
  <div className="blackboard">
    <div className="form">
      <p>
        <label>Name: </label>
        <input type="text" />
      </p>
      <p>
        <label>Email: </label>
        <input type="text" />
      </p>
      <p>
        <label>Phone: </label>
        <input type="tel" />
      </p>
      <p>
        <label>Subject: </label>
        <input type="text" />
      </p>
      <p>
        <label>Message: </label>
        <textarea defaultValue={""} />
      </p>
      <p className="wipeout">
        <input type="submit" defaultValue="Send" />
      </p>
    </div>
  </div>
</div>


    )
}

export default ContactMePortion
