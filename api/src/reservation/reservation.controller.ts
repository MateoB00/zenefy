import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Put
} from '@nestjs/common';

import { Reservation } from "./reservation.entity";
import { ReservationService } from "./reservation.service";

@Controller('reservation')
export class ReservationController {
    constructor(private reservationService: ReservationService) { }

    @Post()
    create(@Body() reservation: Reservation): Promise<Reservation> {
        return this.reservationService.create(reservation)
    }

    // id dans l'url
    @Get(':id')
    findById(@Param('id') id: number) {
        return this.reservationService.findOneById(id)
    }

    // @Get('user/:user_id')
    // findByUser(@Param('user_id') user_id: number) {
    //     return this.reservationService.findByUser(user_id)
    // }

    @Get()
    findMany() {
        return this.reservationService.findMany()
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() reservation: Reservation): Promise<Reservation> {
        return this.reservationService.update(id, reservation)
    }
}