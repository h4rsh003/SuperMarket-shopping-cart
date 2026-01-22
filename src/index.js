import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
        <Toaster
           position="top-center"
           reverseOrder={false}
           toastOptions={{
             duration: 3000,

             style: {
               background: '#1e293b',
               color: '#fff',
               marginTop: '60px',
               border: '1px solid #334155',
             },

             success: {
               iconTheme: {
                 primary: '#22d3ee', 
                 secondary: '#fff',
               },
             },

             error: {
               iconTheme: {
                 primary: '#ef4444', 
                 secondary: '#fff',
               },
             },
           }}
        />
      </Provider>
  </BrowserRouter>
);