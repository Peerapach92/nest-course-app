import { Injectable } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { UserInfo } from './entities/user-info.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectModel(UserInfo)
    private readonly userInfoModel: typeof UserInfo,
  ) {}
  async create(createUserInfoDto: CreateUserInfoDto) {
    return await this.userInfoModel.create(
      createUserInfoDto as Partial<UserInfo>,
    );
  }

  async findAll(): Promise<UserInfo[]> {
    return this.userInfoModel.findAll();
  }

  async findOne(id: number) {
    return await this.userInfoModel.findByPk(id);
  }

  async findfirstname(firstname: string) {
    const userInfo = await this.userInfoModel.findOne({
      where: { firstname: firstname,

      },
    });
    return userInfo;
  }

  async update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return await this.userInfoModel.update(updateUserInfoDto, {
      where: { id: id },
    });
  }

  async remove(id: number) {
    return await this.userInfoModel.destroy({
      where: { id: id},
    });
  }
}