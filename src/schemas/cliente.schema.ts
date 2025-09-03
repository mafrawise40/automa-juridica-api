// src/clients/client.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClienteDocument = HydratedDocument<Cliente>;

@Schema()
export class Cliente {
    @Prop()
    nome: string;

    @Prop()
    cpf: string;

    @Prop({ unique: true })
    telefone: string;

    @Prop({ unique: true })
    email: string;

    @Prop()
    estadoCivil: string;

    @Prop()
    profissao: string;

    @Prop()
    dataNascimento: Date;

    @Prop()
    endereco: string;

}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);