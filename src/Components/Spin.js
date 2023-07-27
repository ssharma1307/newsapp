import React, { Component } from 'react'
import loading from './loading.gif'

export class Spin extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <img src={loading} alt="loading" className='text-center'/>
      </div>
    )
  }
}

export default Spin
