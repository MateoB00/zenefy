import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './reservation.entity';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { UserService } from 'src/user/user.service';
import { PartnerCompanyService } from 'src/partnerCompany/partnercompany.service';
import { User } from 'src/user/user.entity';
import { PartnerCompany } from 'src/partnerCompany/partnercompany.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Reservation, User, PartnerCompany])],
    controllers: [ReservationController],
    providers: [ReservationService, UserService ,PartnerCompanyService]
})
export class ReservationModule { }