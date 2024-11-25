import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwoSumLog } from './entities/twoSumLog.entity';
import { TwoSumLogService } from './twoSumLog.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'youruser',
      password: 'yourpassword',
      database: 'yourdatabase',

      autoLoadEntities: true,
      synchronize: true, // In development only
    }),
    TypeOrmModule.forFeature([TwoSumLog]), // We import the entity here
  ],
  controllers: [AppController],
  providers: [TwoSumLogService], // Add the service here
})
export class AppModule {}
