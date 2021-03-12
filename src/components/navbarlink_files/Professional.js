import React from 'react';
import './Professional.css';
import {Document} from 'react-pdf';

class Professional extends React.Component {
    render() {
        return (   
            <div>
                <Document file="Work Resume_YR2020.pdf"/>
                    Resume_YR2020
            </div> 
        )
    }
}
export default Professional;