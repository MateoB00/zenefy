import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { PartnerCompanyService } from '../partnerCompany/partnercompany.service';


@Module({
    imports: [TypeOrmModule.forFeature([Service])],
    controllers: [ServiceController],
    providers: [ServiceService]
})
export class ServiceModule { }