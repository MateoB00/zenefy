import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService, private jwtService: JwtService) { }

    async validateUser(payload: any) {
        return await this.userService.findOneByEmail(payload);
    }

    async login(
        email: string,
        password: string,
    ) {
        const userByEmail = await this.userService.findOneByEmail(email);

        if (!userByEmail) {
            throw new NotFoundException('User not found');
        }

        const passwordMatch = await bcrypt.compare(password, userByEmail.password);

        if (!passwordMatch) {
            throw new UnauthorizedException('Invalid password');
        }
        const payload = {
            username: email,
            sub: {
                name: userByEmail.first_name,
            },
        };
        const accessToken = this.jwtService.sign(payload);

        return {
            accessToken
        };
    }
}
