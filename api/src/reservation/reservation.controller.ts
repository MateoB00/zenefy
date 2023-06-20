import {
    Body,
    Controller,
    Get,
    Param,
    Request,
    Post,
    Put,
    UseGuards
} from '@nestjs/common';

import { Reservation } from "./reservation.entity";
import { ReservationService } from "./reservation.service";
import { AuthGuard } from '@nestjs/passport';

@Controller('reservation')
export class ReservationController {
    constructor(private reservationService: ReservationService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    create(@Request() req: any, @Body() reservation: Reservation): Promise<Reservation> {
        const loggedInUser = req.user
        return this.reservationService.create(reservation, loggedInUser)
    }

    // id dans l'url
    @Get(':id')
    findById(@Param('id') id: number) {
        return this.reservationService.findOneById(id)
    }

    @Get('partner/:partnerId')
    findByUser(@Param('partnerId') partnerId: number) {
        return this.reservationService.findByPartner(partnerId)
    }

    @Get()
    findMany() {
        return this.reservationService.findMany()
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() reservation: Reservation): Promise<Reservation> {
        return this.reservationService.update(id, reservation)
    }
}