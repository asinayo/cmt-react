import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import BoardComponent from './components/board/Board';
import { BoardListPage, BoardRegistPage, BoardDetailPage } from './pages/board';
import MenuComponent from './components/menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
         <MenuComponent />
         <header className="App-header">
         <Route exact path="/" component={BoardListPage}/>
         <Route exact path="/board/list" component={BoardListPage}/>
         <Route path="/board/regist" component={BoardRegistPage}/>
         <Route path="/board/detail/:id" component={BoardDetailPage}/>
        </header>
      </div>
    );
  }
}

export default App;
