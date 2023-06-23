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
        )

        return fetchByServiceId;
    }

    findMany() {
        const services = this.serviceRepository.createQueryBuilder('service')
            .leftJoinAndSelect('service.partner_company', 'partner_company')
            .leftJoinAndSelect('service.category_service', 'category_service')
            .getMany();

        return services;
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

    async findByCategoryAndCity(category: string, city: string) {
        const services = await this.serviceRepository.createQueryBuilder('service')
            .leftJoinAndSelect('service.partner_company', 'partner_company')
            .leftJoinAndSelect('service.category_service', 'category_service')
            .where('LOWER(category_service.name) = LOWER(:category)', { category: category })
            .andWhere('LOWER(partner_company.city) = LOWER(:city)', { city: city })
            .getMany();

        return services
    }

    async findByCategory(category: string) {
        const services = await this.serviceRepository.createQueryBuilder('service')
            .leftJoinAndSelect('service.category_service', 'category_service')
            .leftJoinAndSelect('service.partner_company', 'partner_company')
            .where('LOWER(category_service.name) = LOWER(:category)', { category: category })
            .getMany();
        console.log(services)
        return services
    }

    async findByCity(city: string) {
        const services = await this.serviceRepository.createQueryBuilder('service')
            .leftJoinAndSelect('service.category_service', 'category_service')
            .leftJoinAndSelect('service.partner_company', 'partner_company')
            .where('LOWER(partner_company.city) = LOWER(:city)', { city: city })
            .getMany();

        return services
    }
}