
import "./App.css";


import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import ConTrol from "./components/ConTrol";
import TaskList from "./components/TaskList";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      isDisplay: false,
      taskEditing: null,
      movies : [

      ]
    };
  }
  
  // componentDidMount() {

  //   axios.get('https://5f8b0f8184531500167064d2.mockapi.io/api/todo')
    
  // .then((response) => {
  //   // handle success
  //   // console.log(response.data);
  //   this.setState({
  //     tasks: response.data
  //   })
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })

  // }

  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get('https://5f8b0f8184531500167064d2.mockapi.io/api/todo')
      .then(res => this.setState({ tasks: res.data }))
      .catch(err => console.log(err));
  };

 

  GenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: "hoc React js",
        status: false,
      },
      {
        id:this.generateID(),

        name: "hoc Angular",
        status: true,
      },
      {
        id: this.generateID(),
        name: "hoc Vue",
        status: true,
      },
    ];
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  generateID=()=> {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      this.s4() +
      this.s4()
    );
  }

  onChangeDisplay = () => {
    //if(this.state.isDisplay && this.state.taskEditing !== null){
    
      this.setState({
        isDisplay: !this.state.isDisplay,
        taskEditing:null
      });
    

  };
  onCloseForm = () => {
    this.setState({
      isDisplay: false,
    });
  };
  onShowForm = () => {
    this.setState({
      isDisplay: true,
    });
  };
  onSubmit = (data) => {

    var { tasks } = this.state;
    if(data.id===''){
      console.log("data",data)
      data.id = this.generateID();
      tasks.push(data);
      axios.post('https://5f8b0f8184531500167064d2.mockapi.io/api/todo',data).then((res)=> tasks.push(res.data))
    }else{

      const index =this.findIndex(data.id);
      tasks[index]=data;
      // axios.put(`https://5f8b0f8184531500167064d2.mockapi.io/api/todo/1`).then((res)=>{
           console.log("data",data)
      //      // this.setState({tasks: res.data})
      //      tasks[index]=res.data;
        axios
            .put(`https://5f8b0f8184531500167064d2.mockapi.io/api/todo/${data.id}/`, data)
            .then(res => this.refreshList());
            this.onCloseForm();
          return;
    
     
     
    }
    
    
    // this.setState({
    //   tasks: tasks,
    //   taskEditing: null
    // });
  
    this.onCloseForm();
  };

  onUpdateStatus=(id)=>{

    var {tasks}=this.state;
    var index =this.findIndex(id);
    if(index !== -1){
     tasks[index].status=!tasks[index].status
      this.setState({
        tasks:tasks
      });
      localStorage.setItem("tasks",JSON.stringify(tasks))
    }
  }

  onDelete=(id)=>{
    
 
 
    if(id !== -1){
      
      axios
      .delete(`https://5f8b0f8184531500167064d2.mockapi.io/api/todo/${id}`)
      .then(res => this.refreshList());
   
    }
    this.onCloseForm();
    }


    onUpdate=(id)=>{
     
      const { tasks } = this.state;
      const index = this.findIndex(id);

      ///console.log(tasks.find((item, index) => item.id === id))
      const taskEditing=tasks[index];
      this.setState({
        taskEditing: taskEditing
      });
      this.onShowForm();

    }

    getID=()=>{
      console.log(this.state.tasks.id)
    }


    findIndex=(id)=>{
      var {tasks}=this.state;
      var result=-1;
      tasks.forEach((task,index)=>{
        if(task.id===id){
          result=index
        }
      });
      return result;
    }
    onFilter=(filterName,filterStatus)=>{
        console.log(filterName ,"-",filterStatus)
        filterStatus=parseInt(filterStatus);
        console.log(typeof(filterStatus))
    }
  render() {
    var { tasks, isDisplay ,taskEditing} = this.state;
    var elTaskForm =
      isDisplay === true ? (
        <TaskForm 
        onCloseForm={this.onCloseForm} 
        onSubmit={this.onSubmit}
        task={taskEditing}
        
      
         />
      ) : (
        ""
      );
    return (
      <>
        <div className="container">
          <div className="Text-center">
            <h1>Quản Lí Công Việc</h1>
          </div>
          <hr />
          <div className="row">
            <div
              className={
                isDisplay === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
              }
            >
              {elTaskForm}
            </div>
            <div
              className={
                isDisplay === true
                  ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                  : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
              }
            >
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onChangeDisplay}
              >
                <span className="fa fa-plus mr-1"></span>Thêm Công việc
              </button>
              <button
                type="button"
                className="btn btn-danger ml-2"
                onClick={this.GenerateData}
              >
                Gennerate
              </button>
        

              <ConTrol />

              <TaskList tasks={tasks} 
                        onUpdateStatus={this.onUpdateStatus}
                        onDelete={this.onDelete}
                        onUpdate={this.onUpdate}
                        onFilter={this.onFilter}
                   />    
            </div>  
          </div>
        </div>
      </>
    );
  }
}
