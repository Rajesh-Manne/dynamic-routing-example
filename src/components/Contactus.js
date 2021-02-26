import React from 'react';
import { Link } from 'react-router-dom';

export default function Contactus({match}) {
    return (
        <div><h1>Contactus {match.params.username}</h1> <Link to="/aboutus">redirect to aboutus</Link>
        </div>    )}
