import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('/api')
  async getHello(): Promise<any[]> {
    return this.prisma.organizationMember.findMany({
      where: {},
    });
  }

  @Post('/api/p')
  async getHello1(@Body() b): Promise<any> {
    console.log(b);
    return await this.prisma.organizationMember.create({
      data: {
        teamID: b.username + b.password,
        userID: 1,
        role: 'OWNER',
      },
    });
  }

  @Post('/api/login')
  async passwordLogin(
    @Body()
    reqBody: {
      username: string;
      password: string;
      companyname: string;
    },
  ) {
    const url = `http://10.144.62.53:8094`;
    return axios
      .post(`${url}/api/login/login`, {
        companyName: reqBody.companyname || '',
        userName: reqBody.username || '',
        password: reqBody.password || '',
      })
      .then((res) => {
        console.log(res.data);
        if (res?.data?.body?.accessToken) {
          return {
            token: res?.data?.body?.accessToken,
          };
        } else {
          throw new UnauthorizedException();
        }
      });
  }

  @Post('/api/signup')
  async signup(
    @Body()
    reqBody: {
      username: string;
      password: string;
      companyname: string;
      email: string;
    },
  ) {
    const url = `http://10.144.62.53:8094`;
    return axios
      .post(`${url}/api/login/register`, {
        // "companyName":reqBody.companyname||'',
        userName: reqBody.username || '',
        password: reqBody.password || '',
        email: reqBody.email || '',
      })
      .then((res) => {
        console.log(res);
        if (res?.data?.body?.success) {
          return {
            success: true,
          };
        } else {
          throw new UnauthorizedException();
        }
      });
  }
}
