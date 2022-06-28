import { Post } from './../../../generated/graphql/models/Post';
import { SearchInput } from '../../../../src/custom_resolvers/Inputs/searchInput';
import { GQLContext } from 'src/interfaces';
import { Resolver, Ctx, Arg, Query } from 'type-graphql';

@Resolver()
export class SearchResolver {
  @Query(() => [Post], { nullable: true })
  async search(
    @Ctx() ctx: GQLContext,
    @Arg('data') data: SearchInput
  ): Promise<Post[]> {
    const searchPostsByTagResult = await ctx.prisma.post.findMany({
      where: {
        Tags: {
          some: {
            name: {
              in: data.searchValue,
            },
          },
        },
      },
    });

    return searchPostsByTagResult;
  }
}
