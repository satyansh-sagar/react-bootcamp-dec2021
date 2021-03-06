import React, { Component } from 'react'
import Header from './Bootstrap/Header';
import Code from './Code';
import Form from './Form';

class App extends Component {
  state = {
    Dark: true,
    FormData: {
      Firstname: "",
      Lastname: "",
      Thumbnail: "",
      URL: "",
      Description: "",
      keywords: "", 
      Address: "",
      Phone: "",
      Email: "",
      Experience: [{
        Role:"",
        Company:"",
        Desc: "",
        Start: "",
        End: ""
      }],
      Education: [{
        Degree:"",
        Institute:"",
        Desc: "",
        Start: "",
        End: ""
      }],
      Skills: {
        Tools: [],
        Workflow: []
      },
      Interests: [],
      Awards: []
    }
  };

  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark
    })
  };

  handleChange = (e) => {
    this.setState({
      FormData:{
        ...this.state.FormData,
        [e.target.name]: e.target.value
      }
    })
  };

  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="Header">
          <span>Satyansh Portfolio Genrator</span>
          <button className="btn btn-sm btn-outline-primary ml-3 rounded-circle" onClick={this.toggleHeader}>
            <i
              className={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}
            ></i>
            </button>
          </Header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-6"><Form
               FormData={{
                 Fullname:`${this.state.FormData.Firstname} ${this.state.FormData.Lastname}`, 
                 ...this.state.FormData}}
                 onChange={this.handleChange}
                 ></Form></div>
              <div className="col-12 col-sm-6"><Code {...this.state.FormData} Fullname={`${this.state.FormData.Firstname} ${this.state.FormData.Lastname}`}></Code></div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
