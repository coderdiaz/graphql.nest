import { Resolver, Query } from "@nestjs/graphql";

@Resolver('Status')
export class StatusResolver {
  @Query()
  async status() {
    return {
      version: '0.1.0',
      status: true,
    };
  }
}