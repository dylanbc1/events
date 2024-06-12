import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheInterceptor, CacheModule, CacheModuleOptions } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { EventModule } from './events/event.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentModule } from './comments/comment.module';
import { PeopleModule } from './people/people.module';
import * as oracledb from 'oracledb';  // Importar todo el módulo

oracledb.initOracleClient({ libDir: 'C:\\instantclient_21_14' });

@Module({
  imports: [   
    TypeOrmModule.forRoot({
      type: 'oracle',
      connectString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=200.3.193.24)(PORT=1522))(CONNECT_DATA=(SERVICE_NAME=ESTUD)))",
      username: 'P09779_1_2',
      password: 'MFQHqFMxVp',
      synchronize: true,
      logging: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    /*
    CacheModule.register({
        store: redisStore,
        ttl: 30 * 1000, // Los elementos en caché se borran después de 30 segundos
        isGlobal: true, 
    }),*/
    EventModule,
    PeopleModule,
    ConfigModule,
    CommentModule,
    MongooseModule.forRoot('mongodb+srv://Juan:juan@cluster01.jh82oxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01')
    
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: 'APP_INTERCEPTOR', // Aqui estamos definiendo que el interceptor de cache
    useClass: CacheInterceptor, // se aplique a todas las rutas de nuestra aplicación OJO solo metodo GET
    // La key de los datos en caché se generará a partir de la URL de la solicitud.
  }],
})
export class AppModule {}
