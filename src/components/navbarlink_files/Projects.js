import React from 'react';
import './Projects.css'; 
// import nmPoem from '../media/projects/New Mexico (poem) (11-6-2015).docx';
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// import Content from './Content';

class Projects extends React.Component {
    render() {
        return (    
            <div>
                <ul> 
                    <a href="https://github.com/Vannah-22?tab=repositories" target='_blank'>
                    Check out my computer-coding projects!
                    </a> 
                </ul>
 
                <ul>
                    <a href="https://github.com/Vannah-22/good_listener_Chatbot" target='blank'>
                    Here's my current project!
                    </a>
                </ul>

                {/* <div className="poem"> 
                    <Document file={nmPoem} className="nmPoem">
                        <Page pageNumber={1} />
                    </Document>
                </div> */}
            </div>  

        )
    }
}
export default Projects;