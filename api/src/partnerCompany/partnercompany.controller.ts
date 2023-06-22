import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Request,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PartnerCompany } from "./partnercompany.entity";
import { PartnerCompanyService } from "./partnercompany.service";
import { ServiceService } from "../service/service.service";

@Controller('partner_company')
export class PartnerCompanyController {
    constructor(private partnerCompanyService: PartnerCompanyService, private serviceService: ServiceService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    create(@Request() req: any,@Body() partnerCompany: PartnerCompany): Promise<any> {
        console.log('aaaaaaaaaaaaaa')
        const loggedInUser = req.user
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

    //Relations
    @Get(':id/services')
    @UseGuards(AuthGuard('jwt'))
    findOurServices(@Param('id') partnerCompanyId: number) {
        return this.serviceService.findByPartner(partnerCompanyId)
    }
}