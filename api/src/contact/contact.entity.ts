import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'contact' })
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    last_name: string;

    @Column()
    first_name: string;

    @Column()
    email: string;

    @Column({
        length: 35
    })
    num_phone: string;

    @Column("text")
    subject: string;

    @Column("text")
    message: string;

    @Column({
        type: 'datetime',
        default: () => 'NOW()',
    })
    created_at: Date

}