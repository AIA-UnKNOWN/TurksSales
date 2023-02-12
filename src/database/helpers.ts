import db from './initialise';

export const executeSql = (rawQuery, params, onSuccess, onError) => {
  db.transaction(tx => {
    tx.executeSql(rawQuery, params, onSuccess, onError);
  });
}