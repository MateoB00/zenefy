import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
    constructor(@InjectRepository(Contact) private contactRepository: Repository<Contact>) { }

    async create(contact: Contact) {
        if (contact.last_name && contact.first_name && contact.email && contact.num_phone && contact.subject && contact.message) {
            const newMessageContact = {
                last_name: contact.last_name,
                first_name: contact.first_name,
                email: contact.email,
                num_phone: contact.num_phone,
                subject: contact.subject,
                message: contact.message
            }

            const createdMessageContact = await this.contactRepository.save(
                newMessageContact
            )

            return createdMessageContact;
        } else {
            console.log('Contact: miss field.');
            throw new Error('Contact: miss field.');
        }
    }
}