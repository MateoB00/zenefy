import {
    Body,
    Controller,
    Get,
    Param,
    Request,
    Post,
    Put,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClientCompany } from "./clientcompany.entity";
import { ClientCompanyService } from "./clientcompany.service";

@Controller('client_company')
export class ClientCompanyController {
    constructor(private clientCompanyService: ClientCompanyService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    create(@Request() req: any,@Body() clientCompany: ClientCompany): Promise<any> {
        const loggedInUser = req.user
        return this.clientCompanyService.create(clientCompany)
    }

    // id dans l'url
    @Get(':id')
    findById(@Param('id') id: number) {
        return this.clientCompanyService.findOneById(id)
    }

    @Get()
    findMany() {
        return this.clientCompanyService.findMany()
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() clientCompany: ClientCompany): Promise<ClientCompany> {
        return this.clientCompanyService.update(id, clientCompany)
    }
}