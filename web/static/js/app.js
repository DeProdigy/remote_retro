import React, { Component } from 'react'
import { render } from 'react-dom'

class ReactPlayground extends Component {
  render(){
    return (
      <div className="react-playground">
        <p>The React Playground</p>
      </div>
    )
  }
}

render(<ReactPlayground/>, document.querySelector('.react-root'))

import {Socket, Presence} from "phoenix"

let socket = new Socket("/socket", {params: {user: 'Travis'}})
socket.connect()

