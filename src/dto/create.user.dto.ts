import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("CreateUserDTO")
export class CreateUserDTO {

    @JsonProperty("userName", String)
    private userName: string = undefined;
    get getUserName() { return this.userName; }
    set setUserName(value: string) { this.userName = value; }
}
