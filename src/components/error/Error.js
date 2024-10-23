import React from 'react'

import "../error/Error.css"
import notfound from "../../images/error.png";
export default function error() {
  return (
    <div className="error">
    <h2>404 Not Found</h2>
    <img src={notfound} alt="404" />
  </div>
  )
}
