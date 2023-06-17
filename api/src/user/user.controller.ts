import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put
} from '@nestjs/common';

import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    create(@Body() user: User): Promise<User> {
        return this.userService.create(user)
    }

    // id dans l'url
    @Get(':id')
    findById(@Param('id') id: number) {
        return this.userService.findOneById(id)
    }

    // @Get('client_company/:client_company_id')
    // findAllByClientCompany(@Param('client_company_id') client_company_id) {
    //     console.log(client_company_id)
    //     return this.userService.findAllByClientCompany(client_company_id)
    // }

    @Get()
    findMany() {
        return this.userService.findMany()
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() user: User): Promise<User> {
        return this.userService.update(id, user)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.userService.delete(id)
    }
}