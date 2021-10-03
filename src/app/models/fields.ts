export interface Field{
    fieldId:string;
    fieldName:string;
    type:string;
    selectableValues?:string[]
}

export interface model{
    pageName:string;
    fields:Field[];
}