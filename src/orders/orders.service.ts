import { Injectable } from '@nestjs/common';
import { OrderStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
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

  async update(id: string): Promise<Order> {
    const order = await this.prisma.order.update({
      where: {
        id,
      },
      data: {
        status: OrderStatus.approved,
        updatedAt: new Date(),
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
