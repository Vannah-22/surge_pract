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
            </div> 
        )
    }
}
export default Professional;