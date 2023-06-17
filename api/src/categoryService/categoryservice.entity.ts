import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Service } from '../service/service.entity';

@Entity({ name: 'category_service' })
export class CategoryService {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Service, service => service.category_service)
    services: Service[];
}