import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from './components/layout/Header'
import StreamCreate from './components/streams/StreamCreate'
import StreamEdit from './components/streams/StreamEdit'
import StreamShow from './components/streams/StreamShow'
import StreamDelete from './components/streams/StreamDelete'
import StreamList from './components/streams/StreamList'

const App = () => {  
    return (
        <div className="ui container">
            <Header />
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/create" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );  
}

export default App;
