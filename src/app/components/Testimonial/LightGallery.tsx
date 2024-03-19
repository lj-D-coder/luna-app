"use client"
import React, { Component } from 'react';
import { render } from 'react-dom';
import './lightGallery.module.css';

import LightGallery from 'lightgallery/react';
import { LightGallerySettings } from 'lightgallery/lg-settings';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';





// interface AppProps {}
// interface AppState {
//   settings: LightGallerySettings;
// }

// class App extends Component<AppProps, AppState> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'React',
//     };
//   }

const Testimony = () => {
  return (
    <>
      <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
        <a
          data-lg-size="1400-1400"
          className="gallery-item"
          data-iframe="true"
          data-src="https://www.lightgalleryjs.com/pdf/sample.pdf"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&q=80"
          />
        </a>
        <a
          className="gallery-item"
          data-src="https://www.youtube.com/watch?v=UIoI9iKGqtE"
          key="4"
        >
          <img
            style={{ maxWidth: '400px' }}
            className="img-responsive"
            alt=""
            src="https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
          />
        </a>
      </LightGallery>
    </>
  );
};

export default Testimony;
