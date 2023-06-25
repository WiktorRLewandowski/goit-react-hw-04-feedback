import { Component } from "react";
import { Statistics } from './Statistics'
import { FeedbackOptions } from './FeedbackOptions'
import { Section, Notification } from "./Section";
import PropTypes from 'prop-types';

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

  static propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
    total: PropTypes.number,
    percentage: PropTypes.number,
  }

  updateFeedback = (e) => {
    this.setState((prevState) => ({ 
      [e]: prevState[e] + this.props.step
    }))
  }
  
  totalFeedback = e => (
    this.total = this.state.good + this.state.bad + this.state.neutral
  );

  positiveFeedback = () => 
  this.total > 0 
  ? Math.round((this.state.good / this.total) * 100) 
  : 0;

  // totalFeedback = e => console.log(this.state.reduce((acc, curr)=> acc+curr, this.props.initialValue))

  render() {
    const {good, neutral, bad} = this.state
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
        <Section title='Please, leave feedback!'>

        <FeedbackOptions
        options={Object.keys(this.state)}
        onLeaveFeedback={this.updateFeedback}/>

        {this.totalFeedback() 
        ? <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        percentage={percentage}/>
        : <Notification message="There is no feedback :("/>
        }
        
        </Section>
      </div>
    );
  }
}

export default App