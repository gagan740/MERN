import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

const App   =   () => {
    return(
        <div className="App">
            <Header message="Naming Contests" />
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