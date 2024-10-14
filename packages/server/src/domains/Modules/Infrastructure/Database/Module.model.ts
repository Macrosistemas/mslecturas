import { sequelize } from '@server/Infrastructure';
import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  CreationOptional,
} from 'sequelize';
export class ModuleModel extends Model<
  InferAttributes<ModuleModel>,
  InferCreationAttributes<ModuleModel>
> {
  declare id: CreationOptional<number>;
  declare denominacion: string;
}

ModuleModel.init(
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
    modelName: 'Module',
    timestamps: true,
    tableName: 'Modulos',
  },
);
