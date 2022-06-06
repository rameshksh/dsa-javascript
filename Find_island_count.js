/****8
 *
 * Time O(N) or O(N*M)
 * Space - O(1)
 */

function findNoOfIsland() {
    let count = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === "1") { // water;
                count++;
                dfs(grid, row, col);
            }

        }
    }

    function dfs(grid, row, col) {
        if (row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col > grid[row].length ||
            grid[row][col] === '0' // not water
        ) {
            return;
        }


        grid[row][col] = "0";
        dfs(grid, row - 1, col);
        dfs(grid, row + 1, col);
        dfs(grid, row, col - 1);
        dfs(grid, row, col + 1);
    }

    return count;
}