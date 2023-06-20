import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Query,
    UseGuards
} from '@nestjs/common';

import { Service } from "./service.entity";
import { ServiceService } from "./service.service";
import { AuthGuard } from '@nestjs/passport';

@Controller('service')
export class ServiceController {
    constructor(private serviceService: ServiceService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    create(@Body() service: Service): Promise<Service> {
        return this.serviceService.create(service)
    }

    // id dans l'url
    @Get(':id')
    findById(@Param('id') id: number) {
        return this.serviceService.findOneById(id)
    }

    @Get('partner/:partner_id')
    findByPartner(@Param('partner_id') partner_id: number) {
        return this.serviceService.findByPartner(partner_id)
    }

    @Get()
    findMany() {
        return this.serviceService.findMany()
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() service: Service): Promise<Service> {
        return this.serviceService.update(id, service)
    }

    @Get('category_city/:category_name/:city')
    async findByCategoryAndCity(
        @Param('category_name') category: string,
        @Param('city') city: string,
    ) {
        const services = await this.serviceService.findByCategoryAndCity(category, city);

        return services;
    }
}