import { sequelize } from '@server/Infrastructure';
import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  CreationOptional,
} from 'sequelize';
export class StreetModel extends Model<
  InferAttributes<StreetModel>,
  InferCreationAttributes<StreetModel>
> {
  declare id: number;
  declare denominacion: CreationOptional<string>;
}

StreetModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    denominacion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    paranoid: true,
    modelName: 'Street',
    timestamps: true,
    tableName: 'Calles',
  },
);
