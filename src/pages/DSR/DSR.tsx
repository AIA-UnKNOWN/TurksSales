import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import { DataTable } from 'react-native-paper';

const DSR = () => {
  const [stocks, setStocks] = useState<Array<any>>([
    {
      name: 'Cheese',
      quantity: 100,
      sold: 50,
      leftOver: (100 - 50),
    },
    {
      name: 'Hotdog',
      quantity: 50,
      sold: 23,
      leftOver: (50 - 23),
    },
    {
      name: 'Pita Wrap',
      quantity: 300,
      sold: 79,
      leftOver: (300 - 79),
    },
    {
      name: 'Tomatoes',
      quantity: 130,
      sold: 43,
      leftOver: (130 - 43),
    },
    {
      name: 'Cheese',
      quantity: 100,
      sold: 50,
      leftOver: (100 - 50),
    },
    {
      name: 'Hotdog',
      quantity: 50,
      sold: 23,
      leftOver: (50 - 23),
    },
    {
      name: 'Pita Wrap',
      quantity: 300,
      sold: 79,
      leftOver: (300 - 79),
    },
    {
      name: 'Tomatoes',
      quantity: 130,
      sold: 43,
      leftOver: (130 - 43),
    },
    {
      name: 'Cheese',
      quantity: 100,
      sold: 50,
      leftOver: (100 - 50),
    },
    {
      name: 'Hotdog',
      quantity: 50,
      sold: 23,
      leftOver: (50 - 23),
    },
    {
      name: 'Pita Wrap',
      quantity: 300,
      sold: 79,
      leftOver: (300 - 79),
    },
    {
      name: 'Tomatoes',
      quantity: 130,
      sold: 43,
      leftOver: (130 - 43),
    },
    {
      name: 'Cheese',
      quantity: 100,
      sold: 50,
      leftOver: (100 - 50),
    },
    {
      name: 'Hotdog',
      quantity: 50,
      sold: 23,
      leftOver: (50 - 23),
    },
    {
      name: 'Pita Wrap',
      quantity: 300,
      sold: 79,
      leftOver: (300 - 79),
    },
    {
      name: 'Tomatoes',
      quantity: 130,
      sold: 43,
      leftOver: (130 - 43),
    },
  ]);

  const changeValueOf = (field: string, newValue: number, itemIndex: number) : void => {
    newValue = typeof newValue === 'string' ?
      parseInt(newValue) :
      newValue;

    switch (field) {
      case 'in':
        break;
      case 'out':
        setStocks(stocks => 
          stocks.map((stock, i) => {
            if (i !== itemIndex) return stock;
            return {
              ...stock,
              sold: newValue || 0,
              leftOver: stock.quantity - newValue || 0,
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
              leftOver: newValue || 0,
              sold: stock.quantity - newValue || 0,
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
        </DataTable.Header>

        {stocks.map((stock, i) => {
          
          return (
            <DataTable.Row key={i}>
              <DataTable.Cell>{stock.name}</DataTable.Cell>
              <DataTable.Cell numeric>{stock.quantity}</DataTable.Cell>
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
            </DataTable.Row>
          )
        })}
      </DataTable>
    </ScrollView>
  );
}

export default DSR;