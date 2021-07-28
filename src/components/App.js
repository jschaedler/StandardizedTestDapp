import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
import './App.css'
import Registration from './Registration'
import Home from './Home'
import Exam from './Exam'
import GetScores from './GetScores'







class App extends Component {





  render() {

    return (
      <BrowserRouter>
        <Route exact path="/" render={props => (<div>
          <Navbar />
          <div className="container-fluid mt-5">
            <div className="row">
              <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
                <div className="content mr-auto ml-auto">
                  <Home />
                </div>
              </main>
            </div>
          </div>

        </div>)} >

        </Route>
        <div className="col-lg-12 d-flex justify-content-center">
          <Route exact path="/Registration" component={Registration} ></Route>
          <Route exact path="/Exam" component={Exam}></Route>
          <Route path="/GetScores" component={GetScores}></Route>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
