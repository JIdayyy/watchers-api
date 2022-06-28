/* eslint-disable no-console */
import { GraphQLUpload } from 'graphql-upload';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { Stream, Readable } from 'stream';
import { ApolloError } from 'apollo-server-core';
import { GQLContext } from '../../../interfaces';
import { Post } from '../../../generated/graphql';
import { minioService } from '../../../services/minioService';

export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@Resolver()
export class UploadCoverPicture {
  @Mutation(() => Post, {
    nullable: false,
  })
  async uploadCoverPicture(
    @Ctx() ctx: GQLContext,
    @Arg('file', () => GraphQLUpload)
    { createReadStream, filename }: Upload
  ): Promise<Post> {
    const { postId } = ctx.req.query;

    try {
      const stream = createReadStream();

      const metadata = {
        'Content-type': 'image',
      };

      await minioService.putObject(
        `/cover_picture/${postId}/${filename}`,
        stream as Readable,
        metadata
      );

      const updatedUser = await ctx.prisma.post.update({
        data: {
          cover_picture: `https://minio-dc-s3.digitalcopilote.re/watchers/cover_picture/${postId}/${filename}`,
        },
        where: {
          id: postId as string,
        },
      });

      return updatedUser;
    } catch (error) {
      console.log(error);
      throw new ApolloError('error during upload', error as string);
    }
  }
}
