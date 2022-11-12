import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        './configs/.env',
        './configs/.env.local',
        './configs/.env.production',
      ],
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@
			${process.env.DATABASE_URL}`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
