import { Controller, Post, Request, UseGuards, Body, Get, Header } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService, private userService: UserService) { }

    @Post('login')
    @Header('Authorization', 'Bearer')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        const token = this.authService.login(email, password);
        return token
    }

    @Post('register')
    async register(@Body() user: User) {
        return await this.userService.create(user)
    }
}
