import { Component } from "react";

class App extends Component {

  static defaultProps = {
    step: 1,
    initialValue: 0,
    total: 0,
    percentage: 0
  }

  // constructor() {
  //   super();
  //   this.updateFeedback = this.updateFeedback.bind(this);
  // }
 
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  updateFeedback = (e) => {
    this.setState((prevState) => ({ 
      [e]: prevState[e] + this.props.step
    }))
  }
  
  totalFeedback = e => (
    this.props.total = this.state.good + this.state.bad + this.state.neutral
  );

  positiveFeedback = () => this.props.total > 0 ? Math.round((this.state.good / this.props.total)* 100) : `0`;

  // totalFeedback = e => console.log(this.state.reduce((acc, curr)=> acc+curr, this.props.initialValue))

  render() {
    const {good, neutral, bad} = this.state
    // const {total, percentage} = this.props
    const total = this.totalFeedback(); 
    const percentage = this.positiveFeedback();

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
            <button className="btn" onClick={()=> this.updateFeedback('good')}>Good</button>
          </li>
          <li className="btn-item">
            <button className="btn" onClick={()=> this.updateFeedback('neutral')}>Neutral</button>
          </li>
          <li className="btn-item">
            <button className="btn" onClick={()=> this.updateFeedback('bad')}>Bad</button>
          </li>
        </ul>

        <h2 className="statistics-heading">Statistics</h2>
        <ul className="statistics-container">
          <li className="statistics-item">{`Good: ${good}`}</li>
          <li className="statistics-item">{`Neutral: ${neutral}`}</li>
          <li className="statistics-item">{`Bad: ${bad}`}</li>
          <li className="statistics-item">{`Total: ${total}`}</li>
          <li className="statistics-item">{`Positive feedback: ${percentage}%`}</li>
        </ul>

      </div>
    );
  }
}

export default App