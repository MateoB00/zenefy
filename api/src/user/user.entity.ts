import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

import { ClientCompany } from '../clientCompany/clientcompany.entity';
import { PartnerCompany } from '../partnerCompany/partnercompany.entity';
import { Subscription } from '../subscription/subscription.entity';
import { Reservation } from '../reservation/reservation.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column('text', { nullable: true })
    address: string;

    @Column({
        default: false
    })
    admin: boolean;

    @Column({
        length: 35
    })
    num_phone: string;

    @Column('double precision', {
        default: 0
    })
    credit_zen: number;

    @Column({
        default: false
    })
    modo_client_company: boolean;

    @Column({
        default: false
    })
    modo_partner_company: boolean;

    @ManyToOne(type => ClientCompany, client_company => client_company.users)
    client_company: ClientCompany;

    @ManyToOne(type => PartnerCompany, partner_company => partner_company.users)
    partner_company: PartnerCompany;

    @ManyToOne(type => Subscription, subscription => subscription.users)
    subscription: Subscription;

    @OneToMany(type => Reservation, reservation => reservation.user)
    reservations: Reservation[];

    @Column({
        type: 'datetime',
        default: () => 'NOW()',
    })
    created_at: Date

    @Column({
        type: 'datetime',
        default: () => 'NOW()',
    })
    updated_at: Date
}