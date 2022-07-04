import { GQLContext } from 'src/interfaces';
import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { FollowCount } from '../../models/followCount';
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from '../../../generated/graphql';

@Resolver((of) => User)
export class FollowersCountResolver {
  @FieldResolver((type) => FollowCount, { nullable: true })
  async followersCount(
    @Root() user: User,
    @Ctx() { prisma, user: contextUser }: GQLContext
  ): Promise<FollowCount> {
    const followersCount = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        followers: true,
        _count: {
          select: {
            followers: true,
          },
        },
      },
    });

    const isFollowing = () => {
      if (!contextUser) {
        return false;
      }
      return !!followersCount?.followers.filter(
        (follower) => follower.id === contextUser.id
      ).length;
    };

    return {
      count: followersCount?._count.followers as number,
      isFollowing: isFollowing(),
    };
  }
}
