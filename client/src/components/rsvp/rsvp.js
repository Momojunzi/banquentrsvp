import React, { Component } from 'react';
import RsvpForm from './rsvpForm';
import axios from 'axios';
import SideTab from '../../components/sideTab/sideTab';
import {StyleSheet, css} from 'aphrodite';
import Locations from './locations';


class Rsvp extends Component {
    state ={
        numberOfGuests: 0,
        rsvp: {
            attending: false,
            locationNumber: "0522-10 Golden Gate",
            comment: '',
            noShows: ''
        },
        guests: [],
        submitted: false,
        locationed: false,
        attended: false,
        finaled: false,
        noShowed: false,
    }

    componentDidMount() {
        this.props.returnFalse();
    }

    submitHandler = (event) => {
        event.preventDefault();
        const data = {
            rsvp: this.state.rsvp,
            guests: this.state.guests
        }
        axios.post('/api/rsvp', data)
            .then(axios.post('/api/guests', data))
            .then((response) => {
                this.setState({submitted: true})
            })
            .then((response) => {
                if(this.state.rsvp.attending) {
                    this.props.handleAttending();
                }
            })
            .then((response) => {
                if(this.state.submitted ){
                    this.props.history.push('/submitted')
                }
            })
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
        })
    }

    attendingHandler = (event) => {
        event.preventDefault();
        const elem = event.target;
        const radioValue = elem.value;
        let attending;
        if (elem.value === 'Yes') attending = true;
        else attending = false;
        this.setState({rsvp:{
            ...this.state.rsvp,
            attending}
        }, ()=>{
            elem.checked = true; 
            if(this.state.rsvp.attending === false) {
                this.setState({noShowed: true})
            } else this.setState({noShowed: false})                  
        })
        this.setState({attended: true}) 
    } 

    locationHandler = (event) => {
        event.preventDefault();
        const elem = event.target;
        const location = elem.value
        this.setState({rsvp: {
            ...this.state.rsvp,
           locationNumber: location
        }})
        this.setState({locationed: true})
    }

    getGuests = (event) => {
        event.preventDefault();
        const guestNum = parseInt(event.target.name);
        const guests = this.state.guests;
        let inpValue = event.target.value;
        guests[guestNum] = inpValue;
        this.setState({guests: guests}, () =>{
            if(this.state.finaled === false) {
                this.setState({finaled: true})
            }
        })
        
    }

    getNoShow = (event) => {
        event.preventDefault();
        let inpValue = event.target.value;
        this.setState({rsvp: {
            ...this.state.rsvp,
            noShows: inpValue
        }},() => {
            if(this.state.finaled === false) {
                this.setState({finaled: true})
            }
        })
        
    }

    numberAppear = () => {
        if(this.state.rsvp.attending === true) {
            return (
                <div className="form-group text-left">
                    <label htmlFor="location-field" className='text-left labelStyle'>How many guests will attend?</label>
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
                <div className='guestsStyle'>
                    <p className='labelStyle'>Who will attend?</p>
                    {
                    guestList.map((guest) => {
                            return(
                                <div key={`guest` + guest.guest +1}>
                                    <div className="form-group text-left">
                                        <label className='text-left labelStyle'>guest {guest.guest + 1}</label>
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

    renderAttending = () => {
        if(this.state.locationed){
            return (
                <div className="form-group text-left">
                    <label htmlFor="exampleSelect1" className='text-left labelStyle'>Will you be attending?</label>
                    <select className="form-control" id="exampleSelect1" onClick={this.attendingHandler} >
                        <option value="" disabled selected>Please choose yes or no</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
            )
        }
    }

    renderCommentAndSubmit = () => {
        if(this.state.finaled){
           return (
                <div>
                    <div className="form-group text-left">
                        <label htmlFor="comment" className='text-left labelStyle'>Do you have any comments?</label>
                        <textarea className="form-control" id="comment" rows="4" onChange={this.getInputValues}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            ) 
        } 
    }

    renderNoShow = () => {
        if(this.state.noShowed) {
            return(
                <div>
                    <div className="form-group text-left">
                        <label htmlFor="comment" className='text-left labelStyle'>Please leave your name</label>
                        <input type="text" className="form-control" onChange={this.getNoShow} />
                    </div>
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
                        renderAttending={this.renderAttending}
                        renderCommentAndSubmit={this.renderCommentAndSubmit}
                        renderNoShow={this.renderNoShow}
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
        fontSize: '1.75vw',
        color: '#4663C1',
        textShadow: '-1px 0 #F8C03F, 0 1px #F8C03F, 1px 0 #F8C03F, 0 -1px #F8C03F',
        
    },
    guestsStyle: {
        border: 'solid #4663C1 1px',
        padding: '2vh',
        width: '100%',
        margin: 'auto',
        background: 'linear-gradient(rgba(255,255,255,0.60), rgba(255,255,255,0.60))'
    }
    
})

export default Rsvp;