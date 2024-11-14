import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { ClienteService } from './clientes.service';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Get()
  async findAll() {
    return this.clienteService.findAll();
  }
}
