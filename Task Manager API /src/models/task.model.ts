import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from '../config/database';

class Task extends Model<InferAttributes<Task>, InferCreationAttributes<Task>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string | null;
  declare completed: CreationOptional<boolean>;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    timestamps: true,
  }
);

export default Task; 