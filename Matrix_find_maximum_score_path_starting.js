let N = 4, M = 6;

// Function to calculate max path in matrix
function findMaxPath(mat) {

    // To find max val in first row
    let res = -1;
    for (let i = 0; i < M; i++)
        res = Math.max(res, mat[0][i]);

    for (let i = 1; i < N; i++) {
        res = -1;
        for (let j = 0; j < M; j++) {

            // When all paths are possible
            if (j > 0 && j < M - 1)
                mat[i][j] += Math.max(mat[i - 1][j],
                    Math.max(mat[i - 1][j - 1],
                        mat[i - 1][j + 1]));

            // When diagonal right is not possible
            else if (j > 0)
                mat[i][j] += Math.max(mat[i - 1][j],
                    mat[i - 1][j - 1]);

            // When diagonal left is not possible
            else if (j < M - 1)
                mat[i][j] += Math.max(mat[i - 1][j],
                    mat[i - 1][j + 1]);

            // Store max path sum
            res = Math.max(mat[i][j], res);
        }
    }
    return res;
}

// Driver Code
let mat = [[10, 10, 2, 0, 20, 4],
[1, 0, 0, 30, 2, 5],
[0, 10, 4, 0, 2, 0],
[1, 0, 2, 20, 0, 4]];

document.write(findMaxPath(mat));