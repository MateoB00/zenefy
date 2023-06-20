import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Request,
    Post,
    Put,
    UseGuards
} from '@nestjs/common';

import { ApiService } from './api.service';
import { PartnerCompany } from 'src/partnerCompany/partnercompany.entity';

@Controller('api')
export class ApiController {
    constructor(
        private apiService: ApiService
    ) { }
    //GOOGLE
    @Post('google/informations_company')
    async fetchInfosCompany(@Body() partnerCompany: PartnerCompany) {
        console.log(partnerCompany)
        return this.apiService.fetchDataCompany(partnerCompany)
    }
}