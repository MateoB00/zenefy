import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './subscription.entity';

@Injectable()
export class SubscriptionService {
    constructor(@InjectRepository(Subscription) private subscriptionRepository: Repository<Subscription>) { }

    async create(subscription: Subscription) {
        const newSubscription = {
            name: subscription.name,
            description: subscription.description,
            price_per_year: subscription.price_per_year,
        }

        const createdSubscription = await this.subscriptionRepository.save(
            newSubscription
        )
        return createdSubscription;
    }

    async findOneById(id: number) {
        const fetchSubscriptionById = await this.subscriptionRepository.findOne({
            where: { id: id }
        })

        if (!fetchSubscriptionById) {
            console.log('Subscription non trouvé');
            throw new Error('Subscription non trouvé.');
        }

        return fetchSubscriptionById;
    }

    findMany() {
        const fetchAll = this.subscriptionRepository.find(
            //exemple de condition dans le findMany
            // { where: { id: 1 } }
        )

        return fetchAll;
    }

    async update(id: number, subscription: Subscription) {
        const existingSubscription = await this.subscriptionRepository.findOne({
            where: { id: id }
        })

        Object.assign(existingSubscription, subscription)

        const updateSubscription = await this.subscriptionRepository.save(existingSubscription)

        return updateSubscription
    }

    async delete(id: number) {
        await this.subscriptionRepository.delete(id)
    }
}