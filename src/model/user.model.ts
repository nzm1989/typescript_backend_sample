import {Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt} from "sequelize-typescript";

@Table({
  tableName: "user",
  deletedAt: false
})
export class User extends Model<User> {

  @PrimaryKey
  @Column(DataType.TEXT)
  get userSystemNumber(): string {
    return this.getDataValue("userSystemNumber");
  }

  set userSystemNumber(value: string) {
    this.setDataValue("userSystemNumber", value);
  }

  @Column(DataType.TEXT)
  get userName(): string {
    return this.getDataValue("userName");
  }

  set userName(value: string) {
    this.setDataValue("userName", value);
  }

  @CreatedAt
  private createdDateTime: Date;

  @UpdatedAt
  private updatedDateTime: Date;
}
