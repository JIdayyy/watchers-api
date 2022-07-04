import { Readable } from 'stream';
import minioClient from './minioClient';

const config = {
  bucket: 'watchers',
};

export const minioService = {
  async getObject(filename: string): Promise<Readable> {
    return new Promise((resolve, reject) => {
      minioClient.getObject(config.bucket, filename, (err, dataStream) => {
        if (err) {
          reject(err);
        }
        resolve(dataStream);
      });
    });
  },

  async putObject(
    fileName: string,
    stream: Readable,
    metadata: { [key: string]: string }
  ): Promise<void> {
    await minioClient.putObject(config.bucket, fileName, stream, metadata);
  },

  async replaceFile(
    previousFileName: string,
    fileName: string,
    userId: string,
    stream: Readable,
    folder: string,
    metadata: { [key: string]: string }
  ): Promise<void> {
    minioClient.removeObject(
      config.bucket,
      `profile_picture/${userId}/${previousFileName}`,
      async () => {
        console.log(`${previousFileName} removed`);
        await minioClient.putObject(
          config.bucket,
          `${folder}/${userId}/${fileName}`,
          stream,
          metadata
        );
      }
    );
  },
};
