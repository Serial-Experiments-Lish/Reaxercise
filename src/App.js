import React from 'react'

const Header = () => {
  const course = 'Half stack application development'
  return (
    <div>
      <h1>
        {course}
      </h1>
    </div>
  )
}

// const Part1 = (props) => {
//   return (
//     <div>
//       <p>{props.part1}: {props.exercises1} exercises</p>
//     </div>
//   )
// }

// const Part2 = (props) => {
//   return (
//     <div>
//       <p>{props.part2}: {props.exercises2} exercises</p>
//     </div>
//   )
// }

// const Part3 = (props) => {
//   return (
//     <div>
//       <p>{props.part3}: {props.exercises3} exercises</p>
//     </div>
//   )
// }

const Content = () => {
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
    }
  ]
  return (
    <div>
      <p>{parts[0].name}: {parts[0].exercises} Exercises</p>
      <p>{parts[1].name}: {parts[1].exercises} Exercises</p>
      <p>{parts[2].name}: {parts[2].exercises} Exercises</p>
    </div>
  )
}

const Total = () => {
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
    }
  ]
  return (
    <div>
      <p>Total Exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [
      {
      name: 'Fundamentals of React',
      exercises: 10
      },
      {
      name: 'Using props to pass data',
      exercises: 7
      },
      {
      name: 'State of a component',
      exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
        {/* <p>{parts[0].name}: {parts[0].exercises} Exercises</p>
        <p>{parts[1].name}: {parts[1].exercises} Exercises</p>
        <p>{parts[2].name}: {parts[2].exercises} Exercises</p>
        <p>Total Exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p> */}
      <Content parts={course.parts} />
      {/* part1={part1} exercises1={exercises1} 
          part2={part2} exercises2={exercises2} 
          part3={part3} exercises3={exercises3} */}
      <Total parts={course.parts} />
      {/* exercises1 exercises2 exercises3={exercises1 + exercises2 + exercises3} */}
    </>
  )
}

export default App

//I think I'm going to comment out part 1, just so you can be sure that I did it.  Shout out to ingenuity.
//Also, my math adds up to 33 exercises, but I know it should be 31... What's up with that? (Rhetorically asking but still serious.)
