import React from 'react'

function Alert(props) {
  return (
    
    
    props.Alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong> {props.alert.type}</strong> :{props.alert.msg}  
            <button type="button" class="btn-close" data-bs-dismiss="alert" ></button>
        </div>
    
  )
}

export default Alert
