import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css'
import Web3 from 'web3'
import Register from '../abis/Register.json'
import RecievingScores from '../abis/ReceivingScores.json'
import Navbar from './Navbar';










class Registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            address: '',
            Register: {},
            RecievingScores: {},
            answer: [],
            key: ["Paris", "Elon Musk", "Apple", "7"]


        }
    }



    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }

    async loadBlockchainData() {
        const web3 = window.web3
        await window.ethereum.enable();

        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })

        const networkId = await web3.eth.net.getId()

        const registerData = await Register.networks[networkId]
        if (registerData) {
            const register = new web3.eth.Contract(Register.abi, registerData.address)
            this.setState({ Register: register })

        }
        const recieveScoresData = await RecievingScores.networks[networkId]
        if (recieveScoresData) {
            const recievingScores = new web3.eth.Contract(RecievingScores.abi, recieveScoresData.address)
            this.setState({ RecievingScores: recievingScores })
        }

    }
    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }



    registering = (photoHash, name, streetAddress) => {
        this.state.Register.methods.register(photoHash, name, streetAddress).send({ from: this.state.account })

    }






    render() {



        return (


            <div id="content" className="mt-3">
                <div id="Header" className="col-lg-12 d-flex justify-content-center">
                    <h2>Register For Exam</h2>
                </div>

                <BrowserRouter>

                    <Navbar />
                    <br></br>
                    <br></br>
                    <form className="mb-3" onSubmit={(event) => {
                        event.preventDefault()
                        let name
                        name = this.input1
                        let ssn
                        ssn = this.input2
                        let StreetAddress
                        StreetAddress = this.input3
                        this.registering(ssn, name, StreetAddress)
                        window.alert("Student ID: 411092883")
                    }}>
                        <label>
                            Full Name:<br></br>
                            <input type="text" name="name"
                                ref={(input) => { this.input1 = input }} />
                        </label> <br></br> <label>
                            SSN:<br></br>
                            <input type="text" name="ssn"
                                ref={(input) => { this.input2 = input }} />
                        </label> <br></br><label>
                            Street Address:<br></br>
                            <input type="text" name="StreetAddress"
                                ref={(input) => { this.input3 = input }} />
                        </label>
                        <input type="submit" value="Submit" />

                    </form>



                    <div className="col-lg-12 d-flex justify-content-center">
                        <Link to="/Exam" style={linkStyle}>Take Exam Now </Link>
                    </div>


                </BrowserRouter>

            </div>
        );
    }
}

const linkStyle = {
    color: '#fcfcfc',
    textDecoration: 'none',
    paddingTop: '10px'





}

export default Registration;