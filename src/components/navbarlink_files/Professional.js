import React from 'react';
import './Professional.css';
// import {Document} from 'react-pdf';
import resume from '../media/resume/Work Resume_YR2020.pdf';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Professional extends React.Component {
    render() {
        return (   
            <div>
                <Document file={resume} className="resume">
                    <Page pageNumber={1} />
                    <Page pageNumber={2} />
                </Document>

                <div className="myWhy">
                    <h1> Why I do what I do </h1>
                    <div>
                        <p> 
                            My name is Vanessa and my WHY is to seek out and gain knowledge 
                            and understanding. HOW I do that is by asking clarifying questions. 
                            What I bring to new environments is my natural drive to build trusting 
                            relationships to have a positive impact, especially with people. 
                            I am open-minded and patient with others. 
                            My ultimate goal in life to learn more about the world I live in and 
                            to share knowledge with those around me. 
                        </p>
                    </div>
                
                </div>
                
            
                <div>
                    <h1 className="contact"> If you're interested in working with me, or have any 
                        questions, feel free to contact me!</h1>
                    <h3 className="contact"> Cellphone: (505) 417-5080 </h3>
                    <h3 className="contact"> Work Email: vannjackson16@gmail.com </h3>
                    </div>
            </div> 
            
        )
    }
}
export default Professional;