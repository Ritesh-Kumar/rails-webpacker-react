import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('container')
  );
}
setInterval(tick, 1000);
