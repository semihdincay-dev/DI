import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from '../power/power.module';

@Module({
  //Import PowerModule to use PowerService
  imports: [PowerModule],
  providers: [CpuService],
  exports: [CpuService]

})
export class CpuModule {}
