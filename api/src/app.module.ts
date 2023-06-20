import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConnectionConfig } from './configTypeOrm/typeorm.config';
import { UserModule } from './user/user.module';
import { ContactModule } from './contact/contact.module';
import { ClientCompanyModule } from './clientCompany/clientcompany.module';
import { PartnerCompanyModule } from './partnerCompany/partnercompany.module';
import { ReservationModule } from './reservation/reservation.module';
import { ServiceModule } from './service/service.module';
import { CategoryServiceModule } from './categoryService/categoryservice.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { AuthModule } from './auth/auth.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeormConnectionConfig),
    UserModule,
    ContactModule,
    ClientCompanyModule,
    PartnerCompanyModule,
    ReservationModule,
    ServiceModule,
    CategoryServiceModule,
    SubscriptionModule,
    AuthModule,
    ApiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
