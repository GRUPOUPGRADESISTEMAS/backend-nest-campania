import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { ClienteService } from './clientes.service';
import { ClienteController } from './clientes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [ClienteService],
  controllers: [ClienteController],
})
export class ClienteModule {}
