import React, { Component } from 'react';
import SideTab from '../../components/sideTab/sideTab';

class Directions extends Component {
    render() {
        return(
            <div className='container'>
                <SideTab  name='invite' text='The Event'/>
                <SideTab  name='rsvp' text='R S V P'/>
                <SideTab  name='directions' text='Directions'/>
                <div className='canvas'> 
                <iframe 
                    width="100%" 
                    height="100%" 
                    frameborder="0" 
                    src="https://www.google.com/maps/embed/v1/place?q=32083%20Alvarado-Niles%20Rd%2C%20Union%20City%2C%20CA%2094587&key=AIzaSyAnQTPhx6nkRVy0maCdtgLOIsfPQLHru9k" 
                    allowfullscreen>

                </iframe>
                        
                </div>
            </div>
        )
    }
}

export default Directions;