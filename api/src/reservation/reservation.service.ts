import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';
import { User } from 'src/user/user.entity';
import {UserService} from '../user/user.service'
import { PartnerCompanyService } from 'src/partnerCompany/partnercompany.service';

@Injectable()
export class ReservationService {
    constructor(@InjectRepository(Reservation) private reservationRepository: Repository<Reservation>, private userService: UserService, private partnerCompanyService: PartnerCompanyService) { }

    async create(reservation, user: User) {
        const newReservation = {
            done: reservation.done,
            accepted: reservation.accepted,
            partner_company: reservation.partner_company,
            user: user,
            service: reservation.service,
            started_at: reservation.started_at,
            ended_at: reservation.ended_at,
            title: reservation.title,
        }

        if (user.modo_partner_company) {
            const createdReservation = await this.reservationRepository.save(
                newReservation
            )

            return createdReservation
        } 
        if (user.credit_zen >= reservation.priceOfService) {
            user.credit_zen = user.credit_zen - reservation.priceOfService
            reservation['partner_company'].credit_zen = reservation['partner_company'].credit_zen + reservation.priceOfService 

            console.log(user)
            const updateUser = await this.userService.update(user.id, user)

            user.modo_partner_company = true
            const updatePartnerCompany = await this.partnerCompanyService.update(user, reservation['partner_company'])

            const createdReservation = await this.reservationRepository.save(
                newReservation
            )

            return [updateUser, updatePartnerCompany, createdReservation]
        }
        
        new Error('cannot create reservation');
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


    //Relations 

    findByUser(user: User) {
        const fetchByUserId = this.reservationRepository.find({
            relations: {
                partner_company: true,
                service: true
            },
            // exemple de condition dans le findMany
            where: {
                user: { id: user.id }
            }
        })

        return fetchByUserId;
    }

    findByPartner(partnerId: number) {
        const fetchByUserId = this.reservationRepository.find({
            where: {
                partner_company: { id: partnerId }
            }
        })

        return fetchByUserId;
    }
}