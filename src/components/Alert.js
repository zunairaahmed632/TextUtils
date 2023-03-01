import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div
        class={`alert alert-success alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type}</strong>
        {/* <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      > */}
        {props.alert.message}
        
      </div>
    )
  );
}
