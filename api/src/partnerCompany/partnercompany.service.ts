import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PartnerCompany } from './partnercompany.entity';

@Injectable()
export class PartnerCompanyService {
    constructor(@InjectRepository(PartnerCompany) private partnerCompanyRepository: Repository<PartnerCompany>) { }

    async create(partnerCompany: PartnerCompany) {
        const newPartnerCompany = {
            name: partnerCompany.name,
            siret: partnerCompany.siret,
            address: partnerCompany.address,
            num_phone: partnerCompany.num_phone,
            iban: partnerCompany.iban,
        }

        const createdPartnerCompany = await this.partnerCompanyRepository.save(
            newPartnerCompany
        )
        return createdPartnerCompany;
    }

    async findOneById(id: number) {
        const fetchPartnerById = await this.partnerCompanyRepository.findOne({
            where: { id: id }
        })

        if (!fetchPartnerById) {
            console.log('Entreprise cliente non trouvé');
            throw new Error('Entreprise cliente  non trouvé.');
        }

        return fetchPartnerById;
    }

    findMany() {
        const fetchAll = this.partnerCompanyRepository.find(
            //exemple de condition dans le findMany
            // { where: { id: 1 } }
        )

        return fetchAll;
    }

    async update(id: number, partnerCompany: PartnerCompany) {
        const existingPartnerCompany = await this.partnerCompanyRepository.findOne({
            where: { id: id }
        })

        Object.assign(existingPartnerCompany, partnerCompany)

        const updatePartnerCompany = await this.partnerCompanyRepository.save(existingPartnerCompany)

        return updatePartnerCompany
    }
}