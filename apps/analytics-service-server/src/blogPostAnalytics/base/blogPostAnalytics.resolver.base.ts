/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BlogPostAnalytics } from "./BlogPostAnalytics";
import { BlogPostAnalyticsCountArgs } from "./BlogPostAnalyticsCountArgs";
import { BlogPostAnalyticsFindManyArgs } from "./BlogPostAnalyticsFindManyArgs";
import { BlogPostAnalyticsFindUniqueArgs } from "./BlogPostAnalyticsFindUniqueArgs";
import { CreateBlogPostAnalyticsArgs } from "./CreateBlogPostAnalyticsArgs";
import { UpdateBlogPostAnalyticsArgs } from "./UpdateBlogPostAnalyticsArgs";
import { DeleteBlogPostAnalyticsArgs } from "./DeleteBlogPostAnalyticsArgs";
import { BlogPostAnalyticsService } from "../blogPostAnalytics.service";
@graphql.Resolver(() => BlogPostAnalytics)
export class BlogPostAnalyticsResolverBase {
  constructor(protected readonly service: BlogPostAnalyticsService) {}

  async _blogPostAnalyticsItemsMeta(
    @graphql.Args() args: BlogPostAnalyticsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BlogPostAnalytics])
  async blogPostAnalyticsItems(
    @graphql.Args() args: BlogPostAnalyticsFindManyArgs
  ): Promise<BlogPostAnalytics[]> {
    return this.service.blogPostAnalyticsItems(args);
  }

  @graphql.Query(() => BlogPostAnalytics, { nullable: true })
  async blogPostAnalytics(
    @graphql.Args() args: BlogPostAnalyticsFindUniqueArgs
  ): Promise<BlogPostAnalytics | null> {
    const result = await this.service.blogPostAnalytics(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BlogPostAnalytics)
  async createBlogPostAnalytics(
    @graphql.Args() args: CreateBlogPostAnalyticsArgs
  ): Promise<BlogPostAnalytics> {
    return await this.service.createBlogPostAnalytics({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BlogPostAnalytics)
  async updateBlogPostAnalytics(
    @graphql.Args() args: UpdateBlogPostAnalyticsArgs
  ): Promise<BlogPostAnalytics | null> {
    try {
      return await this.service.updateBlogPostAnalytics({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BlogPostAnalytics)
  async deleteBlogPostAnalytics(
    @graphql.Args() args: DeleteBlogPostAnalyticsArgs
  ): Promise<BlogPostAnalytics | null> {
    try {
      return await this.service.deleteBlogPostAnalytics(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}