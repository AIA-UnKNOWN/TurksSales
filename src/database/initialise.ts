import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'turks' });

const createTablesIfNotExists = () => {

  db.transaction(tx => {
    // Creates `users` table
    tx.executeSql(
      `CREATE TABLE [IF NOT EXISTS] users (
        id INTEGER PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        password VARCHAR(255) NOT NULL,
        is_admin BOOLEAN DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
      )`,
      [],
      (sqlTxn, result) => {
        console.log('Successfully created `users` table')
      },
      error => {
        throw Error(error);
      }
    );
    // Creates `products` table
    tx.executeSql(
      `CREATE TABLE [IF NOT EXISTS] products (
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INTEGER NOT NULL,
        quantity INTEGER CHECK(quantity >= 0 AND quantity <= 999999) DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
      )`,
      [],
      (sqlTxn, result) => {
        console.log('Successfully created `products` table')
      },
      error => {
        throw Error(error);
      }
    );
    // Creates `packages` table
    tx.executeSql(
      `CREATE TABLE [IF NOT EXISTS] packages (
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
      )`,
      [],
      (sqlTxn, result) => {
        console.log('Successfully created `packages` table')
      },
      error => {
        throw Error(error);
      }
    );
    // Creates `bundles` table
    tx.executeSql(
      `CREATE TABLE [IF NOT EXISTS] bundles (
        id INTEGER PRIMARY KEY,
        product_id INTEGER,
        package_id INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (package_id) REFERENCES packages(id)
      )`,
      [],
      (sqlTxn, result) => {
        console.log('Successfully created `bundles` table')
      },
      error => {
        throw Error(error);
      }
    );
  });

  return db;
}

export default db;