import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Reservation } from '../reservation/reservation.entity';
import { PartnerCompany } from '../partnerCompany/partnercompany.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ReservationService } from '../reservation/reservation.service';
import { PartnerCompanyService } from '../partnerCompany/partnercompany.service';

@Module({
    imports: [TypeOrmModule.forFeature([User, Reservation, PartnerCompany])],
    controllers: [UserController],
    providers: [UserService, ReservationService, PartnerCompanyService],
    exports: [UserService]
})
export class UserModule { }