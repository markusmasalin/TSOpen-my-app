import * as React from 'react';
import { CoursePart } from '../../types';
import Part from './Part';


const Content: React.FC<{ parts: CoursePart[] }> = (props) => {
  const {parts} = props;
    return (
      <>
        {parts.map((part: CoursePart) => {
          return(
            <Part part={part} key={part.name} />
          );
        })
        }
      </>
    );
    
          
};

export default Content;



