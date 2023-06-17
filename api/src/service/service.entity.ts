import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

import { PartnerCompany } from '../partnerCompany/partnercompany.entity';
import { CategoryService } from '../categoryService/categoryservice.entity';
import { Reservation } from '../reservation/reservation.entity';

enum AverageTimeForEnum {
    TEN_MINUTES = '10 minutes',
    THIRTY_MINUTES = '30 minutes',
    ONE_HOUR = '1 hour',
    TWO_HOURS = '2 hours',
}

@Entity({ name: 'service' })
export class Service {
    @PrimaryGeneratedColumn()
    id: number;

    //foreign key
    @ManyToOne(type => PartnerCompany, partner_company => partner_company.users)
    partner_company: PartnerCompany;

    //foreign key
    @ManyToOne(type => CategoryService, category_service => category_service.services)
    category_service: CategoryService;

    @OneToMany(type => Reservation, reservation => reservation.service)
    reservations: Reservation[];

    @Column()
    name: string

    @Column('double precision')
    price: number

    @Column({
        type: 'enum',
        enum: AverageTimeForEnum,
    })
    average_time: string

    @Column('text')
    description: string

    @Column({
        type: 'datetime',
        default: () => 'NOW()'
    })
    created_at: Date

    @Column({
        type: 'datetime',
        default: null
    })
    updated_at: Date
}