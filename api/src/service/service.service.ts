import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';

@Injectable()
export class ServiceService {
    constructor(@InjectRepository(Service) private serviceRepository: Repository<Service>) { }

    async create(service: Service) {
        const newService = {
            partner_company: service.partner_company,
            category_service: service.category_service,
            name: service.name,
            price: service.price,
            average_time: service.average_time,
            description: service.description,
        }

        const createdService = await this.serviceRepository.save(
            newService
        )
        return createdService;
    }

    async findOneById(id: number) {
        const fetchServiceById = await this.serviceRepository.findOne({
            relations: {
                partner_company: true,
            },
            where: { id: id }
        })

        if (!fetchServiceById) {
            console.log('Service non trouvé');
            throw new Error('Service non trouvé.');
        }

        return fetchServiceById;
    }

    findByPartner(partnerCompanyId: number) {
        const fetchByServiceId = this.serviceRepository.find({
            relations: {
                partner_company: true,
                category_service: true
            },
            where: {
                partner_company: {
                    id: partnerCompanyId
                }
            }
        }
            // exemple de condition dans le findMany
        )

        return fetchByServiceId;
    }

    findMany() {
        const fetchAll = this.serviceRepository.find(
            //exemple de condition dans le findMany
            // { where: { id: 1 } }
        )

        return fetchAll;
    }

    async update(id: number, service: Service) {
        const existingService = await this.serviceRepository.findOne({
            where: { id: id }
        })

        Object.assign(existingService, service)

        const updateService = await this.serviceRepository.save(existingService)

        return updateService
    }

    async delete(id: number) {
        await this.serviceRepository.delete(id)
    }
}