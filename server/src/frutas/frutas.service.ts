import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFrutaDto } from './dto/create-fruta.dto';
import { UpdateFrutaDto } from './dto/update-fruta.dto';
import { Fruta, FrutaDocument } from './schemas/frutas.schema';

@Injectable()
export class FrutasService {
  constructor(
    @InjectModel(Fruta.name) private frutaModel: Model<FrutaDocument>,
  ) {}

  async create(createFrutaDto: CreateFrutaDto): Promise<Fruta> {
    return new this.frutaModel(createFrutaDto).save();
  }

  findAll() {
    return this.frutaModel.find();
  }

  findOne(nombre: string) {
    return this.frutaModel.findOne({ nombre });
  }

  update(id: string, updateFrutaDto: UpdateFrutaDto) {
    return this.frutaModel.findByIdAndUpdate(
      id,
      { $set: updateFrutaDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.frutaModel.findByIdAndDelete(id);
  }
}
