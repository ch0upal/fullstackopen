import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticsLine = ({ value, text }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = (props) => {
  if (props.allCalc === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticsLine value={props.good} text="good" />
          <StatisticsLine value={props.neutral} text="neutral" />
          <StatisticsLine value={props.bad} text="bad" />
          <StatisticsLine value={props.allCalc} text="all" />
          <StatisticsLine value={props.averageCalc} text="average" />
          <StatisticsLine value={props.positiveCalc} text="positive" />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  const allCalc = good + neutral + bad;
  const averageCalc = (good - bad) / allCalc;
  const positiveCalc = `${((good / allCalc) * 100).toFixed(1)}%`;

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={incrementGood} text="good" />
      <Button handleClick={incrementNeutral} text="neutral" />
      <Button handleClick={incrementBad} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allCalc={allCalc}
        averageCalc={averageCalc}
        positiveCalc={positiveCalc}
      />
    </>
  );
};

export default App;
