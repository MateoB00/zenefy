import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { User } from '../user/user.entity';
import { Reservation } from '../reservation/reservation.entity';

@Entity({ name: 'partner_company' })
export class PartnerCompany {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    siret: string;

    @Column('text')
    address: string;

    @Column({
        length: 35
    })
    num_phone: string;

    @Column({
        length: 35
    })
    iban: string;

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
        default: null,
    })
    ended_at: Date

    @OneToMany(type => User, user => user.partner_company)
    users: User[];

    @OneToMany(type => Reservation, reservation => reservation.partner_company)
    reservations: Reservation[];
}