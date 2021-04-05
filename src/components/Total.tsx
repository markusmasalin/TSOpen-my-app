import * as React from 'react';
import { CoursePart } from '../../types';

interface TotalProps {
    parts: CoursePart[]
    
}


const Total: React.FC<TotalProps> = ({parts}) => { 

    const total = parts.reduce((carry, part) => carry + part.exerciseCount, 0);

    return (
        <>
        <p>
          Number of exercises{" "}
          {total}
        </p>
        </>
    );
};

export default Total;