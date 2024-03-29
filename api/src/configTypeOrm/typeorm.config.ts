require('dotenv').config();
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const port: number = parseInt(<string>process.env.MYSQL_PORT) || 3306

export const typeormConnectionConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: port,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities: true
}