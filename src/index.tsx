import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Page as Page2} from './question-02';
import {Page as Page3} from './question-03';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/1" element={<div>No page...just jest tests</div>} />
            <Route path="/2" element={<Page2 />} />
            <Route path="/3" element={<Page3 />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
