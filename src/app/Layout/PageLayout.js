import React, { Component } from 'react'
import Navbar from '../shared/Navbar';
import Sidebar from '../shared/Sidebar';
import Footer from '../shared/Footer';

class PageLayout extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="container-scroller">
            <Navbar />
              <div className="container-fluid page-body-wrapper">
                <Sidebar/>
                  <div className="main-panel">
                    <div className="content-wrapper">
                      { this.props.children }
                    </div>
                    <Footer/>
                  </div>
              </div>
          </div>
        )
    }
}

export default PageLayout
