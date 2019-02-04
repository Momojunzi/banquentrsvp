import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SideTab extends Component {
    
    render() {
        const linkStyle = {
            textDecoration: 'none'
        }
        const tabText = {
            writingMode: 'vertical-rl',
            textOrientation: 'sideways',
            fontSize: 50,
            textDecoration: 'none',
            color: '#4663C1',
            fontFamily: "'Fascinate Inline', cursive",
            direction: 'rtl'
        }
        return(
            <Link style={linkStyle} className={`side-tab ${this.props.name}`} to={`/${this.props.name}`}>                    
                <p style={tabText}>{this.props.text}</p>
            </Link>   
        )
    }
}

export default SideTab;