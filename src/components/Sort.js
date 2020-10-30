



import React, { Component } from 'react'


export default class Sort extends Component {

  render() {
    return (
      <>
                       
                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                         
                                  <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Sắp xếp
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <a className="dropdown-item" >A-Z</a>
                                      <a className="dropdown-item" >Z-A</a>
                                      <a className="dropdown-item" >Trạng thái ẩn</a>
                                      <a className="dropdown-item" >Trạng thái kích hoạt</a>
                                    </div>
                                  </div>
                          </div>
      </>
    )
  }
}

