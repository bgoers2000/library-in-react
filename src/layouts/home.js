import React from 'react'
import ReactDOM from 'react-dom'
import {Header} from '../components/header.js'
import {Footer} from '../components/footer.js'
import {AddBookModal} from '../components/addBookModal.js'
import {Table} from '../components/table.js'


class Home extends React.Component{
  constructor(){
    super()
    this.state = {
  addBookModal:{show: 'false',title:'',author:'',numberOfPages:'',haveRead:'true',bookQueue:[]},
  removeBookModal:{show:'false',titleField:''},
  bookShelf:[]}
    this.handleAddBookModal = this.handleAddBookModal.bind(this)
    this.handleAddBookModalInputs = this.handleAddBookModalInputs.bind(this)
    this.queueBook = this.queueBook.bind(this)
    this.addToLib = this.addToLib.bind(this)
  }

  handleAddBookModal(){
    if(this.state.addBookModal.show === 'true'){
      // console.log('SHOW IS TRUE SETTING TO FALSE');
      this.setState({addBookModal:{...this.state.addBookModal,show:'false'}})
    }else{
      // console.log('SHOW IS FALSE SETTING TO TRUE');
      this.setState({addBookModal:{...this.state.addBookModal,show:'true'}})
    }
  }
  handleAddBookModalInputs(e){
    // console.log(e.target.name);
    switch(e.target.name){
      case 'title':
      let newTitle = e.target.value;
      this.setState({addBookModal:{...this.state.addBookModal,title:newTitle}});
      break;
      case 'author':
      let newAuthor = e.target.value;
      this.setState({addBookModal:{...this.state.addBookModal,author:newAuthor}});
      break;
      case 'numberOfPages':
      let newPages = e.target.value;
      this.setState({addBookModal:{...this.state.addBookModal,numberOfPages:newPages}});
      break;
      case 'haveRead':
      let newHaveRead = e.target.value;
      this.setState({addBookModal:{...this.state.addBookModal,haveRead:newHaveRead}});
      break;
      case 'publishDate':
      let newPublishDate = e.target.value
      this.setState({addBookModal:{...this.state.addBookModal,publishDate:newPublishDate}});
      break;
      default: alert('you effed up');
      break;
}
};

  queueBook(){
    let tempBook = {}
    for (var key in this.state.addBookModal) {
      if (key !== 'show' && key !== 'bookQueue') {
        tempBook[key] = this.state.addBookModal[key]
      }
      tempBook['id'] = this.state.addBookModal.bookQueue.length //THIS IS TEMPORARY PLACEHOLDER FOR MONGODB IDS
    }
    const updateArray = this.state.addBookModal.bookQueue
    updateArray.push(tempBook)
    this.setState({addBookModal:{...this.state.addBookModal,bookQueue:updateArray}})
  }
  addToLib(){
    const updateArray = this.state.bookShelf
    // updateArray.push(this.state.addBookModal.bookQueue)
    this.setState({bookShelf:this.state.addBookModal.bookQueue.concat(updateArray)})
    this.setState({addBookModal:{...this.state.addBookModal,bookQueue:[]}})
  }

  render(){
    return (
      <main>
      <Header onAddBookModalClick={this.handleAddBookModal} />
      <AddBookModal show={this.state.addBookModal.show} onOpenClick={this.handleAddBookModal} onChange={this.handleAddBookModalInputs} onQueue={this.queueBook} onAddToLibClick={this.addToLib} bookCount={this.state.addBookModal.bookQueue} />
      <Table bookShelf={this.state.bookShelf} />
      <Footer />
      </main>
  )}
}

ReactDOM.render(<Home />,document.getElementById('root'))
export default Home;
