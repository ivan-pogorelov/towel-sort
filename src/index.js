
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let result = [];

    if (!matrix) {
      return [];
    }

    if (matrix.length === 0) {
      return [];
    }

    for (let i = 0; i < matrix.length; i++) {

      if (i % 2 !== 0) {
          result = result.concat(matrix[i].reverse());
      } else {
          result = result.concat(matrix[i]);
      }
    }

    return result;

}