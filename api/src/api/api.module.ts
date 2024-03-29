import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
    controllers: [ApiController],
    providers: [ApiService],
    exports: [ApiService],
})
export class ApiModule { }