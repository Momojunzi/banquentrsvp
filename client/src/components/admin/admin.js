import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {

    componentDidMount() {
        console.log('test')
        axios.get('/api/getrsvp')
            .then((result) => {
                console.log( 'hi'+result)
            })
    }

    render() {

        return(
            <div >
                
                test admin
            </div>
        )
    }
}

export default Admin;