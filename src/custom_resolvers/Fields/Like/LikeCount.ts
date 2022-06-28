/* eslint-disable @typescript-eslint/no-unused-vars */
import { GQLContext } from 'src/interfaces';
import { Post, User } from '../../../../src/generated/graphql';
import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Count } from '../../../../src/custom_resolvers/models/commentCount';

@Resolver((of) => Post)
export class LikeCountResolver {
  @FieldResolver((type) => Count, { nullable: true })
  async likeCount(
    @Root() post: Post,
    @Ctx() { prisma }: GQLContext
  ): Promise<{ count: number }> {
    const likeCount = await prisma.like.count({
      where: {
        post_id: post.id,
      },
    });

    return { count: likeCount };
  }
}
