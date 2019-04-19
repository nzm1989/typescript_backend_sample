import {JsonConvert} from "json2typescript";

export function convertJsonToDTO(jsonString: string, dtoObjectClass: new() => any): any {
    const jsonConvert: JsonConvert = new JsonConvert();
    const dtoObject: any = jsonConvert.deserializeObject(jsonString, dtoObjectClass);
    return dtoObject;
}
