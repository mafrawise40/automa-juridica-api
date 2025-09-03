import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteSchema } from './schemas/cliente.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:lOqZXKMbEzgyHuKQOaVPnPEynZATwpcp@nozomi.proxy.rlwy.net:59141/automa-juridica-db'),
    MongooseModule.forFeature([{ name: 'Cliente', schema: ClienteSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
