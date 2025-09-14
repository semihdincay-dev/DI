import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  //Make available for other modules
  exports: [PowerService]
})
export class PowerModule {}
