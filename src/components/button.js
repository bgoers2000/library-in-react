import React from 'react'
import ReactDOM from 'react-dom'


export class Button extends React.Component{
  render(){                                                                             //IN HOME.js <Header onClick={this.handleAddBookModal} />
                                                                                        //<Button onClick={this.props.onClick} /> IN ADDBOOKMODAL
    return (<button type="button" id={this.props.cssId} className={this.props.className} onClick={this.props.onClick}>{this.props.text}</button>)
  }
}

ReactDOM.render(<Button />,document.getElementById('root'))
