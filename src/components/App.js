import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';

// Client id:  666799278722-bklquvt2kfqu027nt48hvrue1gt20k6l.apps.googleusercontent.com

const App = () => {
    return (
    <div className="ui container">       
        <BrowserRouter>
            <Header />
            <div>
                <Route path="/" exact component={StreamList} />
                <Route path="/stream/new" exact component={StreamCreate} />
                <Route path="/stream/edit" exact component={StreamEdit}/>
                <Route path="/stream/delete" exact component={StreamDelete}/>
                <Route path="/stream/show" exact component={StreamShow}/>
            </div>
        </BrowserRouter>
    </div>
    );
}

export default App; 