import { useState } from 'react';
import commaNumber from 'comma-number';

const useDSR = () => {
  const [stocks, setStocks] = useState<Array<any>>([
    {
      name: 'Cheese',
      quantity: 100,
      sold: 50,
      leftOver: (100 - 50),
      price: 10,
    },
    {
      name: 'Hotdog',
      quantity: 50,
      sold: 23,
      leftOver: (50 - 23),
      price: 20,
    },
    {
      name: 'Pita Wrap',
      quantity: 300,
      sold: 79,
      leftOver: (300 - 79),
      price: 15,
    },
    {
      name: 'Tomatoes',
      quantity: 130,
      sold: 43,
      leftOver: (130 - 43),
      price: 7,
    },
    {
      name: 'Cheese',
      quantity: 100,
      sold: 50,
      leftOver: (100 - 50),
      price: 10,
    },
    {
      name: 'Hotdog',
      quantity: 50,
      sold: 23,
      leftOver: (50 - 23),
      price: 20,
    },
    {
      name: 'Pita Wrap',
      quantity: 300,
      sold: 79,
      leftOver: (300 - 79),
      price: 15,
    },
    {
      name: 'Tomatoes',
      quantity: 130,
      sold: 43,
      leftOver: (130 - 43),
      price: 7,
    },
    {
      name: 'Cheese',
      quantity: 100,
      sold: 50,
      leftOver: (100 - 50),
      price: 10,
    },
    {
      name: 'Hotdog',
      quantity: 50,
      sold: 23,
      leftOver: (50 - 23),
      price: 20,
    },
    {
      name: 'Pita Wrap',
      quantity: 300,
      sold: 79,
      leftOver: (300 - 79),
      price: 15,
    },
    {
      name: 'Tomatoes',
      quantity: 130,
      sold: 43,
      leftOver: (130 - 43),
      price: 7,
    },
    {
      name: 'Cheese',
      quantity: 100,
      sold: 50,
      leftOver: (100 - 50),
      price: 10,
    },
    {
      name: 'Hotdog',
      quantity: 50,
      sold: 23,
      leftOver: (50 - 23),
      price: 20,
    },
    {
      name: 'Pita Wrap',
      quantity: 300,
      sold: 79,
      leftOver: (300 - 79),
      price: 15,
    },
    {
      name: 'Tomatoes',
      quantity: 130,
      sold: 43,
      leftOver: (130 - 43),
      price: 7,
    },
    {
      name: 'Cheese',
      quantity: 100,
      sold: 50,
      leftOver: (100 - 50),
      price: 10,
    },
    {
      name: 'Hotdog',
      quantity: 50,
      sold: 23,
      leftOver: (50 - 23),
      price: 20,
    },
    {
      name: 'Pita Wrap',
      quantity: 300,
      sold: 79,
      leftOver: (300 - 79),
      price: 15,
    },
    {
      name: 'Tomatoes',
      quantity: 130,
      sold: 43,
      leftOver: (130 - 43),
      price: 7,
    },
  ]);

  const changeValueOf = (field: string, newValue: number, itemIndex: number) : void => {
    newValue = typeof newValue === 'string' ?
      parseInt(newValue) :
      newValue;
    newValue = newValue || 0;

    switch (field) {
      case 'in':
        break;
      case 'out':
        setStocks(stocks => 
          stocks.map((stock, i) => {
            if (i !== itemIndex) return stock;
            return {
              ...stock,
              sold: newValue,
              leftOver: stock.quantity - newValue,
            };
          })
        );
        break;
      case 'leftOver':
        setStocks(stocks =>
          stocks.map((stock, i) => {
            if (i !== itemIndex) return stock;
            return {
              ...stock,
              leftOver: newValue,
              sold: stock.quantity - newValue,
            };
          })
        );
        break;
      default:
        null;
    }
  }

  const totalQuantity = commaNumber(stocks
    .map(stock => stock.quantity)
    .reduce((currentStockQuantity, nextStockQuantity) => currentStockQuantity + nextStockQuantity)
  );
  const totalSold = commaNumber(stocks
    .map(stock => stock.sold)
    .reduce((currentStockSold, nextStockSold) => currentStockSold + nextStockSold)
  );
  const totalLeftOver = commaNumber(stocks
    .map(stock => stock.leftOver)
    .reduce((currentStockLeftover, nextStockLeftover) => currentStockLeftover + nextStockLeftover)
  );
  const totalAmount = commaNumber(
    stocks
      .map(stock => stock.price * stock.sold)
      .reduce((currentStockAmount, nextStockAmount) => currentStockAmount + nextStockAmount)
  );

  return {
    // States
    stocks,
    // Variables
    totalQuantity,
    totalSold,
    totalLeftOver,
    totalAmount,
    // Functions
    changeValueOf,
  }
}

export default useDSR;