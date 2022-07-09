/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import 'reflect-metadata';
import { ApolloServer, gql } from 'apollo-server-express';
import prismaClient from '../prisma/prismaClient';
import createServer from '../src/server';

describe('server start and return correct values from queries', () => {
  let server: ApolloServer;
  beforeAll(async () => {
    server = await createServer();
    await server.start();
    server.requestOptions.context = {
      prisma: prismaClient,
      req: {
        headers: {
          'Set-cookies':
            'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvZUBnbWFpbC5jb20iLCJpZCI6IjlhYWZkZGU3LTM0YjItNGZmNy04YTE4LWRiZmM5ZDRjZDg4MCIsInJvbGUiOlsiVVNFUiIsIlNVUEVSX0FETUlOIiwiTUFOQUdFUiIsIkFETUlOIl0sImZpcnN0X25hbWUiOiJKZXJyb2xkIiwibGFzdF9uYW1lIjoiSG9lZ2VyIiwiaWF0IjoxNjUwOTc1NDc3LCJleHAiOjE2NTEwNjE4Nzd9.ej9MfY2XoieUe2pwzsyS6G3RqK01puJ8vTVeSrmd8Kk',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvZUBnbWFpbC5jb20iLCJpZCI6IjlhYWZkZGU3LTM0YjItNGZmNy04YTE4LWRiZmM5ZDRjZDg4MCIsInJvbGUiOlsiVVNFUiIsIlNVUEVSX0FETUlOIiwiTUFOQUdFUiIsIkFETUlOIl0sImZpcnN0X25hbWUiOiJKZXJyb2xkIiwibGFzdF9uYW1lIjoiSG9lZ2VyIiwiaWF0IjoxNjUwOTc1NDc3LCJleHAiOjE2NTEwNjE4Nzd9.ej9MfY2XoieUe2pwzsyS6G3RqK01puJ8vTVeSrmd8Kk',
          cookies: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvZUBnbWFpbC5jb20iLCJpZCI6IjlhYWZkZGU3LTM0YjItNGZmNy04YTE4LWRiZmM5ZDRjZDg4MCIsInJvbGUiOlsiVVNFUiIsIlNVUEVSX0FETUlOIiwiTUFOQUdFUiIsIkFETUlOIl0sImZpcnN0X25hbWUiOiJKZXJyb2xkIiwibGFzdF9uYW1lIjoiSG9lZ2VyIiwiaWF0IjoxNjUwOTc1NDc3LCJleHAiOjE2NTEwNjE4Nzd9.ej9MfY2XoieUe2pwzsyS6G3RqK01puJ8vTVeSrmd8Kk',
          },
        },
      },
    };
  });

  it('should execute the query GET_USERS return an array with all users from database', async () => {
    const fakePost = await prismaClient.post.create({
      data: {
        content: 'test2',
        slug: 'tedzdzqzdqdzstéé23',
        title: 'test',
        author: {
          connectOrCreate: {
            create: {
              email: 'test@gmail.com',
              image: 'test',
              name: 'julien',
              first_name: 'test',
              nickname: 'test',
            },
            where: {
              email: 'test@gmail.com',
            },
          },
        },
      },
    });

    const posts = await server.executeOperation({
      variables: {
        where: {
          slug: fakePost.slug,
        },
      },
      query: `query GetPostData($where: PostWhereUniqueInput!) {
            post(where: $where) {
                id
                slug
                title
                content
                cover_picture
                created_at
                updated_at
                categoryId
                userId
                isDraft
            }
        }
        `,
    });

    expect(posts.data).toBeDefined();
    expect({
      ...posts!.data!.post,
    }).toStrictEqual({
      ...fakePost,
      created_at: posts!.data!.post.created_at.toString(),
      updated_at: posts!.data!.post.updated_at.toString(),
    });
  });

  it('should execute the query GET_USER return one user from database', async () => {});
});
