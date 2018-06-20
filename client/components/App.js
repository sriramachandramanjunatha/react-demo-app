import React from 'react'


// import Greetings from './Greetings'
import Navigation from './Navigation'
/*
//stateless
export default ()=>{
    return(
        <h1>!Hello from React</h1>
    );
}*/


//stateful
class App extends React.Component{
    render(){
        return(
            // <h1>Hello from React</h1>
            
            // <Greetings />
            
            <div className="container">
                <Navigation/>
                {this.props.children}
                </div>
        );  
    }
}

export default App;