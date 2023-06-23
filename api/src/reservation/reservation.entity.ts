import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { PartnerCompany } from '../partnerCompany/partnercompany.entity';
import { User } from '../user/user.entity';
import { Service } from '../service/service.entity';


@Entity({ name: 'reservation' })
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: false
    })
    done: boolean;

    @Column({
        default: false
    })
    paid: boolean

    @Column()
    title: string;

    @Column({
        default: false
    })
    accepted: boolean;

    //foreign key
    @ManyToOne(type => User, user => user.reservations)
    user: User;

    //foreign key
    @ManyToOne(type => Service, service => service.reservations, { nullable: true })
    service: Service;

    //foreign key
    @ManyToOne(type => PartnerCompany, partner_company => partner_company.reservations)
    partner_company: PartnerCompany;

    @Column({
        type: 'datetime',
        default: () => 'NOW()',
    })
    created_at: Date

    @Column({
        type: 'datetime',
        default: null,
    })
    updated_at: Date

    @Column({
        type: 'datetime',
    })
    started_at: Date

    @Column({
        type: 'datetime',
    })
    ended_at: Date
}