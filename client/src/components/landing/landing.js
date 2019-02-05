import React, { Component } from 'react';
import axios from 'axios';
import SideTab from '../../components/sideTab/sideTab';

class Landing extends Component {
    render() {
        return(
            <div className='container'>
                <div className='canvas'>
                    <div className='landingTextDiv'>
                        <p className='landingText'>Penske</p>
                        
                    </div>
                    <div className='landingTextDiv2'>
                        
                        <p className='landingText2'>Agent Banquet</p>
                    </div>
                    <div className='landingDateDiv'>
                        <p className='landingText'>2019</p>
                    </div>
                </div>
                <SideTab  name='invite' text='The Event'/>
                <SideTab  name='rsvp' text='R S V P'/>
                <SideTab  name='directions' text='Directions'/>
            </div>
        )
    }
}

export default Landing;