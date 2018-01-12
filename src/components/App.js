import React from 'react';
import Header from './Header';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state  =   { test: 42 };
    }

    headerState =   {
        pageHeader: "Naming Contests!!"
    };

    componentDidMount(){
        // timers, listeners
    }
    componentWillMount(){
        // Clean  timers, listeners
    }

    render(){
        return(
            <div className="App">
                <Header message={this.headerState.pageHeader} />
                <a href="https://www.youtube.com/watch?v=fxSlnGV9CVg&list=PLndrmkbqEI8WrbdSUmxu0mxOB8ohahLrZ&index=16">MERN</a>
                <div>{this.state.test}</div>
            </div>
        )
    }
}
// const App   =   () => {
//     return(
//         <div className="App">
//             <Header message="Naming Contests" />
//             <a href="https://www.youtube.com/watch?v=lCnxT19aDdg&index=12&list=PLndrmkbqEI8WrbdSUmxu0mxOB8ohahLrZ">MERN</a>
//         </div>
//     )
// }

// App.defaultProps   =   {
//     headerMessage: 'Hello!'
// }


export default App;