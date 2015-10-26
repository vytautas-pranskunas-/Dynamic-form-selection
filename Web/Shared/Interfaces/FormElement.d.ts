interface IFormElement {
    name: string;
    label: string;
    type: ElemntType;
    isSelected?: boolean;
    value?: any;
    initialData?: ISelectItem[];
    validationRules: IFormElementValidation[]  
}

interface IFormElementValidation {
    type: FormElementValidation;
    value?: any;
}

interface ISelectItem {
    value: string;
    text: string;
}

declare enum FormElementValidation {
    required = 1,
    maxLength = 2,
    minLength = 3,
    email = 4,
    max = 5,
    min = 6
}

declare enum ElemntType {
    inputBox = 1,
    checkBox = 2,
    dropDown = 3
}