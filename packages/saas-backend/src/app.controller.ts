import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {PrismaService} from "./prisma/prisma.service";

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('/api')
  async getHello(): Promise<any[]> {
    return this.prisma.organizationMember.findMany({
      where: {},
    })
  }


  @Post('/api/p')
  async getHello1(@Body() b): Promise<any> {
    console.log(b)
    return await this.prisma.organizationMember.create({
      data:{
        teamID:b.username+b.password,
        userID:1,
        role:"OWNER"
      }
    })
  }
}
