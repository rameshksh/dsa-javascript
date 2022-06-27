/***
 *   check for the smallest value before current index
 *
 *    Time - O(N)
 *     Space - O(1)
 */

function maxProfit(prices) {
    let maxProfit = 0;
    let cheapestPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        if (price < cheapestPrice) {
            cheapestPrice = price;
        }

        const currentProfit = price - cheapestPrice;
        maxProfit = Math.max(currentProfit, maxProft);
    }

    return maxProfit;
}