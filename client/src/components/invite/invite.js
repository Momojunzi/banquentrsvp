import React, { Component } from 'react';
import axios from 'axios';
import SideTab from '../../components/sideTab/sideTab';
import {StyleSheet, css} from 'aphrodite'

const imageData = [
    {
        text: "Casino Games",
        image: "https://res.cloudinary.com/momojunzi/image/upload/c_scale,h_1080,w_1920/v1548896832/portfolio/rsvp/jonathan-petersson-614702-unsplash.jpg"
    },
    {
        text: "Dinner",
        image: "https://res.cloudinary.com/momojunzi/image/upload/c_scale,h_1080,w_1920/v1548896833/portfolio/rsvp/rawpixel-754045-unsplash.jpg"
    },
    {
        text: "Awards",
        image: "https://res.cloudinary.com/momojunzi/image/upload/c_scale,w_1920/v1549147819/portfolio/rsvp/ariel-besagar-497034-unsplash.jpg"
    },
] 


class Invite extends Component {

    state = {
        count: 0, 
        opacity: 1,
        shown: true
    }

    componentDidMount() {
        const intervalId = setInterval(this.changeImageHandler, 4000)
        this.setState({intervalId: intervalId})
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    changeImageHandler = () => {
        let shown = this.state.shown;
        if(shown) {
            
            this.setState({opacity:0, shown: false})
        }
        else {
            let count = this.state.count;
            count += 1
            if(count > 2 ){
                count = 0
            }
            this.setState({opacity: 1, shown: true}, () => {
                this.setState({count})
            });
        }
    }

    fadeImageHandler = () => {
        if(this.state.shown){
            let opacity = 0
            this.setState({opacity})
        }
    }

    render() {
        const fadeStyle = {
            opacity: this.state.opacity,
            transition: 'opacity 3s'
        }
        return(
            <div className='container'>
                <SideTab  name='invite' text='The Event'/>
                <div className='canvas'>
                    <div className={css(styles.inviteTextDiv)}>
                        <div className={css(styles.largeTextDiv)}>
                           <p className={css(styles.text1)}>Please join us March 16, 2019</p> 
                        </div>
                        <div className={css(styles.smallTextDiv)}>
                            <p className={css(styles.text2)}>6:00 pm - 10:00pm</p>
                        </div>
                        <div className={css(styles.smallTextDiv)}>
                            <p className={css(styles.text2)}>At the Crowne Plaza in Union City</p>
                        </div>
                    </div>
                    <div className={css(styles.eventDiv)} style={fadeStyle}>
                        <p className={css(styles.imageText)}>{imageData[this.state.count].text}</p>
                        <div className={css(styles.imageDiv)}>
                            <img src={imageData[this.state.count].image} className={css(styles.image)} alt="invite"/>
                        </div>
                    </div>
                </div>
                <SideTab  name='rsvp' text='R.S.V.P.'/>
                <SideTab  name='directions' text='Directions'/>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    inviteTextDiv: {
        paddingTop: '5%',
        paddingLeft: '5%'
    },
    largeTextDiv:{
        width: '90%',
        height: '7vh',
        display: 'flex',      
        alignItems: 'center',
        justifyContent: 'left', 
    },
    smallTextDiv: {
        width: '90%',
        height: '5vh',
        display: 'flex',     
        alignItems: 'center',
        justifyContent: 'left', 
        paddingTop: '5%',
        paddingBottom: '3%'
    },
    text1: {
        fontFamily: "'Abril Fatface', cursive",
        fontSize: '2.8vw',
        color: '#4663C1',
        textShadow: '-1px 0 #F8C03F, 0 1px #F8C03F, 1px 0 #F8C03F, 0 -1px #F8C03F'
    },
    text2: {
        fontFamily: "'Abril Fatface', cursive",
        fontSize: '2.4vw',
        color: '#4663C1',
        textShadow: '-1px 0 #F8C03F, 0 1px #F8C03F, 1px 0 #F8C03F, 0 -1px #F8C03F'
    },
    eventDiv: {
        width: '75%',
        height: '53%',
        margin: '2% auto 0 auto',
    },
    image: {
        width: '100%',
        height: '100%'
        
    },
    imageDiv: {
        width: '95%',
        height: '80%',
        margin: 'auto'
    },
    imageText: {
        fontSize: '2.4vw',
        fontFamily: "'Abril Fatface', cursive",
        color: "#4663C1",
        textShadow: '-1px 0 #F8C03F, 0 1px #F8C03F, 1px 0 #F8C03F, 0 -1px #F8C03F'
    }

})

export default Invite;