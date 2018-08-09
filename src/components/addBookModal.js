import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from './button.js'
import {Input} from './input.js'


export class AddBookModal extends React.Component{
  render(){
    let bookQueueLength;
    // console.log(this.props);
    // console.log(this.props.bookCount);
    if(this.props.bookCount){
      this.bookQueueLength = this.props.bookCount.length
    }
    let showHide = 'modal-close';
    if(this.props.show === "false"){
      showHide = 'modal-close'
      // console.log("IF");
      return null
    }else{
      showHide = 'modal-open'
    }
    return(
<div className={showHide}>
  <div className="modal fade show" id="addBookModal" tabIndex="-1" role="dialog" aria-labelledby="addBookModalLabel" aria-hidden="true" >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="addBookModalLabel">Add Book</h5>
          <Button onClick={this.props.onOpenClick} type="button" className="close" text='&times;'/>
        </div>
        <div className="modal-body">
          <form className="needs-validation" noValidate id="addBookForm">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-book-title">Title</span>
                    </div>
                    <Input name="title" onChange={this.props.onChange} cssId="addBookTitleField" type="text" placeholder="Book Title" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-book-author">Author</span>
                    </div>
                    <Input name="author" onChange={this.props.onChange} cssId="addBookAuthorField" type="text" placeholder="Author's Name" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-">Pages</span>
                    </div>
                    <Input name="numberOfPages" onChange={this.props.onChange} cssId="addBookPagesField" type="number" placeholder="50" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text" htmlFor="inputGroupSelect01">Have read?</label>
                    </div>
                    <select required onChange={this.props.onChange} name="haveRead" className="custom-select" id="addBookHaveReadField">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Publish Date</span>
                    </div>
                    <Input name="publishDate" onChange={this.props.onChange} cssId="addBookDateField" type="date" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <Button onClick={this.props.onQueue} cssId="queueBookToBeAddedBtn" className="btn btn-primary" text="Queue book to be added" />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-12">
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input name="coverImage" type="file" className="custom-file-input" id="addBookCoverField"></input>
                      <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <img id="addBookCoverImage" className="img-thumbnail book-cover-thumbnail" alt="Responsive image" />
              </div>
            </div>
          </div>
        </form></div>
        <div className="modal-footer">
            <div className="col-md-4 text-center">
              <Button cssId="addBooksResetFormBtn" className="btn btn-secondary" text="Reset" />
            </div>
            <div className="col-md-4 text-center">
              <span className="books-to-add">{this.bookQueueLength}</span> book(s) waiting to be added
            </div>
            <div className="col-md-4 text-center">
              <Button onClick={this.props.onAddToLibClick} type="button" cssId="addBooksAddBooksToLibBtn" className="btn btn-success" text="Add to Library" />
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
  }
}

ReactDOM.render(<AddBookModal/>,document.getElementById('root'))
