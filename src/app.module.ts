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
      username: 'youruser', // Cambia según tu configuración
      password: 'yourpassword',
      database: 'yourdatabase',

      autoLoadEntities: true,
      synchronize: true, // Solo en desarrollo
    }),
    TypeOrmModule.forFeature([TwoSumLog]), // Importamos la entidad aquí
  ],
  controllers: [AppController],
  providers: [TwoSumLogService], // Agregar el servicio aquí
})
export class AppModule {}
