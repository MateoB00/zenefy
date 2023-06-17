import {
    Body,
    Controller,
    Post,
    Get
} from '@nestjs/common';

import { CategoryService } from "./categoryservice.entity";
import { CategoryServiceService } from "./categoryservice.service";

@Controller('category_service')
export class CategoryServiceController {
    constructor(private categoryServiceService: CategoryServiceService) { }

    @Post()
    create(@Body() categoryService: CategoryService): Promise<CategoryService> {
        return this.categoryServiceService.create(categoryService)
    }

    @Get()
    findAll() {
        return this.categoryServiceService.findMany()
    }
}