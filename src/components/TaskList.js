
import React, { Component } from 'react'
import TaskItem from './TaskItem'


export default class TaskList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        filterName:'',
        filterStatus:-1 //
      }
    
     
    }
    


  onUpdateStatus=()=>{
    this.props.onUpdateStatus(this.state)
  }
  onDelete=()=>{
    this.props.onDelete(this.state)
  }
  onUpdate=()=>{
    this.props.onUpdate(this.state)
  }
  onChange=(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    this.props.onFilter(name ==='filterName' ? value : this.state.filterName  , name ==='filterStatus' ? value : this.state.filterStatus )
    this.setState({
      [name] : value
    })
  }
  render() {
    var { tasks ,taskEditing}=this.props;
    var elTaskList=tasks.map((task,index)=>{
       
      return   <TaskItem   key={task.id} 
                           index={index}
                            onUpdateStatus={this.props.onUpdateStatus}
                            onDelete={this.props.onDelete}
                            onUpdate={this.props.onUpdate}
                            task={task}
                            taskE={taskEditing}
          />
    }) 
    
    return (
      <>
          
          <table className="table table-striped table-inverse mt-15" border="1">
                                 <thead className="thead-inverse">
                                   <tr>
                                     <th>STT</th>
                                     <th>Tên</th>
                                     <th>Trạng Thái</th>
                                     <th>Hành Động</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                     <tr>
                                       <td ></td>
                                       <td>
                                          <input name="filterName" 
                                          
                                          className="form-control"
                                           type="text"
                                           value={this.state.filterName}
                                           onChange={this.onChange}
                                           />
                                       </td>
                                       <td>
                                          <div className="form-group">
                                            
                                            <select className="form-control" name="filterStatus" id=""
                                            value={this.state.filterStatus}
                                            onChange={this.onChange}
                                            >
                                              <option value={-1}>Tất cả</option>
                                              <option value={0}>Ẩn</option>
                                              <option value={1}>kích hoạt</option>
                                            </select>
                                          </div>
                                       </td>
                                       <td></td>
                                     </tr>
                                     {elTaskList}
                                      
                                     
                                   </tbody>
            </table>
          
      </>
    )
  }
}

