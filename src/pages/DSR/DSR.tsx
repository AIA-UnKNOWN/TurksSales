import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
} from 'react-native';
import { DataTable } from 'react-native-paper';
import commaNumber from 'comma-number';

const DSR = () => {
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

  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>In</DataTable.Title>
          <DataTable.Title numeric>Out</DataTable.Title>
          <DataTable.Title numeric>LO</DataTable.Title>
          <DataTable.Title numeric>Amount</DataTable.Title>
        </DataTable.Header>

        {stocks.map((stock, i) => {
          return (
            <DataTable.Row key={i}>
              <DataTable.Cell>{`${stock.name}`}</DataTable.Cell>
              <DataTable.Cell numeric>
                <View>
                  <Text>{stock.quantity}</Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: 'flex-end' }}>
                <View>
                  <TextInput
                    placeholder="Out"
                    onChangeText={out => changeValueOf('out', out, i)}
                    value={String(stock.sold)}
                  />
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: 'flex-end' }}>
                <View>
                  <TextInput
                    placeholder="Left Over"
                    onChangeText={leftOver => changeValueOf('leftOver', leftOver, i)}
                    value={String(stock.leftOver)}
                  />
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: 'flex-end' }}>
                <View>
                  <Text>Php {commaNumber(stock.price * stock.sold)}</Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          )
        })}

        <DataTable.Row style={{ backgroundColor: '#c9c9c9' }}>
          <DataTable.Cell>Total</DataTable.Cell>
          <DataTable.Cell numeric>
            <View>
              <Text>{commaNumber(
                String(stocks
                  .map(stock => stock.quantity)
                  .reduce((currentStockQuantity, nextStockQuantity) => currentStockQuantity + nextStockQuantity))  
              )}</Text>
            </View>
          </DataTable.Cell>
          <DataTable.Cell style={{ justifyContent: 'flex-end' }}>
            <View>
              <TextInput
                placeholder="Total"
                onChangeText={total => console.log(total)}
                value={commaNumber(
                  String(stocks
                    .map(stock => stock.sold)
                    .reduce((currentStockSold, nextStockSold) => currentStockSold + nextStockSold))
                )}
              />
            </View>
          </DataTable.Cell>
          <DataTable.Cell style={{ justifyContent: 'flex-end' }}>
            <View>
              <TextInput
                placeholder="Total"
                onChangeText={total => console.log(total)}
                value={commaNumber(
                  String(stocks
                    .map(stock => stock.leftOver)
                    .reduce((currentStockLeftover, nextStockLeftover) => currentStockLeftover + nextStockLeftover))
                )}
              />
            </View>
          </DataTable.Cell>
          <DataTable.Cell style={{ justifyContent: 'flex-end' }}>
            <View>
              <Text>Php {commaNumber(
                stocks
                  .map(stock => stock.price * stock.sold)
                  .reduce((currentStockAmount, nextStockAmount) => currentStockAmount + nextStockAmount)
              )}</Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </ScrollView>
  );
}

export default DSR;