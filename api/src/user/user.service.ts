import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async create(user: User) {
        const existingUser = await this.userRepository.findOne({
            where: { email: user.email }
        })

        if (existingUser) {
            console.log('Utilisateur déjà existant');
            throw new Error('Utilisateur déjà existant');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.email)) {
            throw new Error("L'e-mail doit être au format valide.");
        }

        const hashedPassword = await bcrypt.hash(user.password, 10);

        const newUser = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: hashedPassword,
            address: user.address,
            num_phone: user.num_phone,
            client_company: user.client_company,
            partner_company: user.partner_company,
            subscription: user.subscription
        }

        const createdUser = await this.userRepository.save(
            newUser
        )
        return createdUser;
    }

    async findOneById(id: number) {
        const fetchUserById = await this.userRepository.findOne({
            relations: {
                reservations: true,
                partner_company: true,
                client_company: true
            },
            where: { id: id }
        })

        if (!fetchUserById) {
            console.log('Utilisateur non trouvé');
            throw new Error('Utilisateur  non trouvé.');
        }

        return fetchUserById;
    }

    async findOneByEmail(email: string): Promise<User | undefined> {
        const fetchUserByEmail = await this.userRepository.findOne({

            where: { email: email }
        })

        if (!fetchUserByEmail) {
            console.log('Utilisateur non trouvé');
            throw new Error('Utilisateur  non trouvé.');
        }

        return fetchUserByEmail;
    }

    findMany() {
        const fetchAll = this.userRepository.find(
            //exemple de condition dans le findMany
            // { where: { id: 1 } }
        )

        return fetchAll;
    }

    async update(id: number, user: User) {
        const existingUser = await this.userRepository.findOne({
            where: { id: id }
        })

        const dataUpdatedUser = {};
        for (const key in user) {
            if (user[key] !== null && user[key] !== undefined) {
                dataUpdatedUser[key] = user[key];
            }
        }

        let hashedPassword = existingUser.password;
        if (user.password) {
            hashedPassword = await bcrypt.hash(user.password, 10);
            dataUpdatedUser["password"] = hashedPassword;
        }


        const updatedUser = await this.userRepository.save({
            id: existingUser.id,
            ...dataUpdatedUser
        })

        return updatedUser
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id)
    }
}