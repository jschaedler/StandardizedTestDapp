
import React, { Component } from 'react'
import Navbar from './Navbar';


class GetScores extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ShowScore: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            ShowScore: !prevState.ShowScore
        }));
    }

    render() {


        console.log('render')
        return (


            <div>
                <Navbar />


                <div className="col-lg-12 d-flex justify-content-center">
                    <main >
                        <h2  > Input your Student ID </h2>
                        <br></br><br></br>
                        <div >
                            <br></br>
                            <form

                            ><label>
                                    StudentId:<br></br>
                                    <input type="text" name="StuedntID"
                                    />

                                </label>
                                <input type="submit" value="Submit" onClick={(event) => {
                                    event.preventDefault()
                                    this.handleClick()
                                }} />
                            </form>
                        </div>
                    </main>





                </div>
                <p>{this.state.ShowScore ? 'You Scored a 4/4 for 100%' : ''}</p>
            </div>);
    }
}




export default GetScores;