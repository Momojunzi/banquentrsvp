import React, { Component } from 'react';
import axios from 'axios';
import SideTab from '../../components/sideTab/sideTab';

class Submitted extends Component {

    rendersubmitted = () => {
        if (this.props.attending) {
            return (
               <div className="submitted-div">
                    <h1 className="submitted-text1">Thank you for your RSVP</h1>
                    <h2 className="submitted-text2">Remember to save the date for March 16!</h2>
                    <h2 className="submitted-text2">We'll see you there!</h2>
                </div> 
            )
        }
        else{
            return (
                <div className="submitted-div">
                    <p className="submitted-text1">Thank you for your RSVP</p>
                    <p className="submitted-text2">We're sorry you won't be able to make it this year</p>
                    <p className="submitted-text2">If something changes make sure you come back and rsvp again!</p>
                </div>  
            )
        }
    }

    render() {
        return(
            <div className='container'>
                <SideTab  name='invite' text='The Event'/>
                <SideTab  name='rsvp' text='R S V P'/>
                <div className='canvas'>
                    {this.rendersubmitted()}
                </div>
                <SideTab  name='directions' text='Directions'/>
            </div>
        )
    }
}

export default Submitted;