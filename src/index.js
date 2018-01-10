import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

const App   =   () => {
    return(
        <div className="App">
            <Header message="Naming Contests" />
            <a href="https://www.youtube.com/watch?v=lCnxT19aDdg&index=12&list=PLndrmkbqEI8WrbdSUmxu0mxOB8ohahLrZ">MERN</a>
        </div>
    )
}



// App.defaultProps   =   {
//     headerMessage: 'Hello!'
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')
);