/**
 * Create a grades object that stores a set of student grades in an object. Provide a function for adding a 
 * grade and a function for displaying the student’s grade average.
 */

var grades = {
  grade: [],
  
  add: function (gradeArr) {
    this.grade.push(gradeArr);
  },
  
  average: function () {
    return this.grade.reduce(sum) / this.grade.length;
  }
  
};

/**
 * This sum helper function can calculate x-D array.
 * @param prev
 * @param curr
 * @returns {*}
 */
function sum(prev, curr) {
  prev = Array.isArray(prev) ? prev.reduce(sum) : prev;
  curr = Array.isArray(curr) ? curr.reduce(sum) : curr;
  
  return prev + curr;
}

// test
grades.add([[1, 2], [3, 4]]);
grades.add([[5, 6], [7, 8]]);
grades.add([9, 10, 11, 12]);

console.log(grades.average());

