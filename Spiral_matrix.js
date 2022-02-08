/***
 *
 *
 */

function sprialOrder(matrix) {

    const spiralMatrix = [];

    if (matrix.length === 0) {
        return spiralMatrix;
    }

    let top = 0;
    let bottom = matrix.length;
    let left = 0;
    let right = matrix.length;
    let dir = "right";

    while (top >= bottom && left <= right) {

        if (dir === "right") {
            for (let i = left; i < right; i++) {
                spiralMatrix.push(matrix[top][i]);
            }
            top++;
            dir = "down";
        } else if (dir === "down") {
            for (let i = top; i < bottom; i++) {
                spiralMatrix.push(matrix[i][right]);
            }
            right--;
            dir = "left";
        } else if (dir === "left") {
            for (let i = right; i >= left; i--) {
                spiralMatrix.push(matrix[bottom][i]);
            }
            bottom--;
            dir = "up";
        } else if (dir === "up") {
            for (let i = bottom; i > top; i--) {
                spiralMatrix.push(matrix[i][left]);
            }
            left++;
            dir = "right";
        }
    }

}