import styles from './DSR.styles';
import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
} from 'react-native';
import { DataTable } from 'react-native-paper';
import commaNumber from 'comma-number';

import useDSR from './DSR.hook';

const DSR = () => {
  const {
    // States
    stocks,
    // Variables
    totalQuantity,
    totalSold,
    totalLeftOver,
    totalAmount,
    // Functions
    changeValueOf,
  } = useDSR();

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
              <DataTable.Cell style={styles.row}>
                <View>
                  <TextInput
                    placeholder="Out"
                    onChangeText={out => changeValueOf('out', out, i)}
                    value={String(stock.sold)}
                  />
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={styles.row}>
                <View>
                  <TextInput
                    placeholder="Left Over"
                    onChangeText={leftOver => changeValueOf('leftOver', leftOver, i)}
                    value={String(stock.leftOver)}
                  />
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={styles.row}>
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
              <Text>{totalQuantity}</Text>
            </View>
          </DataTable.Cell>
          <DataTable.Cell style={styles.row}>
            <View>
              <TextInput
                placeholder="Total"
                onChangeText={total => null}
                value={totalSold}
              />
            </View>
          </DataTable.Cell>
          <DataTable.Cell style={styles.row}>
            <View>
              <TextInput
                placeholder="Total"
                onChangeText={total => null}
                value={totalLeftOver}
              />
            </View>
          </DataTable.Cell>
          <DataTable.Cell style={styles.row}>
            <View>
              <Text>Php {totalAmount}</Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </ScrollView>
  );
}

export default DSR;