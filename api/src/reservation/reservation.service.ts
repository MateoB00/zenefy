import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';

@Injectable()
export class ReservationService {
    constructor(@InjectRepository(Reservation) private reservationRepository: Repository<Reservation>) { }

    async create(reservation: Reservation) {
        const newReservation = {
            done: reservation.done,
            accepted: reservation.accepted,
            partner_company: reservation.partner_company,
            user: reservation.user,
            service: reservation.service,
            started_at: reservation.started_at,
            ended_at: reservation.ended_at,
        }

        const createdReservation = await this.reservationRepository.save(
            newReservation
        )
        return createdReservation;
    }

    async findOneById(id: number) {
        const fetchClientById = await this.reservationRepository.findOne({
            where: { id: id }
        })

        if (!fetchClientById) {
            console.log('Reservation non trouvé');
            throw new Error('Reservation non trouvé.');
        }

        return fetchClientById;
    }

    // findByUser(user_id: number) {
    //     const fetchByUserId = this.reservationRepository.find(
    //         // exemple de condition dans le findMany
    //         { where: { user_id: user_id } }
    //     )

    //     return fetchByUserId;
    // }

    findMany() {
        const fetchAll = this.reservationRepository.find(
            //exemple de condition dans le findMany
            // { where: { id: 1 } }
        )

        return fetchAll;
    }

    async update(id: number, reservation: Reservation) {
        const existingReservation = await this.reservationRepository.findOne({
            where: { id: id }
        })

        Object.assign(existingReservation, reservation)

        const updateReservation = await this.reservationRepository.save(existingReservation)

        return updateReservation
    }
}