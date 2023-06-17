import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

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

        // const hashedPassword = await bcrypt.hash(user.password, 10);

        const newUser = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
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
            where: { id: id }
        })

        if (!fetchUserById) {
            console.log('Utilisateur non trouvé');
            throw new Error('Utilisateur  non trouvé.');
        }

        return fetchUserById;
    }

    findMany() {
        const fetchAll = this.userRepository.find(
            //exemple de condition dans le findMany
            // { where: { id: 1 } }
        )

        return fetchAll;
    }

    // findAllByClientCompany(client_company_id) {
    //     const fetchAll = this.userRepository.find(
    //         //exemple de condition dans le findMany
    //         { where: { client_company_id: client_company_id } }
    //     )
    //     console.log(fetchAll);
    //     return fetchAll;
    // }

    async update(id: number, user: User) {
        const existingUser = await this.userRepository.findOne({
            where: { id: id }
        })

        Object.assign(existingUser, user)

        const updateUser = await this.userRepository.save(existingUser)

        return updateUser
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id)
    }
}