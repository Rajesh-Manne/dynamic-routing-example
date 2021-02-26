import React from 'react'
import { withRouter } from "react-router";

function DynamicUser(props) {
    console.log(props)
    return (
        <div>
        <h1>user component {props.match.params.id}</h1>
        <h2>name:{props.match.params.name}</h2>
        </div>
    )
}

export default withRouter(DynamicUser)