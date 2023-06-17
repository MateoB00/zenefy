import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Put
} from '@nestjs/common';

import { PartnerCompany } from "./partnercompany.entity";
import { PartnerCompanyService } from "./partnercompany.service";

@Controller('partner_company')
export class PartnerCompanyController {
    constructor(private partnerCompanyService: PartnerCompanyService) { }

    @Post()
    create(@Body() partnerCompany: PartnerCompany): Promise<PartnerCompany> {
        return this.partnerCompanyService.create(partnerCompany)
    }

    // id dans l'url
    @Get(':id')
    findById(@Param('id') id: number) {
        return this.partnerCompanyService.findOneById(id)
    }

    @Get()
    findMany() {
        return this.partnerCompanyService.findMany()
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() partnerCompany: PartnerCompany): Promise<PartnerCompany> {
        return this.partnerCompanyService.update(id, partnerCompany)
    }
}