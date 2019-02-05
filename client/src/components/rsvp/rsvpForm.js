import React, { Component } from 'react';
import Locations from './locations';
import {StyleSheet, css} from 'aphrodite';

const RsvpForm = (props) => {
   
    return (
        <form onSubmit={props.submitHandler} className='formStyle'>
            <h1 className='h3Style'> Please RSVP by March 6 </h1>
            <div className="form-group text-left">
                <label for="location" className='text-left labelStyle'>Location</label>
                <Locations locationHandler={props.locationHandler}/>
            </div>
            <div class="form-group text-left">
                <label for="exampleSelect1" className='text-left labelStyle'>Will you be attending?</label>
                <select className="form-control" id="exampleSelect1" onClick={props.attendingHandler}>
                    <option >Yes</option>
                    <option >Maybe</option>
                <option >No</option>
                </select>
            </div>
           {props.numberAppear()}
           {props.addGuests()}
           <div className="form-group text-left">
                <label htmlFor="comment" className='text-left labelStyle'>Do you have any comments?</label>
                <textarea className="form-control" id="comment" rows="4" onChange={props.getInputValues}/>
            </div>
           <button type="submit" className="btn btn-primary">Submit</button>
            
        </form>
    )
}

export default RsvpForm;