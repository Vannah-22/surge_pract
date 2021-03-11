import React from 'react';
import './Home.css';
import Content from './Content'; 

class Home extends React.Component {
    render() {
        return (    
            <Content 
                bio="Hi my name is Vanessa."
            />
        )
    }
}
export default Home;