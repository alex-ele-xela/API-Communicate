import React from 'react';
import Body from '../components/Body';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display : 'Options',
      logoSize : 300
    };
  }

  onClickChange = (api) => {
    this.setState({display : api})

    if (api === 'Options') {
      this.setState({logoSize : 300})
    } else {
      this.setState({logoSize : 100})
    }
  }

  render() {
    return(
      <>
        <div className='tc sans-serif f3 ma1'>
          <img src={require('./logo.png')} alt="Logo" height={this.state.logoSize}/>
          <h5>This site communicates with Numbers API and displays its response</h5>
        </div>

        <Body display={this.state.display} click={this.onClickChange}/>
      </>
    );
  }

}

export default App;
 