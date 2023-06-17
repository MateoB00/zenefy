import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Put
} from '@nestjs/common';

import { ClientCompany } from "./clientcompany.entity";
import { ClientCompanyService } from "./clientcompany.service";

@Controller('client_company')
export class ClientCompanyController {
    constructor(private clientCompanyService: ClientCompanyService) { }

    @Post()
    create(@Body() clientCompany: ClientCompany): Promise<ClientCompany> {
        return this.clientCompanyService.create(clientCompany)
    }

    // id dans l'url
    @Get(':id')
    findById(@Param('id') id: number) {
        return this.clientCompanyService.findOneById(id)
    }

    @Get()
    findMany() {
        return this.clientCompanyService.findMany()
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() clientCompany: ClientCompany): Promise<ClientCompany> {
        return this.clientCompanyService.update(id, clientCompany)
    }
}