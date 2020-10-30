



import React, { Component } from 'react'


  
export default class TaskItem extends Component {
  onUpdateStatus=()=>{
    this.props.onUpdateStatus(this.props.task.id)
  }
  onUpdate=()=>{
    
    this.props.onUpdate(this.props.task.id)
  }
  onDelete=()=>{
    
    this.props.onDelete(this.props.task.id)
  }
  render() {
    var {task,index}=this.props;
   
    return (
      <>
          
                                    <tr>
                                       <td >{index +1}</td>
                                       <td>{task.name}</td>
                                       <td className="Text-center">
                                            <span className={task.status===true ? "label":"label2"}
                                                  onClick={this.onUpdateStatus}
                                            
                                            
                                            >{task.status===true? 'active':'inactive'}</span>
                                       </td>
                                       <td className="Text-center">
                                       <button type="button" className="btn btn-warning"
                                              onClick={this.onUpdate}
                                       >Sửa</button>
                                        <button type="button" className="btn btn-danger"
                                         onClick={this.onDelete}
                                        >Xóa</button>
                                       </td>
                                     </tr>
                                     
          
      </>
    )
  }
}

