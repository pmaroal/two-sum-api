import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { TwoSumLog } from './entities/twoSumLog.entity';
import { TwoSumLogService } from './twoSumLog.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // ConfigModule para cargar variables del archivo .env
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables estén disponibles en toda la aplicación
    }),
    // TypeOrmModule con configuración asincrónica para usar variables de entorno
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true, // ¡Solo en desarrollo!
      }),
    }),
    TypeOrmModule.forFeature([TwoSumLog]), // Importa la entidad
  ],
  controllers: [AppController],
  providers: [TwoSumLogService], // Añade el servicio
})
export class AppModule {}
