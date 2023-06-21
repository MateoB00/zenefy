import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnerCompany } from './partnercompany.entity';
import { PartnerCompanyController } from './partnercompany.controller';
import { PartnerCompanyService } from './partnercompany.service';
import { Service } from '../service/service.entity';
import { ServiceService } from '../service/service.service';


@Module({
    imports: [TypeOrmModule.forFeature([PartnerCompany, Service])],
    controllers: [PartnerCompanyController],
    providers: [PartnerCompanyService, ServiceService],
    exports: [PartnerCompanyService]
})
export class PartnerCompanyModule { }