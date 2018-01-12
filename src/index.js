import React from 'react';
import ReactDOM from 'react-dom';

import Data from './testData';
console.table(Data.contests)
import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
