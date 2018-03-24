import React from 'react';

export const Jumbotron = props => (
    <div style={{ height: 300, clear: "both" }} className="jumbotron">
      {props.children}
    </div>
);