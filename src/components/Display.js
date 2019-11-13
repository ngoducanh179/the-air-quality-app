import React, { useState, Fragment } from 'react'
import Iaqi from './Iaqi'
import Errorr from './Errorr'
const Display = ({ aq }) => {
  if (aq.status == 'error') {
    return <Errorr aq={aq.data} />
  } else {
    return (
      <Fragment>
        {aq.data && (
          <Fragment>
            <h4>Data From :<a href={aq.data.attributions[0].url && aq.data.attributions[0].url}>{aq.data.attributions[0].name && aq.data.attributions[0].name}</a></h4>
            <h3>Location :{aq.data.city.name && aq.data.city.name}</h3>
            <h4>Time :{aq.data.time.s && aq.data.time.s}</h4>
            <h1>AQI:{aq.data.aqi && aq.data.aqi}</h1>
            {aq.data.iaqi ? (<Iaqi aq={aq.data} />) : null}
          </Fragment>
        )}
      </Fragment>

    )
  }


}

export default Display
