// First we import `useState` with React so that we can take advantage of the hook
import React, { useState } from 'react';

export default function Counter() {

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        {/* In our button element, we add a onClick event that invokes our handleClick method */}
        <button className="btn btn-primary" type="button">
          Increment
        </button>
      </div>
    </div>
  );
}
