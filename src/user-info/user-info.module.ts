import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserInfo } from './entities/user-info.entity';
import { UserInfoService } from './user-info.service';
import { UserInfoController } from './user-info.controller';

@Module({
  imports: [SequelizeModule.forFeature([UserInfo])],
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserInfoModule {}
