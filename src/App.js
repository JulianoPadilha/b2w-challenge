import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const api = "http://www.mocky.io/v2/57dfec211000009020598073";

    fetch(api)
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: [response]
        })
      })
  }

  render() {
    const data = this.state.data.map((user, index) => {
      return (
        <main key={ index } className="App">
          <div className="app_container">
            <Sidebar profile={ user } />
            <Content content={ user } />
          </div>
        </main>
      );
    });

    return data;
  }
}

export default App;
