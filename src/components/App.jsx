import { useState } from 'react';
import { Statistics } from './Statistics'
import { FeedbackOptions } from './FeedbackOptions'
import { Section, Notification } from "./Section";
import PropTypes from 'prop-types';

export default function App()  {

  const [value, setValue] = useState({good: 0, neutral: 0, bad: 0});
  let total = Object.values(value);

  const updateFeedback = (ev) => {
    setValue((prevState) => ({ 
      ...prevState,
      [ev]: prevState[ev] + 1
    }))
  }

  total = total.reduce((acc, curr) => acc + curr)
  
  const positiveFeedback = () => total > 0 ? Math.round((value.good / total) * 100) : 0
  
  const {good, neutral, bad} = value
  const percentage = positiveFeedback();

  return (
    <div
      style={{
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
      options={Object.keys(value)}
      onLeaveFeedback={updateFeedback}/>
      {total 
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

App.propTypes = {
  step: PropTypes.number,
  initialValue: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
}