import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user-info')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}


  @Post()
  async create(@Body() createUserInfoDto: CreateUserInfoDto) {
    const createUserInfo = await this.userInfoService.create(createUserInfoDto);
    if (createUserInfo == null) {
      throw new Error('Cant create Data!!!');
    }
    return{
      message: 'create Data complete',
      data: createUserInfo,
    };
  }

  @Get()
  findAll() {
    return this.userInfoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const finduserinfo = await this.userInfoService.findOne(+id);
    if (finduserinfo == null) {
      throw new NotFoundException('sai hai tuk di wa');
    }
    return finduserinfo;
  }
  @UseGuards(JwtAuthGuard)
  @Get('/findfirstname/:firstname')
  async findFirstname(@Param('firstname') firstname: string) {
    const findfirstname = await this.userInfoService.findfirstname(firstname);
    if (findfirstname == null) {
      throw new NotFoundException('not found naja!!!!!');
    }
    return findfirstname;
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateUserInfoDto: UpdateUserInfoDto) {
    const [updateUserInfo] = await this.userInfoService.update(
      +id,
      updateUserInfoDto,
    );
    console.log(updateUserInfo);
    if (updateUserInfo === 0){
      throw new NotFoundException('Not Found Data 2 update!!');
    }
    return { message: 'Update complete'}
  }
  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    const destroyUserinfo = await this.userInfoService.remove(+id);
    console.log(destroyUserinfo);
    if (destroyUserinfo == 0){
      throw new NotFoundException('Not found 2 remove');
    }
    return { message: 'Remove complete'};
  }
}
