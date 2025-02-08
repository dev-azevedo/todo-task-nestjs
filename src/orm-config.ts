import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: '.db/sql.db',
  synchronize: true,
  entities: [__dirname + '*/**/*.entity{.ts,.js}'],
};

