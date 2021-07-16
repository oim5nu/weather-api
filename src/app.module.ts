import { Module } from '@nestjs/common';
import { WeathersModule } from './weathers/weathers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [WeathersModule, UsersModule],
})
export class AppModule {}
