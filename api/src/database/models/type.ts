"use strict";
import { Model } from "sequelize";
import { TypeAttributes } from "../../../types";
module.exports = (sequelize: any, DataTypes: any) => {
  class Type extends Model<TypeAttributes> implements TypeAttributes {
    id!: number;
    name!: string;
    static associate(models: any) {
      Type.belongsToMany(models.Pokemon, {
        through: 'PokemonType'
      })
    }
  }
  Type.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: "Type",
    }
  );
  return Type;
};
