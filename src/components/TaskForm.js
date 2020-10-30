



import React, { Component } from 'react'

export default class TaskForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id: '',
       name:'',
       status: true
      
    }

  }

  static getDerivedStateFromProps(nextProps, prevState) { // Rarely Used
    const task = nextProps.task
    if(task && task.id !== prevState.id){
    
      return{
        id:task.id,
        name:task.name,
        status: task.status}
    }
     return  null;
    }  
  

  
 
  
  
  
  
  
  onChange=(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    if(name==='status'){
      value = target.value==='true' ? true:false;
    }
    this.setState({
      [name]:value
    })
  }   

  onCloseForm=()=>{
    this.props.onCloseForm()
  }
  onSubmit=(event)=>{
    event.preventDefault();

    this.props.onSubmit(this.state)

  }

  render() {

      var {taskEditing}=this.props;
    return (
      <>
          
          <div className="panel ">
                            <div className="panel-heading">
                               <h5>{this.state.id !==''? "Cập nhật công việc " :"Thêm công việc "}<button type="button" 
                               className="btn btn-danger"
                                onClick={this.onCloseForm}
                               ><span className="fa fa-times"></span></button></h5>
                              
                            </div>
                            <div className="panel-body">
                               <form  onSubmit={this.onSubmit}>
                                  <div className="form-group">
                                    <label >Tên :</label>
                                    <input type="text"
                                     name="name"
                                      className="form-control"
                                      value={this.state.name}
                                      onChange={this.onChange}
                                      
                                      />
                            
                                  </div>
                                  <div className="form-group">
                                    <label >Trạng Thái :</label>
                                    <select className="form-control" 
                                              name="status" 
                                             value={this.state.status}
                                             onChange={this.onChange}
                                    
                                    >
                                      <option value={true}>Kích hoạt</option>
                                      <option value={false}>Ẩn</option>
                                     
                                    </select>
                                  </div>

                                  <div className="Text-center">
                                  <button type="submit" className="btn btn-primary"><span className="fa fa-plus mr-1" 
                                   
                                  ></span>Lưu lại</button>
                                  <button type="submit" className="btn btn-danger"><span className="fa fa-times"
                                  
                                  ></span>Hủy bỏ</button>
                                  </div>
                                  
                               </form>
                            </div>
                      </div>
          
      </>
    )
  }
}

