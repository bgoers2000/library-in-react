import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from './button.js'



export class Header extends React.Component{

  render(){
    return (
    <header>
      <nav className="navbar navbar-dark bg-wood" id="myHeader">
          <div className="col-md-3 text-center">
            <Button cssId="addBookModalBtn" className="btn bg-light-beige" text="Add Book" onClick={this.props.onAddBookModalClick}/>
          </div>
          <div className="col-md-3 text-center">
            <Button cssId="removeBookModalBtn" className="btn bg-light-beige" text="Remove Book" />
          </div>
          <div className="col-md-3 text-center">
            <input id="searchInput" className="rounded" type="text" text="Search" value="" placeholder="search by title"></input>
            <div className="btn-group btn-group-sm mt-2" role="group" aria-label="Basic example">
              <Button cssId="searchBtn" className="btn bg-light-beige" text="Search"/>
              <Button cssId="advSearchModalBtn" className="btn bg-light-beige" text="Adv Search" />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <Button className="btn bg-light-beige" text="Login" data-toggle="modal" data-target="#loginModal" />
          </div>
      </nav>
    </header>
  )
  }
}
ReactDOM.render(<Header />,document.getElementById('root'))

// <button type="button" id={this.props.cssId} className={this.props.className}>{this.props.name}</button>
// <button type="button" id="addBookModalBtn" className="btn bg-light-beige">Add Book</button>
// <button type="button" id="removeBookModalBtn" className="btn bg-light-beige">Remove Book</button>
// <button id="searchBtn" type="button" className="btn bg-light-beige">Search</button>
// <button id="advSearchModalBtn" type="button" className="btn bg-light-beige">Adv Search</button>
// <button type="button" className="btn bg-light-beige" name="Login" data-toggle="modal" data-target="#loginModal">Login</button>
