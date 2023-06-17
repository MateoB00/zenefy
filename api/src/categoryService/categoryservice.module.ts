import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './categoryservice.entity';
import { CategoryServiceController } from './categoryservice.controller';
import { CategoryServiceService } from './categoryservice.service';

@Module({
    imports: [TypeOrmModule.forFeature([CategoryService])],
    controllers: [CategoryServiceController],
    providers: [CategoryServiceService]
})
export class CategoryServiceModule { }