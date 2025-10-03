import React from "react";

function Greeting ({name, message}) {
    return <h1>{message} {name}! </h1>;
}

Greeting.defaultProps = {
    message: 'Hello',
    name: 'Guest'
}

export default Greeting