import { Module } from '@nestjs/common';
import { WeathersModule } from './weathers/weathers.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    WeathersModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'weather',
      database: 'weather',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
