import React, { Component } from 'react';
import './App.css';
import Welcome from "./components/Welcome";
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding";
import ParentComponent from './components/ParentComponent';
import CurrentDateOfWeek from './components/CurrentDateOfWeek';
import BookList from './components/BookList';
import PersonsList from './components/personsListProject/PersonsList'
import MobileList from './components/mobilesListProject/MobileList';
class App extends Component {
  render() {
    return (
      <div className="App">
      <MobileList />
      {/* <PersonsList /> */}
      {/* <BookList /> */}
      {/* <CurrentDateOfWeek /> */}
      {/* <ParentComponent />   */}
      {/* <EventBinding /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Welcome name="bmw">
         <button>add to cart</button>
      </Welcome>  
      <Greet name="noor" age="30">
        <button>click</button>
      </Greet> */}
        {/* <Greet name="anas" age="3.5">
          <p>this is children prop</p>
        </Greet>  
        <Greet name="owis" age="2">
          <button>action</button>
        </Greet>  
        <Greet name="noor" age="30" />

        <Welcome name="anas" age="3.5">
            <textarea>welcome</textarea>
        </Welcome>  
        <Welcome name="mohammed" age="30"/>   */}
      </div>
    );
  }
}

export default App;
      

