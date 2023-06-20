import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PartnerCompany } from './partnercompany.entity';
import { User } from 'src/user/user.entity';

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
            console.log('Entreprise partenaire non trouvé');
            throw new Error('Entreprise partenaire  non trouvé.');
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

    async update(user, partnerCompany: PartnerCompany) {
        if (user['modo_partner_company'] === false) {
            throw new UnauthorizedException()
        }

        const existingPartnerCompany = await this.partnerCompanyRepository.findOne({
            where: { id: partnerCompany.id }
        })

        const dataUpdatedPartnerCompany = {};
        for (const key in partnerCompany) {
            if (partnerCompany[key] !== null && partnerCompany[key] !== undefined) {
                dataUpdatedPartnerCompany[key] = partnerCompany[key];
            }
        }

        const updatePartnerCompany = await this.partnerCompanyRepository.save({
            id: existingPartnerCompany.id,
            ...dataUpdatedPartnerCompany
        })

        return updatePartnerCompany
    }
}