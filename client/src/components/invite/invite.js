import React, { Component } from 'react';
import axios from 'axios';
import SideTab from '../../components/sideTab/sideTab';
import {StyleSheet, css} from 'aphrodite';
const casino = "https://res.cloudinary.com/momojunzi/image/upload/c_scale,q_24,h_1080,w_1920/v1548896832/portfolio/rsvp/jonathan-petersson-614702-unsplash.jpg"
const dinner = "https://res.cloudinary.com/momojunzi/image/upload/c_scale,q_24,h_1080,w_1920/v1548896833/portfolio/rsvp/rawpixel-754045-unsplash.jpg"
const awards = "https://res.cloudinary.com/momojunzi/image/upload/c_scale,q_24,h_1080,w_1920/v1549147819/portfolio/rsvp/ariel-besagar-497034-unsplash.jpg"


const imageData = [
    {
        text: "Casino Games",
        image: "https://res.cloudinary.com/momojunzi/image/upload/c_scale,q_24,h_1080,w_1920/v1548896832/portfolio/rsvp/jonathan-petersson-614702-unsplash.jpg"
    },
    {
        text: "Dinner",
        image: "https://res.cloudinary.com/momojunzi/image/upload/c_scale,q_24,h_1080,w_1920/v1548896833/portfolio/rsvp/rawpixel-754045-unsplash.jpg"
    },
    {
        text: "Awards",
        image: "https://res.cloudinary.com/momojunzi/image/upload/c_scale,q_24,h_1080,w_1920/v1549147819/portfolio/rsvp/ariel-besagar-497034-unsplash.jpg"
    },
] 



class Invite extends Component {

    state = {
        count: 0, 
        opacity: 1,
        shown: true,
        imageArr: []
    }

    componentDidMount() {
        this.preloader(imageData);
        const intervalId = setInterval(this.changeImageHandler, 3000)
        this.setState({intervalId: intervalId})
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);

    }

    preloader = (arr) => {
        const imageArr = []
        arr.forEach(entry => {
            const img = new Image();
            img.src = entry.image
            imageArr.push(img);
            this.setState({imageArr:
                [...this.state.imageArr, img]
            })
        })
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
            transition: 'opacity 2s'
        }
        return(
            <div className='container'>
                <SideTab  name='invite' text='The Event'/>
                <div className='canvas'>
                    <div className='inviteTextDiv'>
                        <div className='largeTextDiv'>
                           <p className='text1'>Please join us March 16, 2019</p> 
                        </div>
                        <div className='smallTextDiv'>
                            <p className='text2'> 6:00 pm - 10:00pm</p>
                        </div>
                        <div className='smallTextDiv'>
                            <p className='text2'>At the Crowne Plaza in Union City</p>
                        </div>
                    </div>
                    <div className='eventDiv' style={fadeStyle}>
                        <p className='imageText'>{imageData[this.state.count].text}</p>
                        <div className='imageDiv' >
                            <img src={imageData[this.state.count].image} className='image' alt="invite"/>
                        </div>
                    </div>
                </div>
                <SideTab  name='rsvp' text='R.S.V.P.'/>
                <SideTab  name='directions' text='Directions'/>
            </div>
        )
    }
}

export default Invite;