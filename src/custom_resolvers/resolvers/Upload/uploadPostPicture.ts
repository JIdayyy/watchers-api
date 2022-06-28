/* eslint-disable no-console */
import { GraphQLUpload } from 'graphql-upload';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { Stream, Readable } from 'stream';
import { ApolloError } from 'apollo-server-core';
import { GQLContext } from '../../../interfaces';
import { minioService } from '../../../services/minioService';
import { v4 as uuidv4 } from 'uuid';
import { Picture } from '../../models/pictureUrl';

export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@Resolver()
export class UploadPostPicture {
  @Mutation(() => Picture)
  async uploadPostPicture(
    @Ctx() ctx: GQLContext,
    @Arg('file', () => GraphQLUpload)
    { createReadStream, filename }: Upload
  ): Promise<{ url: string }> {
    try {
      const uuid = uuidv4();
      const stream = createReadStream();

      const metadata = {
        'Content-type': 'image',
      };

      await minioService.putObject(
        `/post_pictures/${filename}`,
        stream as Readable,
        metadata
      );

      return {
        url: `https://minio-dc-s3.digitalcopilote.re/watchers/post_pictures/${uuid}`,
      };
    } catch (error) {
      console.log(error);
      throw new ApolloError('error during upload', error as string);
    }
  }
}
