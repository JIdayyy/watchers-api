/* eslint-disable @typescript-eslint/no-unused-vars */
import { GQLContext } from 'src/interfaces';
import { Post, User } from '../../../../src/generated/graphql';
import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Count } from '../../../../src/custom_resolvers/models/commentCount';

@Resolver((of) => Post)
export class CommentCountResolver {
  @FieldResolver((type) => Count, { nullable: true })
  async commentCount(
    @Root() post: Post,
    @Ctx() { prisma }: GQLContext
  ): Promise<{ count: number }> {
    const commentCount = await prisma.comment.count({
      where: {
        Post: {
          id: {
            equals: post.id,
          },
        },
      },
    });

    return { count: commentCount };
  }
}
