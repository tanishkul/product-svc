import * as mongoose from 'mongoose';
export interface IDatabaseConfig {
  mongoUri: string;
}

export default class Database {
  public static open({ mongoUri }: IDatabaseConfig) {
    return new Promise((resolve, reject) => {
      // Mongoose options
      const options = {
        autoIndex: true, // Don't build indexes
        bufferMaxEntries: 0,
        keepAlive: true,
        poolSize: 10, // Maintain up to 10 socket connections
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };

      mongoose.connect(mongoUri, options, async (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });

      mongoose.connection.on('error', () => {
        throw new Error(`unable to connect to database: ${mongoUri}`);
      });
    });
  }

  public static close() {
    mongoose.disconnect();
  }
}
