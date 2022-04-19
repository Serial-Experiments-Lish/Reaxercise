import React, { useState, Component } from 'react';

// const Display = (props) => {
//   return(
//     <div>
//       Good: {props.good} <br />
//       Neutral: {props.neutral} <br />
//       Bad: {props.bad}
//     </div>
//   )
// }

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

// class Statistics extends Component {
//   render() {
//     const body = [
//       ['Good', <StatisticLine value={this.props.good} />],
//       ['Neutral', <StatisticLine value={this.props.neutral} />],
//       ['Bad', <StatisticLine value={this.props.bad} />],
//       ['All', <StatisticLine value={this.props.all} />],
//       ['Average', <StatisticLine value={this.props.average} />],
//       ['Positive (%)', <StatisticLine value={this.props.positive} />]
//     ]

//     if(this.props.all === 0) {
//       return(
//         <h3>
//         No feedback given.  Feedme.
//         </h3>
//       )
//     }
//     return(
//       <div>
//         <Table body={body} />
//         {/* <StatisticLine text='Good: ' value={props.good} /> 
//         <StatisticLine text='Neutral: ' value={props.neutral} /> 
//         <StatisticLine text='Bad: ' value={props.bad} />
//         <StatisticLine text='All: ' value={props.all} />
//         <StatisticLine text='Average: ' value={props.average} />
//         <StatisticLine text='Positive (%): ' value={props.positive} /> */}
//       </div>
//     )
//   }
// }

// class Table extends Component {
//   render() {
//     var body = this.props.body;

//     return (
//         <table>
//             <tbody>
//                 {body.map(row => <TableRow row={row} />)}
//             </tbody>
//         </table>
//     );
//   }
// }

// class TableRow extends Component {
//   render() {
//     const row = this.props.row;
    
//     return (
//         <tr>
//             {row.map(val => <td>{val}</td>)}
//         </tr>
//     )
//   }
// }

// const StatisticLine = (props, value) => {
//   return(
//     <p>{props.value}</p>
//     // {/* <p>{props.text} {props.value}</p> */}
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const goodStats = () => setGood(good + 1);
//   const neutralStats = () => setNeutral(neutral + 1);
//   const badStats = () => setBad(bad + 1);

//   return (
//     <div>
//       <h1>Feedme Feedback</h1>
//       <Button onClick={goodStats} text='Good' />
//       <Button onClick={neutralStats} text='Neutral' />
//       <Button onClick={badStats} text='Bad' />
//       <h1>Statistic-tac-toe</h1>
//       <Statistics good={good} neutral={neutral} bad={bad} 
//       all={good + neutral + bad} 
//       average={(good + neutral + bad)/3}
//       positive={(good/(good + neutral + bad) * 100).toFixed(2)} />
//       {/* <Display good={good} neutral={neutral} bad={bad} />
//       <p>All: {good + neutral + bad} </p>
//       <p>Average: {(good + neutral + bad)/3} </p>
//       <p>Positive: {(good/(good + neutral + bad) * 100).toFixed(2)}% </p> */}
//     </div>
//   );
// }

// export default App;

//The upper section contains the previously completed assignments.

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  // const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])
  const [points, setPoints] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0})

  const generateAnecdote = () => {
      setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const generatePoints = () => {
    // const copy = [...points]

    // copy[selected] += 1;

    // setPoints(copy);

    setPoints({...points,
    [selected]: points[selected] + 1
    })
  }
  const generateMax = () => {
    let max = -1
    let maxPoints = -1
    for (let point in points) {
      if (points[point] > max) {
        maxPoints = point;
        max = points[point];
      }
    }
    return maxPoints
  }

  return (
    <div>
      <h1>WINspirational Anecdotes</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {points[selected]} votes</p>
      <Button onClick={generatePoints} text='Vote' />
      <Button onClick={generateAnecdote} text='Anecdotenator' />
      <br />
      <br />
      <h1>Best Anecdote (Most Votes)</h1>
      <p>{anecdotes[generateMax()]}</p>
      <p>Has {points[generateMax()]} votes</p>
    </div>
  )
}

export default App;
