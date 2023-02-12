import { executeSql } from '../helpers';

class Product {

  constructor() {
    this.initialise();
  }

  async initialise() : Promise<void> {
    return new Promise((resolve, reject) => {
      executeSql(
        `CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          price INTEGER NOT NULL,
          quantity INTEGER CHECK(quantity >= 0 AND quantity <= 999999) DEFAULT 0,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
        )`,
        [],
        (sqlTxn, result) => {
          console.log('Successfully created `products` table')
          resolve();
        },
        error => {
          reject(error);
          throw Error(error);
        }
      );
    });
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      executeSql(
        `SELECT * FROM products`,
        [],
        (sqlTxn, result) => {
          let products = [];
          const productsLength = result.rows.length;
          for (let i = 0; i < productsLength; i++) {
            products.push(result.rows.item(i));
          }
          resolve(products);
        },
        error => {
          reject(error);
        }
      );
    });
  }

}

export default Product;