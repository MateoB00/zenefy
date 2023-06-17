import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryService } from './categoryservice.entity';

@Injectable()
export class CategoryServiceService {
    constructor(@InjectRepository(CategoryService) private categoryServiceRepository: Repository<CategoryService>) { }

    async create(categoryService: CategoryService) {
        if (categoryService.name) {
            const newCategoryService = {
                name: categoryService.name,
            }

            const createdCategoryService = await this.categoryServiceRepository.save(
                newCategoryService
            )

            return createdCategoryService;
        } else {
            console.log('CategoryService: miss field.');
            throw new Error('CategoryService: miss field.');
        }
    }

    findMany() {
        const fetchAll = this.categoryServiceRepository.find(
            //exemple de condition dans le findMany
            // { where: { id: 1 } }
        )

        return fetchAll;
    }
}