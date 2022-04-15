import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
      <p>{props.part1}: {props.exercises1} exercises</p>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
      <p>{props.part2}: {props.exercises2} exercises</p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
      <p>{props.part3}: {props.exercises3} exercises</p>
    </div>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Part1 part1={part1} exercises1={exercises1}/>
      <Part2 part2={part2} exercises2={exercises2}/>
      <Part3 part3={part3} exercises3={exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total Exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half stack application development'
  // const part1 = 'Fundamentals of React'
  const exercises1 = 10
  // const part2 = 'Using props to pass data'
  const exercises2 = 7
  // const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <>
      <Header course={course} />
      <Content />
      {/* <Content 
      part1={part1} exercises1={exercises1} 
      part2={part2} exercises2={exercises2} 
      part3={part3} exercises3={exercises3} /> */}
      <Total exercises1 exercises2 exercises3={exercises1 + exercises2 + exercises3}/>
    </>
  )
}

export default App

//I think I'm going to comment out part 1, just so you can be sure that I did it.  Shout out to ingenuity.
//Also, my math adds up to 33 exercises, but I know it should be 31... What's up with that? (Rhetorically asking but still serious.)
