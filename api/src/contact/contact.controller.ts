import {
    Body,
    Controller,
    Post,
} from '@nestjs/common';

import { Contact } from "./contact.entity";
import { ContactService } from "./contact.service";

@Controller('contact')
export class ContactController {
    constructor(private contactService: ContactService) { }

    @Post()
    create(@Body() contact: Contact): Promise<Contact> {
        return this.contactService.create(contact)
    }
}