import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
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
  ],
  controllers: [AppController],
})
export class AppModule {}
