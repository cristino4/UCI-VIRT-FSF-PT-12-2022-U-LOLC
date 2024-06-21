/*
ADD_STUDENT:
-create a new student id
-define a newStudent variable with the ID and action.payload
*/
export const ADD_STUDENT = 'ADD_STUDENT';
/*
REMOVE_STUDENT: 
-filter the student array where the id does not match action.payload
*/
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
/*
UPDATE_STUDENT:
-find the index of the student with the matching student.id
-update the student object with the action.payload object
*/
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
/*
ADD_MAJOR:
-adds a major to the state.majors object 
*/
export const ADD_MAJOR = 'ADD_MAJOR';
/*
REMOVE_MAJOR:
-from the array of state.majors objects, it filters the majors that dont match the action.payload
*/
export const REMOVE_MAJOR = 'REMOVE_MAJOR';
