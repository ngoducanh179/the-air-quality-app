import React, { useState, Fragment } from "react";
import Display from "./Display";
import {Button} from 'react-bootstrap'
const GetAirQuality = ({ aq, GetAQI,SetAq }) => {
  const [text, SetText] = useState("");
  const getAQ = e => {
    e.preventDefault();
    // SetText(e.target.value)
    GetAQI(text);
  };

  const onChange = e => {
    SetText(e.target.value);
  };

  return (
    <Fragment>
      <div>
        <form onSubmit={getAQ} onChange={onChange}>
          <input
            type="text"
            className="form-control container"
            placeholder="Search"
            value={text}
          />
          <button type="submit" className="btn btn-success ">
            Search
          </button>
        </form>
        {aq.data ?
          <Button onClick={()=> SetAq({})} variant="light" size="lg" block>Clear</Button> : null
        }
        
      </div>

      <Display aq={aq} />
    </Fragment>
  );
};

export default GetAirQuality;
