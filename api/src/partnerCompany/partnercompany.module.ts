import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnerCompany } from './partnercompany.entity';
import { PartnerCompanyController } from './partnercompany.controller';
import { PartnerCompanyService } from './partnercompany.service';

@Module({
    imports: [TypeOrmModule.forFeature([PartnerCompany])],
    controllers: [PartnerCompanyController],
    providers: [PartnerCompanyService]
})
export class PartnerCompanyModule { }