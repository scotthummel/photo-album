const connectionString:string = 'mongodb://scotthummel:secret@ds147510.mlab.com:47510/mongo';

import * as mongodb from 'mongodb';

export default class Database {
  public static db:mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
        this.db = db;
        console.log('connected');
    }).catch((err) => {
        console.error(err);
    });
  }
}
