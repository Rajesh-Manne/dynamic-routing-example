import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import DynamicUser from './DynamicUser';

export default function User() {
    let users = [
        {name:'anil',id:1},
        {name:'jon',id:2},
        {name:'peter',id:3},

        {name:'jack',id:4},
    ]
    return (
        <div className="container">
            <h1>React Dynamic Routing</h1>
            <Router>
            {users.map(item => {
                return <div>
                   
                   
                            <Link to={'/user/'+item.id+'/'+item.name}>{item.name}</Link>
                        
                          
             
                            
                </div>
            })}
             <Route path="/user/:id/:name"><DynamicUser /></Route>      
            </Router>
        </div>
    )
}
