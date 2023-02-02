import React from "react";
import Employee from "./Employee";
// import ReactDOM from "react-dom";

class RenderEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  mountEmployeeComp(type) {
    if (type === "mount") {
      //ReactDOM.render(<Employee />, document.getElementById("employee"));
      this.setState({
        isVisible: true,
      });
    } else if (type === "unmount") {
      // ReactDOM.unmountComponentAtNode(document.getElementById("employee"));
      this.setState({
        isVisible: false,
      });
    } else {
      this.setState({
        propsData: "Smita",
      });
    }
  }
  render() {
    return (
      <>
        <div className="App">
          <h2>Lifecycle Example</h2>
          <button
            className="btn btn-primary"
            onClick={() => this.mountEmployeeComp("mount")}
          >
            Mount Employee component
          </button>
          <button
            className="btn btn-primary"
            onClick={() => this.mountEmployeeComp("unmount")}
          >
            Unmount Employee component
          </button>
          {/* <button
            className="btn btn-primary"
            onClick={() => this.mountEmployeeComp("props")}
          >
            Change Props
          </button> */}

          {/* <div id="employee"></div> */}
          {this.state.isVisible && <Employee />}
          <hr />
        </div>
      </>
    );
  }
}
export default RenderEmployee;
