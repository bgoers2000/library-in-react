import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from './button.js'



export class Footer extends React.Component{

  render(){
    return (
      <footer>
      <nav className="navbar navbar-dark bg-wood" id="myFooter">
        <div className="col-md-4 text-center">
          <Button cssId="showRandomBookBtn" className="btn bg-light-beige bg-random" text="Random Book" />
          <Button onClick={this.props.onClick} cssId="showAllBooksBtn" className="btn bg-light-beige" text="Show All Books" />
        </div>
        <div className="col-md-4 text-center">
          <Button cssId="showTableBtn" className="btn bg-light-beige" text="Show Table"/>
        </div>
        <div className="col-md-4 text-center">
          <Button cssId="showRandomAuthorBtn" className="btn bg-light-beige bg-random" text="Random Author" />
          <Button cssId="showAllAuthorsBtn" className="btn bg-light-beige" text="Show All Authors" />
        </div>
      </nav>
    </footer>
  )
  }
}
ReactDOM.render(<Footer />,document.getElementById('root'))

// <button type="button" id={this.props.cssId} className={this.props.className}>{this.props.name}</button>
// <button type="button" id="addBookModalBtn" className="btn bg-light-beige">Add Book</button>
// <button type="button" id="removeBookModalBtn" className="btn bg-light-beige">Remove Book</button>
// <button id="searchBtn" type="button" className="btn bg-light-beige">Search</button>
// <button id="advSearchModalBtn" type="button" className="btn bg-light-beige">Adv Search</button>
// <button type="button" className="btn bg-light-beige" name="Login" data-toggle="modal" data-target="#loginModal">Login</button>
