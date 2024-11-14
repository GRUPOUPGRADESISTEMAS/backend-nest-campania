import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './clientes/clientes.module';

  @Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mongodb',
        url: 'mongodb+srv://grupoupgradeperu:CUhQCqGo3DG7z4sN@upgradedb.vcn6i.mongodb.net/campania',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        database: 'campania',
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
      ClienteModule
    ],
  })
  export class AppModule {}
