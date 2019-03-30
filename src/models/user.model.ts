import {Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt} from "sequelize-typescript";

@Table({
  tableName: "user",
  deletedAt: false
})
export class User extends Model<User> {

  @PrimaryKey
  @Column(DataType.TEXT)
  public userSystemNumber: string;

  @Column(DataType.TEXT)
  public userName: string;

  @CreatedAt
  public createdDateTime: Date;

  @UpdatedAt
  public updatedDateTime: Date;
}
