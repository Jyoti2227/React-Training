import React from "react";
import AnimalCC from "./AnimalCC";
import UserCC from "./UserCC";
import EmployeeCC from "./EmployeeCC";
import BirdCC from "./BirdCC";

class LivingThings extends React.Component{

    constructor(){
        super();
        this.state ={
            isVisibleAnimal : false,
            isVisibleBird : false,
            isVisibleUser : false,
            isVisibleEmployee : false,
        }
    }
    showAnimalList(){
        this.setState({
            isVisibleAnimal:true
        }
    );
    }
    showUserList(){
        this.setState({
            isVisibleUser:true
        }
    );
    }
    showBirdList(){
        this.setState({
            isVisibleBird:true
        }
    );
    }
    showEmployeeList(){
        this.setState({
            isVisibleEmployee:true
        }
    );
    }
    unmountAnimal(){
         this.setState({
            isVisibleAnimal:false}
        );
    }

    unmountUser(){
        this.setState({
            isVisibleUser:false}
        );
    }

    unmountEmployee(){
        this.setState({
            isVisibleEmployee:false}
        );
    }

    unmountBird(){
        this.setState({
            isVisibleBird:false}
        );
    }

    render(){
        return(<>
            <button onClick={() => this.showAnimalList()}> Animal List</button>
            {this.state.isVisibleAnimal && <AnimalCC/>}
            <button onClick={() => this.unmountAnimal()}> Unmount Animal List </button>
            <br></br>
            <button onClick={() => this.showUserList()}> User List </button>
             {this.state.isVisibleUser && <UserCC/>}
             <button onClick={() => this.unmountUser()}> Unmount User List </button>
            <br></br>
            <button onClick={() => this.showEmployeeList()}> Employee List </button>
             {this.state.isVisibleEmployee && <EmployeeCC/>}
             <button onClick={() => this.unmountEmployee()}> Unmount Employee List </button>
            <br></br>
            <button onClick={() => this.showBirdList()}> Bird List </button>
             {this.state.isVisibleBird && <BirdCC/>}
             <button onClick={() => this.unmountBird()}> Unmount Bird List </button>
            <br></br>
        </>)
    }
}
export default LivingThings;