export interface CoursePartBase {
    exerciseCount: number,
};

export interface CoursePartWithDescription extends CoursePartBase {
    description: string;
}

export interface CoursePartOne extends CoursePartWithDescription {
    name: "Fundamentals";
  }
  

export interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
  }
  
export interface CoursePartThree extends CoursePartWithDescription {
    name: "Deeper type usage";
    exerciseSubmissionLink: string;
  }

export interface CoursePartFour extends CoursePartWithDescription{
    name: "A note about defining object types"
}

export  type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour;
