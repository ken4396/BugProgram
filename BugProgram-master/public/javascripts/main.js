let orderHistory;

function init() {
  console.log('OK');
  orderHistory = new OrderHistory();
  orderHistory.sendOrderHistory('/', OrderHistory.prototype.showOrderHistory);
  // orderHistory.sendUserName('/', OrderHistory.prototype.showUserName);
}

/**
 * OrderHistory Constructor
 */
function OrderHistory() {
  this.PAGENATION_MAX = 50;
}

/**
 * sendOrderHistory
 */
OrderHistory.prototype.sendOrderHistory = function(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener('load', callback);
  xhr.open('GET', 'http://localhost:3000/getOrderHistory' + url);
  xhr.responseType = 'json';
  xhr.send();
};

OrderHistory.prototype.sendUserName = function(url, callback) {
  let id = 1;
  let xhr = new XMLHttpRequest();
  xhr.addEventListener('load', callback);
  xhr.open('GET', 'http://localhost:3000/getUsername?id=' + id);
  xhr.responseType = 'json';
  xhr.send();
}

OrderHistory.prototype.showUserName = function(res) {
  let name = res.target.response.name;
  document.querySelector('.header span').innerText += name;
}

/**
 * showOrderHistory
 */
OrderHistory.prototype.showOrderHistory = function(res) {
  let orderHistoryList = res.target.response;
  let listStart = 0;
  let orderHistoryListLimit = getOrderHistoryListLimit(orderHistoryList, listStart);
  let currentBalance = getCurrentBalance(orderHistoryList);
  let pagenationInt = getPagenationInt(orderHistoryList);


  showCurrentBalance(currentBalance);
  showOrderHistory(orderHistoryListLimit);
  showPagenation(pagenationInt);
}

/**
 * getCurrentBalance
 */
function getCurrentBalance(list) {
  let currentBalance = list[0].balance
  return currentBalance;
}

/**
 * getMaxColumn
 */
function getMaxColumn(list) {
  /**
   * バグ混入
   */
  let maxColumn = list.length * 2;
  return maxColumn;
}

/**
 * getPagenation
 */
function getPagenationInt(list) {
  let maxColumn = getMaxColumn(list);
  let pagenationInt = Math.ceil(maxColumn / 50);
  return pagenationInt;
};

/**
 * orderHistoryListLimit
 */
function getOrderHistoryListLimit(list, start) {
  let orderHistoryListLimit = [];
  for (var i = 0, max = list.length; i < max; i++) {
    if (start <= i && i < orderHistory.PAGENATION_MAX) {
      orderHistoryListLimit.push(list[i]);
    }
  }
  return orderHistoryListLimit;
}

/**
 * showOrderHistory
 */
function showOrderHistory(list) {
  let count = 0;
  list.forEach(function(row) {
    let div = document.createElement('div');
    div.setAttribute('class', 'order_history_column flex');
    document.querySelector('.order_history_table').appendChild(div);

	let getDate = document.createElement('div');
	if (count == 0) {
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate();
		getDate.innerText = year + '-' + month + '-' + day;
	} else if (row.id > 50) {
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate()-1;
		getDate.innerText = year + '-' + month + '-' + day;
	}
	if(row.id <= 50){
		getDate.innerText = 'default';
	}
	div.appendChild(getDate)	;

    count += 1;

    let columnNum = document.createElement('div');
    columnNum.innerText = 'No.' + count;
    div.appendChild(columnNum);
	  
    let id = document.createElement('div');
    id.innerText = row.id;
    div.appendChild(id);

    let productName = document.createElement('div');
    if (!row.product_name) {
      row.product_name = '未入力';
    }
    productName.innerText = row.product_name;
    div.appendChild(productName);

    let productPrices = document.createElement('div');
    if (!row.product_prices) {
      row.product_prices = 0;
    }
    productPrices.innerText = '¥' + yenParse(row.product_prices);
    div.appendChild(productPrices);

    let balance = document.createElement('div');
    if (!row.balance) {
      row.balance = 0;
    }
    balance.innerText = '¥' + yenParse(row.balance);
    div.appendChild(balance);
  });
};


/**
 * showCurrentBalance
 */
function showCurrentBalance(currentBalance) {
  document.querySelector('.contents p').innerText += '¥' + yenParse(currentBalance);
};


/**
 * showPagenation
 */
function showPagenation(num) {
  let parentElm = document.querySelector('.pagenation.flex');
  let flag = true;

  if (num >= 5) {
    flag = false;
    num = 4;
  }
  
  for (var i = 1; i <= num; i++) {
    let button = document.createElement('button');
    button.innerText = i;
    parentElm.appendChild(button);
  }

  if (!flag) {
    let over = document.createElement('p');
    over.innerText = '...';
    parentElm.appendChild(over);
  }

  let nextButton = document.createElement('button');
  nextButton.innerText = '>';
  parentElm.appendChild(nextButton);

}

/**
 * yenParse
 */
function yenParse(yen) {
  let yenString = String(yen);
  let yenArray = [];
  let yenParseString = '';
  for (var i = 1, max = yenString.length; i < max; i++) {
    if (i % 3 == 0) {
      yenArray.unshift(yenString.substr(i * -1, 3));
    }
  }
  yenArray.unshift(yenString.substr(0, yenString.length - yenArray.length * 3));
  for (var i = 0, max = yenArray.length; i < max; i++) {
    yenParseString += yenArray.shift();
    if (i != max - 1) {
      yenParseString += ',';
    }
  }
  return yenParseString;
}

window.addEventListener('load', init);