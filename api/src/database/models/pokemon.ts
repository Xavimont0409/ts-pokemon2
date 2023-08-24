"use strict";
import { Model } from "sequelize";
import { PokemonAtributes } from "../../../types";
module.exports = (sequelize: any, DataTypes: any) => {
  class Pokemon extends Model<PokemonAtributes> implements PokemonAtributes {
    id!: string;
    name!: string;
    image!: string;
    life!: number;
    attack!: number;
    defense!: number;
    speed!: number;
    height!: number;
    weight!: number;
    created!: boolean;
    static associate(models: any) {
      Pokemon.belongsToMany(models.User, {
        through: 'UserPokemon'
      })
      Pokemon.belongsToMany(models.Type, {
        through: 'PokemonType'
      })
    }
  }
  Pokemon.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      life: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      attack: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      defense: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      speed: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: "Pokemon",
    }
  );
  return Pokemon;
};
