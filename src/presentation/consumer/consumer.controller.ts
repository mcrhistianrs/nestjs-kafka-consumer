import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('consumer')
export class ConsumerController {
  @MessagePattern('product-topic')
  handler(@Payload() message: any) {
    console.log(message);
  }
}
