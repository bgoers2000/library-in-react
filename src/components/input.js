import React from 'react'
import ReactDOM from 'react-dom'
import '../css/App.css'
import '../css/bootstrap.css'


export class Input extends React.Component{

  render(){
    return (
      <input required onChange={this.props.onChange} name={this.props.name} id={this.props.cssId} type={this.props.type} placeholder={this.props.placeholder} className={this.props.className} aria-label="Default" aria-describedby="inputGroup-sizing-default" ></input>
    )
  }
}

ReactDOM.render(<Input />,document.getElementById('root'))
