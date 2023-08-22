import React from "react";

// function FunctionalGreeting() {
//     return <h1>Hello</h1>
// }
const FunctionalGreeting = (props) => {
    console.log(props);
    return <h1>Hello, {props.greeting}</h1>;
}
export default FunctionalGreeting;