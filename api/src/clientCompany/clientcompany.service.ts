import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientCompany } from './clientcompany.entity';

@Injectable()
export class ClientCompanyService {
    constructor(@InjectRepository(ClientCompany) private clientCompanyRepository: Repository<ClientCompany>) { }

    async create(clientCompany: ClientCompany) {
        const newClientCompany = {
            name: clientCompany.name,
            siret: clientCompany.siret,
            address: clientCompany.address,
            num_phone: clientCompany.num_phone,
            nb_employe: clientCompany.nb_employe,
        }

        const createdClientCompany = await this.clientCompanyRepository.save(
            newClientCompany
        )
        return createdClientCompany;
    }

    async findOneById(id: number) {
        const fetchClientById = await this.clientCompanyRepository.findOne({
            where: { id: id }
        })

        if (!fetchClientById) {
            console.log('Entreprise cliente non trouvé');
            throw new Error('Entreprise cliente  non trouvé.');
        }

        return fetchClientById;
    }

    findMany() {
        const fetchAll = this.clientCompanyRepository.find(
            //exemple de condition dans le findMany
            // { where: { id: 1 } }
        )

        return fetchAll;
    }

    async update(id: number, clientCompany: ClientCompany) {
        const existingClientCompany = await this.clientCompanyRepository.findOne({
            where: { id: id }
        })

        Object.assign(existingClientCompany, clientCompany)

        const updateClientCompany = await this.clientCompanyRepository.save(existingClientCompany)

        return updateClientCompany
    }
}