import React from 'react';
import './App.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    const title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    return (
      <div className="App">
        <h1> {title }</h1>
        <div className="text-section">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac dui ut mi laoreet porta id ac felis. 
          Suspendisse potenti. Etiam diam magna, posuere vitae consectetur sed, viverra in neque.
          Nulla malesuada vulputate odio. Etiam erat massa, ullamcorper rutrum lorem vel, pharetra consectetur tortor.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi.
        </div>
      </div>
    );
  }
}

export default App;
