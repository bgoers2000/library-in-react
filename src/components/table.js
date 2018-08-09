import React from 'react'
//import ReactDOM from 'react-dom'
import {map} from 'ramda'



export class Table extends React.Component{


  makeRows(arrElement){
    // console.log(arrElement);
    return (<tr key={arrElement.id} className="library-rows table-rows">
            <td key={arrElement.id + arrElement.title}>{arrElement.title}</td>
            <td key={arrElement.id + arrElement.author}>{arrElement.author}</td>
            <td key={arrElement.id + arrElement.numberOfPages}>{arrElement.numberOfPages}</td>
            <td key={arrElement.id + arrElement.haveRead}>{arrElement.haveRead}</td>
            <td key={arrElement.id + arrElement.publishDate}>{arrElement.publishDate}</td>
    </tr>)
  }


  render(){
    var tableRows;
    // console.log(this.props);
    // console.log(this.props.bookShelf);
    if (this.props.bookShelf) {
      tableRows = map(this.makeRows,this.props.bookShelf)
    }else{
    }
    return (
    <div className="container marg-top-bot">
      <div className="row" id="bookTable">
        <table className="table book-table">
          <thead className="bg-darkest-brown color-white">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Number of Pages</th>
              <th>Have Read?</th>
              <th>Publish Date</th>
            </tr>
          </thead>
          <tbody>
          {tableRows}
          </tbody>
        </table>
      </div>
    </div>
    )
  }




}
