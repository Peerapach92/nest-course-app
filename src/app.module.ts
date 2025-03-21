import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import Controllers & Services
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Import Modules
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

// Import Entities (Models)
import { AuthUser } from './auth/entities/auth.entity';
import { AdminUser } from './admin/entities/admin-user.entity';
import { UserInfo } from './user-info/entities/user-info.entity';
import { Customer } from './customer/entities/customer.entity';

@Module({
  imports: [
    // Load .env variables globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Sequelize Database Configuration
    SequelizeModule.forRoot({
      dialect: (process.env.DB_DIALECT as Dialect) || 'postgres', // Default to PostgreSQL
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'default_user',
      password: process.env.DB_PASSWORD || 'default_password',
      database: process.env.DB_DATABASE || 'default_db',
      models: [AuthUser, AdminUser, UserInfo, Customer], // Register all models
      autoLoadModels: true, // Automatically load models
      synchronize: process.env.NODE_ENV !== 'production', // Avoid auto sync in production
      logging: process.env.NODE_ENV === 'development', // Log queries only in development
    }),

    // Application Modules
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
