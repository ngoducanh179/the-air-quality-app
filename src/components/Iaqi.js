import React from 'react'

function Iaqi({ aq }) {
  return (
    <div>
      {aq.iaqi && (
        <div>
          {aq.iaqi.co && <p>Co: {aq.iaqi.co.v}</p>}
          {aq.iaqi.no2 && <p>No2: {aq.iaqi.no2.v}</p>}
          {aq.iaqi.o3 && <p>O3: {aq.iaqi.o3.v}</p>}
          {aq.iaqi.p && <p>P: {aq.iaqi.p.v}</p>}
          {aq.iaqi.pm25 && <p>Pm 2.5: {aq.iaqi.pm25.v}</p>}
          {aq.iaqi.t && <p>t: {aq.iaqi.t.v}</p>}
          {aq.iaqi.w && <p>w: {aq.iaqi.w.v}</p>}
        </div>
      )}
    </div>
  )
}

export default Iaqi
