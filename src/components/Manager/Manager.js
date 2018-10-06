import React, { Component } from 'react'
import Signup from '../sign-up'
import "./Manager.css"
import EmployeeEdit from '../EmployeeEdit'
import EmployeeReport from '../EmployeeReport'
<<<<<<< HEAD
<<<<<<< Updated upstream
import onbreak from "./onbreak"
=======
import OnBreak from "./onbreak"
>>>>>>> Stashed changes
=======
import OnBreak from "./OnBreak"
import ExampleSignUp from "../ExampleSignUp"
import ExampleEmployeeReport from "../ExampleEmployeeReport"
import ExampleEmployeeEdit from "../ExampleEmployeeEdit"
import ExampleOnBreak from "../ExampleOnBreak"
>>>>>>> 85195dbd1cbd6c27b03681ba134890b70fd8233e

class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonPressed: 0
        }
    }

    handleClick = (deptBtn) => {
        this.setState({ buttonPressed: deptBtn })
    }

    conditionalRender = () => {
        if (this.state.buttonPressed === 0) {
            return (
                <div className="">
                    <div className="row">
                        <div className="col-md-6 " id="">
                            <div className="" >
                            <ExampleSignUp />
                            </div>
                        </div>

                        <div className="col-md-6 " id="">
                            <div className="deptBtn" >
                            < ExampleEmployeeEdit/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 " id="">
                            <div className="deptBtn" >
                            <ExampleOnBreak />

                            </div>
                        </div>
                        <div className="col-md-6 " id="">
                            <div className="deptBtn" >
                             <ExampleEmployeeReport />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.buttonPressed === 1) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    <Signup />
                </div>

            )
        }
        else if (this.state.buttonPressed === 2) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    <EmployeeEdit />
                </div>

            )
        }
        else if (this.state.buttonPressed === 3) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    <OnBreak />
                </div>

            )
        }
        else if (this.state.buttonPressed === 4) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    <EmployeeReport />
                </div>

            )
        }

    }

    render() {
        return (
            <div className='ManagerView'>
                {this.conditionalRender()}
            </div>

        )
    }
}

export default Manager;