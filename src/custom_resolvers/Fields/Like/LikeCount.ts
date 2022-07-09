/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { GQLContext } from 'src/interfaces';
import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Post, User } from '../../../../src/generated/graphql';
import { Count } from '../../../../src/custom_resolvers/models/commentCount';

@Resolver((of) => Post)
export class LikeCountResolver {
  @FieldResolver((type) => Count, { nullable: true })
  async likeCount(
    @Root() post: Post,
    @Ctx() { prisma }: GQLContext
  ): Promise<{ count: number }> {
    const likeCount = await prisma.post.findUnique({
      where: {
        id: post.id,
      },
      select: {
        _count: {
          select: {
            User_likes: true,
          },
        },
      },
    });

    return { count: likeCount?._count.User_likes as number };
  }
}
