import { ApiProperty } from "@nestjs/swagger";
import { Table, Model, Column, DataType, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";

@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ForeignKey(() => Role)
    @ApiProperty({example: '1', description: 'ID роли'})
    @Column({type: DataType.NUMBER})
    roleId: number;

    @ForeignKey(() => User)
    @ApiProperty({example: '1', description: 'ID пользователя'})
    @Column({type: DataType.NUMBER})
    userId: number;
}