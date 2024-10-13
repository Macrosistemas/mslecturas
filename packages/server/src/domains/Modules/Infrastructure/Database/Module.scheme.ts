import { sequelize } from '@server/Infrastructure';
import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  CreationOptional,
} from 'sequelize';
export class ModuleScheme extends Model<
  InferAttributes<ModuleScheme>,
  InferCreationAttributes<ModuleScheme>
> {
  declare id: CreationOptional<number>;
  declare denominacion: string;
}

ModuleScheme.init(
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
