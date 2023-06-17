import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put
} from '@nestjs/common';

import { Service } from "./service.entity";
import { ServiceService } from "./service.service";

@Controller('service')
export class ServiceController {
    constructor(private serviceService: ServiceService) { }

    @Post()
    create(@Body() service: Service): Promise<Service> {
        return this.serviceService.create(service)
    }

    // id dans l'url
    @Get(':id')
    findById(@Param('id') id: number) {
        return this.serviceService.findOneById(id)
    }

    // @Get('partner/:partner_id')
    // findByPartner(@Param('partner_id') partner_id: number) {
    //     return this.serviceService.findByPartner(partner_id)
    // }

    @Get()
    findMany() {
        return this.serviceService.findMany()
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() service: Service): Promise<Service> {
        return this.serviceService.update(id, service)
    }
}