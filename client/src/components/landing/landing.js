import React, { Component } from 'react';
import axios from 'axios';
import SideTab from '../../components/sideTab/sideTab';

class Landing extends Component {
    render() {
        const landingTextDiv = {
            height: '17%',
            width: '90%',
            margin: '10% auto 0 auto',
            //border: 'solid black 1px',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        }
        const landingTextDiv2 = {
            height: '17%',
            width: '90%',
            margin: '5% auto 0 auto',
            //border: 'solid black 1px',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        }
        const landingText = {
            
            fontSize: '4vw',
            fontFamily: "'Fascinate Inline', cursive",
            color: '#4663C1',
            textShadow: '-1px 0 #F8C03F, 0 1px #F8C03F, 1px 0 #F8C03F, 0 -1px #F8C03F'
        }
        const landingDateDiv = {
            height: '17%',
            width: '90%',
            margin: '5% auto 0 auto',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        }
        const landingText2 = {
            fontSize: '5vw',
            fontFamily: "'Fascinate Inline', cursive",
            color: '#4663C1',
            textShadow: '-1px 0 #F8C03F, 0 1px #F8C03F, 1px 0 #F8C03F, 0 -1px #F8C03F'
        }
        return(
            <div className='container'>
                <div className='canvas'>
                    <div style={landingTextDiv}>
                        <p style={landingText}>Penske</p>
                        
                    </div>
                    <div style={landingTextDiv2}>
                        
                        <p style={landingText2}>Agent Banquet</p>
                    </div>
                    <div style={landingDateDiv}>
                        <p style={landingText}>2019</p>
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