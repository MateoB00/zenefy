import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientCompany } from './clientcompany.entity';
import { ClientCompanyController } from './clientcompany.controller';
import { ClientCompanyService } from './clientcompany.service';

@Module({
    imports: [TypeOrmModule.forFeature([ClientCompany])],
    controllers: [ClientCompanyController],
    providers: [ClientCompanyService]
})
export class ClientCompanyModule { }