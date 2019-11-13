import React, { useState, Fragment } from 'react'
import Display from './Display'
const GetAirQuality = ({ aq, GetAQI }) => {
  const [text, SetText] = useState('')
  const getAQ = (e) => {
    e.preventDefault()
    // SetText(e.target.value)
    GetAQI(text)
  }

  const onChange = (e) => { SetText(e.target.value) }

  return (
    <Fragment>
      <div>
        <form onSubmit={getAQ} onChange={onChange}>
          <input type='text' value={text} />
          <button type='submit' className='btn btn-primary btn-lg'>Find</button>
        </form>
      </div>

      <Display aq={aq} />
    </Fragment>

  )

}

export default GetAirQuality
