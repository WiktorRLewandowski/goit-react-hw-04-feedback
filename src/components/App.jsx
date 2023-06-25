import { Component } from "react";

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  updateFeedback = (ev) => {
    this.setState(prevState => prevState.value + 1)
    // console.log('Click:', ev.target) 
  }

  render() {
    return (
      <div
        style={{
          // height: '100vh',

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h2 className="heading">Please, leave feedback!</h2>

        <ul className="btn-container">
          <li className="btn-item">
            <button className="btn" onClick={this.updateFeedback()}>Good</button>
          </li>
          <li className="btn-item">
            <button className="btn" onClick={this.updateFeedback()}>Neutral</button>
          </li>
          <li className="btn-item">
            <button className="btn" onClick={this.updateFeedback.bind(this)}>Bad</button>
          </li>
        </ul>

        <h2 className="statistics-heading">Statistics</h2>
        <ul className="statistics-container">
          <li className="statistics-item">{`Good: ${this.state.good}`}</li>
          <li className="statistics-item">{`Neutral: ${this.state.good}`}</li>
          <li className="statistics-item">{`Bad: ${this.state.good}`}</li>
          <li className="statistics-item">{`Total: `}</li>
          <li className="statistics-item">{`Positive feedback: `}</li>
        </ul>

      </div>
    );
  }
}

export default App