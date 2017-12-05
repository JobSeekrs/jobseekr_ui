import React from 'react';

class App extends React.Component {

  constructor(props) {
         super(props);
         this.toggleClass = this.toggleClass.bind(this);
         this.state = {
             active: false,
         };
     }

     toggleClass() {
       console.log('toggleClass function in here');
      var currentState = this.state.active;
      this.setState({ active: !currentState });
     };


  render() {
    return (
      <div>
        <div id="wrapper" className={ this.state.active ? 'toggled': 'notToggled' }>
        <Navigation/>
          <div id="page-content-wrapper">
                <div className="container-fluid">
                      <button className="btn btn-secondary" id="menu-toggle"
                         onClick={this.toggleClass}>
                        Toggle Menu
                      </button>
                      <h3>Your Name</h3>

                    <p>This template hathe menu wil
                        small screens,
                        the page content will be pushed off canvas.
                      </p>
                </div>
          </div>
      </div>
    );
  }
}




export default App;

