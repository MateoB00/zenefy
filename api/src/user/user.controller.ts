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

import { User } from "./user.entity";
import { UserService } from "./user.service";
import { ReservationService } from "../reservation/reservation.service";
import { AuthGuard } from '@nestjs/passport';
import { PartnerCompany } from 'src/partnerCompany/partnercompany.entity';
import { PartnerCompanyService } from 'src/partnerCompany/partnercompany.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private reservationService: ReservationService,
        private partnerCompanyService: PartnerCompanyService
    ) { }

    @Post()
    create(@Body() user: User): Promise<User> {
        return this.userService.create(user)
    }

    // id dans l'url
    @Get('me')
    @UseGuards(AuthGuard('jwt'))
    async findById(@Request() req: any) {
        const loggedInUser = req.user
        return this.userService.findOneById(loggedInUser.id)
    }

    @Get()
    findMany() {
        return this.userService.findMany()
    }

    @Put('me')
    @UseGuards(AuthGuard('jwt'))
    async update(@Request() req: any, @Body() user: User) {
        const loggedInUser = req.user
        return this.userService.update(loggedInUser.id, user)
    }

    @Delete('me')
    @UseGuards(AuthGuard('jwt'))
    async delete(@Request() req: any) {
        const loggedInUser = req.user
        return this.userService.delete(loggedInUser.id)
    }

    //Relations
    @Get(':user_id/reservations')
    @UseGuards(AuthGuard('jwt'))
    findAllReservations(@Param('user_id') user_id: number) {
        return this.reservationService.findByUser(user_id)
    }

    @Put(':partner_company_id/partner')
    @UseGuards(AuthGuard('jwt'))
    updatePartnerCompany(@Param('partner_company_id') id: number, @Request() req: any, @Body() partnerCompany: PartnerCompany): Promise<PartnerCompany> {
        const loggedInUser = req.user
        return this.partnerCompanyService.update(id, loggedInUser, partnerCompany)
    }
}