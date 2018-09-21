import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
        inventory_list: []
    }
}

componentDidMount(){
  axios.get('/api/inventory').then(res => {
    this.setState({inventory_list: res.data})
  })
}

getInventory = () => {
  axios.get('/api/inventory').then(res => {
    this.setState({inventory_list: res.data})
  })
}


  render() {
    console.log(this.state);
    const {inventory_list} = this.state;
    return (
      <div className="App">
        <Header />
        <div className="dashForm">
          <Dashboard productList={inventory_list}/>
          <Form getInventory={this.getInventory}/>
        </div>
      </div>
    );
  }
}

export default App;
