import React, { Component } from 'react';
import SideTab from '../../components/sideTab/sideTab';

class Directions extends Component {
    render() {
        return(
            <div className='container'>
                <SideTab  name='invite' text='The Event'/>
                <SideTab  name='rsvp' text='R S V P'/>
                <SideTab  name='directions' text='Directions'/>
                <div className='canvas'> Coming soon!</div>
            </div>
        )
    }
}

export default Directions;