import { Module } from '@nestjs/common';
import { StatusResolver } from './status.resolvers';

@Module({
  providers: [StatusResolver],
})
export class StatusModule {}
