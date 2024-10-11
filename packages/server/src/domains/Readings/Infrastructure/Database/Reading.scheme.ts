import { sequelize } from '@server/Infrastructure';
import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  CreationOptional,
} from 'sequelize';

export class ReadingScheme extends Model<
  InferAttributes<ReadingScheme>,
  InferCreationAttributes<ReadingScheme>
> {
  declare id: CreationOptional<number>;
  declare id_usuario: number;
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
}

ReadingScheme.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_usuario: DataTypes.BIGINT,
    numero_medidor: DataTypes.BIGINT,
    numero_cliente: DataTypes.BIGINT,
    denominacion_cliente: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    codigo_calle: DataTypes.BIGINT,
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
  },
  {
    sequelize,
    paranoid: true,
    modelName: 'Reading',
    timestamps: true,
    tableName: 'Lecturas',
  },
);
