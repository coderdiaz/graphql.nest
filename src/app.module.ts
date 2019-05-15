import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StatusModule } from './status/status.module';

const debugMode: boolean = process.env.NODE_ENV === 'development';

@Module({
  imports: [
    StatusModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      debug: debugMode,
      playground: debugMode,
    }),
  ],
})
export class ApplicationModule {}
