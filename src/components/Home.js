
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {

    render() {


        return (




            <div className="container-fluid">
                < main role="main" className="col-lg-12 d-flex justify-content-center">

                    <div id="loader" className="text-center">

                        <p className="text-center"> <br></br> Taking an exam? Have your SSN ready. After registering you will
                            take your exam.
                        </p>
                        <button className="Register"> <Link
                            style={linkStyle} to="Registration">Register</Link></button>
                        <p className="text-center"> <br></br> Checking scores? Have your StudentId ready! <br></br></p>
                        <button className="Check-Scores"><Link style={linkStyle} to="GetScores">Check Scores</Link></button>
                    </div>

                </main>


            </div>
        );
    }
}

const linkStyle = {
    color: 'White',
    textDecoration: 'none',
    justifyContent: 'flex-start',
    alignItems: 'center'

}
export default Home;
