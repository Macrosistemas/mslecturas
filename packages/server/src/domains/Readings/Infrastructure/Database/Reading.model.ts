import { sequelize } from '@server/Infrastructure';
import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  CreationOptional,
} from 'sequelize';
export class ReadingModel extends Model<
  InferAttributes<ReadingModel>,
  InferCreationAttributes<ReadingModel>
> {
  declare id: CreationOptional<number>;
  declare numero_medidor: number;
  declare numero_cliente: number;
  declare denominacion_cliente: string;
  declare codigo_calle: number;
  declare denominacion_calle: string;
  declare altura: number;
  declare piso: string;
  declare dpto: string;
  declare fecha_lectura: Date;
  declare fecha_lectura_ant: Date;
  declare lectura: number;
  declare lectura_ant: number;
  declare bis: string;
  declare fecha_sincronizacion: CreationOptional<Date>;
  declare id_usuario: number;
}

ReadingModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    numero_medidor: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    numero_cliente: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    denominacion_cliente: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    codigo_calle: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    denominacion_calle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    altura: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    piso: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dpto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fecha_lectura: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fecha_lectura_ant: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    lectura: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    lectura_ant: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    bis: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fecha_sincronizacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    id_usuario: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  {
    sequelize,
    paranoid: true,
    modelName: 'Reading',
    timestamps: true,
    tableName: 'Lecturas',
  },
);
