import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StatusModule } from './status/status.module';
import { TasksModule } from './tasks/tasks.module';

const debugMode: boolean = process.env.NODE_ENV === 'development';

@Module({
  imports: [
    StatusModule,
    TasksModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      debug: debugMode,
      playground: debugMode,
    }),
  ],
})
export class ApplicationModule {}
