import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UtilityModule } from './shared/utility/utility.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { ChatModule } from './chat/chat.module';
import { GlobalHelperModule } from './shared/global-helper/global-helper.module';
import { CustomerModule } from './customer/customer.module';
import { UserInfoModule } from './user-info/user-info.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

// Entities
import { AuthUser } from './auth/entities/auth.entity';
import { AdminUser } from './admin/entities/admin-user.entity';
import { UserInfo } from './user-info/entities/user-info.entity';
import { Customer } from './customer/entities/customer.entity';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes .env variables available globally
    }),
    SequelizeModule.forRoot({
      dialect: (process.env.DB_DIALECT as Dialect) || 'sqlite', // Fallback to SQLite
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'default_user',
      password: process.env.DB_PASSWORD || 'default_password',
      database: process.env.DB_DATABASE || 'default_db',
      models: [AuthUser, AdminUser, UserInfo, Customer], // Add all your models here
      autoLoadModels: true,
      synchronize: true, // Sync tables automatically (consider disabling in production)
      logging: false, // Prevents excessive SQL logs in console
    }),
    ProductModule,
    UtilityModule,
    UserModule,
    OrderModule,
    ChatModule,
    GlobalHelperModule,
    UserInfoModule,
    CustomerModule,
    AuthModule,
    AdminModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
