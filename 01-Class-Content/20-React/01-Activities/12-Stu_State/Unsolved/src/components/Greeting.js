// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function Greeting() {
  // TODO: Convert `greeting` to a state variable using the useState hook. Give it a initial value of 'Welcome the following students to class!'
  let greeting = 'Welcome the following students to class!';
  const [greetingState, updateGreeting] = useState(greeting)
  // TODO: Convert `group` to a state variable using the useState hook. Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
  let group = ["John", "Grace", "Jared"];
  const [groupState, updateGroup] = useState(group);

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        {/* TODO: Fix the `p` tag below to instead render the `greeting` variable */}
        <p className="card-text">{greetingState}</p>
        <ul>
          {/* TODO: Fix the list below so that each member of your group is accessed from the `group` array */}
          <li>{groupState[0]}</li>
          <li>{groupState[1]}</li>
          <li>{groupState[2]}</li>
        </ul>
      </div>
    </div>
  );
}

export default Greeting;
