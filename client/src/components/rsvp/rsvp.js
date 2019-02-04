import React, { Component } from 'react';
import RsvpForm from './rsvpForm';
import axios from 'axios';
import SideTab from '../../components/sideTab/sideTab';
import {StyleSheet, css} from 'aphrodite';

class Rsvp extends Component {
    state ={
        numberOfGuests: 0,
        rsvp: {
            attending: true,
            locationNumber: "0522-10 Golden Gate",
            comment: '',
        },
        guests: []
    }

    submitHandler = (event) => {
        event.preventDefault();
        const data = {
            rsvp: this.state.rsvp,
            guests: this.state.guests
        }
        axios.post('/api/rsvp', data)
            .then(axios.post('/api/guests', data))
            .then((response) => console.log(response))
    }

    getInputValues = (event) => {
        event.preventDefault();
        let inputValue = event.target.value;
        const name = event.target.id;
        if(name === "numberOfGuests") {
            inputValue = parseInt(inputValue);
            this.setState({numberOfGuests:inputValue})
        }
        this.setState({rsvp: 
            {
                ...this.state.rsvp,
                [name]:inputValue
            }
        }, ()=>{
            console.log(this.state.rsvp);
        })
    }

    attendingHandler = (event) => {
        event.preventDefault();
        const elem = event.target;
        const radioValue = elem.value;
        const attending = (radioValue === "Yes");
        
        this.setState({rsvp:{
            ...this.state.rsvp,
            attending}
        }, ()=>{
            elem.checked = true;
        }) 
    } 

    locationHandler = (event) => {
        event.preventDefault();
        const elem = event.target;
        const location = {locationNumber: elem.value}
        this.setState(location);
    }

    getGuests = (event) => {
        event.preventDefault();
        const guestNum = parseInt(event.target.name);
        const guests = this.state.guests;
        let inpValue = event.target.value;
        guests[guestNum] = inpValue;
        console.log(guests[guestNum])
        console.log(guests);
        this.setState({guests: guests}, () =>{console.log("state guests",  this.state.guests)})
    }

    numberAppear = () => {
        if(this.state.rsvp.attending === true) {
            return (
                <div className="form-group">
                    <label for="location-field" className={`text-left ${css(styles.labelStyle)}`}>How many guests will attend?</label>
                    <input type="text" className="form-control" id="numberOfGuests" onChange={this.getInputValues}/>
                </div> 
            )
        }
    }

    addGuests = () => {
        const guestList = []
        for (let i = 0; i < this.state.numberOfGuests; i++){
            guestList.push({guest: i})
        }
        if(this.state.numberOfGuests > 0){
            return(
                <div className={css(styles.guestsStyle)}>
                    <p className={css(styles.labelStyle)}>Who will attend?</p>
                    {
                    guestList.map((guest) => {
                            return(
                                <div key={`guest` + guest.guest +1}>
                                    <div className="form-group">
                                        <label className={`text-left ${css(styles.labelStyle)}`}>guest {guest.guest + 1}</label>
                                        <input type="text" className="form-control" onChange={this.getGuests} name={guest.guest} />
                                    </div>
                                </div> 
                            )
                        }) 
                    }
                </div>  
            )
        }    
    }

    render() {
        return(
            <div className='container'>
                <SideTab  name='invite' text='The Event'/>
                <SideTab  name='rsvp' text='R.S.V.P.'/>
                <div className='canvas'>
                    
                    <RsvpForm 
                        numberAppear={this.numberAppear}
                        attendingHandler={this.attendingHandler}
                        getInputValues={this.getInputValues}
                        submitHandler={this.submitHandler}
                        locationHandler={this.locationHandler}
                        addGuests={this.addGuests}
                    />
                </div>
                <SideTab  name='directions' text='Directions'/>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    
    labelStyle : {
        fontFamily: "'Abril Fatface', cursive",
        fontSize: '2.4vw',
        color: '#4663C1',
        textShadow: '-1px 0 #F8C03F, 0 1px #F8C03F, 1px 0 #F8C03F, 0 -1px #F8C03F',
        
    },
    guestsStyle: {
        width: '80%',
        margin: 'auto'
    }
    
})

export default Rsvp;