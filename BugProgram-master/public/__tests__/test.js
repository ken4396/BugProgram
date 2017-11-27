window.addEventListener("load", function() {
    // mocha.setup('bdd');
    mocha.setup('tdd');

    let assert = chai.assert;

    let orderHistoryList = [
        {id: 59, product_name: 'ゲーム by Selenium', product_prices: 8000, balance: 45000},
        {id: 58, product_name: '給料 by Selenium', product_prices: 10000, balance: 53000},
        {id: 57, product_name: "ゲーム", product_prices: 8000, balance: 43000},
        {id: 56, product_name: "給料", product_prices: 10000, balance: 51000},
        {id: 55, product_name: "給料", product_prices: 10000, balance: 41000},
        {id: 54, product_name: "給料", product_prices: 10000, balance: 31000},
        {id: 53, product_name: "給料", product_prices: 10000, balance: 21000},
        {id: 52, product_name: "給料", product_prices: 3000, balance: 11000},
        {id: 51, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 50, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 49, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 48, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 47, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 46, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 45, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 44, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 43, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 42, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 41, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 40, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 39, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 38, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 37, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 36, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 35, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 34, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 33, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 32, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 31, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 30, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 29, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 28, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 27, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 26, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 25, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 24, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 23, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 22, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 21, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 20, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 19, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 18, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 17, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 16, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 15, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 14, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 13, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 12, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 11, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 10, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 9, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 8, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 7, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 6, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 5, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 4, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 3, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 2, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 1, product_name: null, product_prices: null, balance: 10000},
    ];

    let listStart = 0;

    let orderHistoryListLimit = [
        {id: 59, product_name: 'ゲーム by Selenium', product_prices: 8000, balance: 45000},
        {id: 58, product_name: '給料 by Selenium', product_prices: 10000, balance: 53000},
        {id: 57, product_name: "ゲーム", product_prices: 8000, balance: 43000},
        {id: 56, product_name: "給料", product_prices: 10000, balance: 51000},
        {id: 55, product_name: "給料", product_prices: 10000, balance: 41000},
        {id: 54, product_name: "給料", product_prices: 10000, balance: 31000},
        {id: 53, product_name: "給料", product_prices: 10000, balance: 21000},
        {id: 52, product_name: "給料", product_prices: 3000, balance: 11000},
        {id: 51, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 50, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 49, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 48, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 47, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 46, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 45, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 44, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 43, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 42, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 41, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 40, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 39, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 38, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 37, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 36, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 35, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 34, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 33, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 32, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 31, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 30, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 29, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 28, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 27, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 26, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 25, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 24, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 23, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 22, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 21, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 20, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 19, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 18, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 17, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 16, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 15, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 14, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 13, product_name: "給料", product_prices: 6000, balance: 30000},
        {id: 12, product_name: "ゲーム", product_prices: 6000, balance: 8000},
        {id: 11, product_name: "本", product_prices: 3000, balance: 10000},
        {id: 10, product_name: "給料", product_prices: 6000, balance: 30000},
    ];

    // // tdd
    suite('XMLHttpRequest callback test', function() {
        test('getOrderHistoryListLimit()メソッドのテスト', function() {
            assert.deepEqual(orderHistoryListLimit, getOrderHistoryListLimit(orderHistoryList, listStart), 'getOrderHistoryListLimit()は期待した値を返してません');
        });
        test('getCurrentBalance()メソッドのテスト', function() {
            assert.equal(45000, getCurrentBalance(orderHistoryList), 'getCurrentBalanace()は期待した値を返してません');
        });
        test('getPagenationInt()メソッドのテスト', function() {
            assert.equal(2, getPagenationInt(orderHistoryList), 'getPagenationInt()は期待した値を返してません');
        });
    });

    // bdd
    // describe('XMLHttpRequest callback test', function() {
    //     it('getOrderHistoryListLimit()メソッドのテスト', function() {
    //         // orderHistoryListLimit.should.eql(getOrderHistoryListLimit(orderHistoryList, listStart));
    //         // expect(orderHistoryListLimit).to.deep.equal(getOrderHistoryListLimit(orderHistoryList, listStart));
    //     });
    // })

    mocha.run();
});