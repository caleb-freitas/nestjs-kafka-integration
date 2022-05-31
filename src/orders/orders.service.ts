import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = await this.prisma.order.create({
      data: {
        ...createOrderDto,
      },
    });
    return order;
  }

  async findAll(): Promise<Order[]> {
    const orders = await this.prisma.order.findMany();
    return orders;
  }

  async findOne(id: string): Promise<Order> {
    const order = await this.prisma.order.findUnique({
      where: {
        id,
      },
    });
    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.prisma.order.update({
      where: {
        id,
      },
      data: {
        ...updateOrderDto,
      },
    });
    return order;
  }

  async remove(id: string): Promise<null> {
    await this.prisma.order.delete({
      where: {
        id,
      },
    });
    return null;
  }
}
