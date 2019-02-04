import React, { Component } from 'react';
import Locations from './locations';
import {StyleSheet, css} from 'aphrodite';

const RsvpForm = (props) => {
    const styles = StyleSheet.create({
        formStyle: {
            width: '80%',
            margin: '5% auto 5% auto',
            
        },
        labelStyle : {
            fontFamily: "'Abril Fatface', cursive",
            fontSize: '2.4vw',
            color: '#4663C1',
            textShadow: '-1px 0 #F8C03F, 0 1px #F8C03F, 1px 0 #F8C03F, 0 -1px #F8C03F',
            textAlign: 'left'
        },
        h3Style: {
            fontFamily: "'Abril Fatface', cursive",
            color: '#4663C1',
            textShadow: '-1px 0 #F8C03F, 0 1px #F8C03F, 1px 0 #F8C03F, 0 -1px #F8C03F',
            borderBottom: 'solid black 1px',
            paddingBottom: '5%'
        }
        
    })

    return (
        <form onSubmit={props.submitHandler} className={css(styles.formStyle)}>
            <h1 className={css(styles.h3Style)}> Please RSVP by March 6 </h1>
            <div className="form-group">
                <label for="location" className={`text-left ${css(styles.labelStyle)}`}>Location</label>
                <Locations locationHandler={props.locationHandler}/>
            </div>
            <div class="form-group">
                <label for="exampleSelect1" className={`text-left ${css(styles.labelStyle)}`}>Will you be attending?</label>
                <select className="form-control" id="exampleSelect1" onClick={props.attendingHandler}>
                    <option >Yes</option>
                    <option >Maybe</option>
                <option >No</option>
                </select>
            </div>
           {props.numberAppear()}
           {props.addGuests()}
           <div className="form-group">
                <label htmlFor="comment" className={`text-left ${css(styles.labelStyle)}`}>Do you have any comments?</label>
                <textarea className="form-control" id="comment" rows="4" onChange={props.getInputValues}/>
            </div>
           <button type="submit" className="btn btn-primary">Submit</button>
            
        </form>
    )
}

export default RsvpForm;