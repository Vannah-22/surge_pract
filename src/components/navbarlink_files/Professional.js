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
                    <div className="contactCard">
                        <p className="contact"> If you're interested in working with me, or have any 
                        questions, feel free to contact me!</p>
                        <p className="contact"> Cellphone: (505) 417-5080 </p>
                        <p className="contact"> Work Email: vannjackson16@gmail.com </p>
                    </div>
            </div> 
            
        )
    }
}
export default Professional;