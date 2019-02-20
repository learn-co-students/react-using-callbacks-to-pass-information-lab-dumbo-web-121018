import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {
  state = {
    selectedColor: "#FOO"
  }

  constructor() {
    super()
    this.state = {
      selectedColor: "#DAD"
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  selectingColor = color => {
    console.log("Color has been selected", color);
    this.setState({
      selectedColor: color
    })
  }


  render() {
    return (
      <div id="app">
        <ColorSelector selectingColor={this.selectingColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
