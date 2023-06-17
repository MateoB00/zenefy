import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Put
} from '@nestjs/common';

import { Subscription } from "./subscription.entity";
import { SubscriptionService } from "./subscription.service";

@Controller('subscription')
export class SubscriptionController {
    constructor(private subscriptionSubscription: SubscriptionService) { }

    @Post()
    create(@Body() subscription: Subscription): Promise<Subscription> {
        return this.subscriptionSubscription.create(subscription)
    }

    // id dans l'url
    @Get(':id')
    findById(@Param('id') id: number) {
        return this.subscriptionSubscription.findOneById(id)
    }

    @Get()
    findMany() {
        return this.subscriptionSubscription.findMany()
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() subscription: Subscription): Promise<Subscription> {
        return this.subscriptionSubscription.update(id, subscription)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.subscriptionSubscription.delete(id)
    }
}