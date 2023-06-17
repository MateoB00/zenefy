import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { User } from '../user/user.entity';

@Entity({ name: 'client_company' })
export class ClientCompany {
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

    @Column()
    nb_employe: number;

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

    @OneToMany(type => User, user => user.client_company)
    users: User[];
}