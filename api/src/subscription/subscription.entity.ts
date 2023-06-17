import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { User } from '../user/user.entity';

@Entity({ name: 'subscription' })
export class Subscription {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column('text')
    description: string

    @Column('double precision')
    price_per_year: number

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

    @OneToMany(type => User, user => user.client_company)
    users: User[];
}