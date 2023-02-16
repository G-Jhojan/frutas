import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FrutaDocument = HydratedDocument<Fruta>;

@Schema()
export class Fruta {
  @Prop()
  nombre: string;

  @Prop()
  precio: number;

  @Prop()
  stock: number;

  @Prop()
  descripcion: string;

  @Prop()
  proveedor: string;

  @Prop()
  descuento: number;
}

export const FrutaSchema = SchemaFactory.createForClass(Fruta);
