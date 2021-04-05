import React from 'react';
import { CoursePart } from '../../types';

const Part: React.FC<{ part: CoursePart }> = ({ part }) => {

  console.log(part, "part");
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  switch (part.name) {
    case 'Fundamentals':
      return (
        <p>
          Name: {part.name} | Description: {part.description} | Exercises:{' '}
          {part.exerciseCount}
        </p>
      );

    case 'Using props to pass data':
      return (
        <p>
          Name: {part.name} | Group project count: {part.groupProjectCount} |
          Exercises: {part.exerciseCount}
        </p>
      );
    case 'Deeper type usage':
      return (
        <p>
          Name: {part.name} | Description: {part.description} |  Exercises: {part.exerciseCount} | Exercise
          submission link: {part.exerciseSubmissionLink}
        </p>
      );
    case 'A note about defining object types':
      return (
        <p>
          Name: {part.name} | Description: {part.description} |  Exercises: {part.exerciseCount}
        </p>
      );
      
    default: return assertNever(part);

  }
};

export default Part;