import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConsumerController } from 'src/presentation/consumer/consumer.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'product_consumer',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'client_product_consumer',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'group_product_consumer',
          },
        },
      },
    ]),
  ],
  controllers: [ConsumerController],
})
export class KafkaModule {}
