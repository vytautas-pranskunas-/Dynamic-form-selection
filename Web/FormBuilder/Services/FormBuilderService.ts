class FormBuilderService implements IFormBuilderService {
    
    static serviceId = "formBuilder";

    public getInitialPersonDetailsFields() {

        var list: IFormElement[] = [];

        list.push(<IFormElement>{
            name: 'name',
            label: 'Name',
            type: ElemntType.inputBox,
            validationRules: [{ type: FormElementValidation.required }, { type: FormElementValidation.maxLength, value: 25 }, { type: FormElementValidation.minLength, value: 3 }]
        });

        list.push(<IFormElement>{
            name: 'middleName',
            label: 'Middle name',
            type: ElemntType.inputBox,
        });

        list.push(<IFormElement>{
            name: 'surname',
            label: 'Surname',
            type: ElemntType.inputBox,
            validationRules: [{ type: FormElementValidation.required }, { type: FormElementValidation.maxLength, value: 25 }, { type: FormElementValidation.minLength, value: 3 }]
        });

        list.push(<IFormElement>{
            name: 'age',
            label: 'Age',
            type: ElemntType.inputBox,
            validationRules: [{ type: FormElementValidation.required }, { type: FormElementValidation.maxLength, value: 2 }]
        });

        list.push(<IFormElement>{
            name: 'isMarried',
            label: 'Is married',
            type: ElemntType.checkBox,
            validationRules: [{ type: FormElementValidation.required }]
        });

        list.push(<IFormElement>{
            name: 'hairColor',
            label: 'Hair color',
            type: ElemntType.dropDown,
            initialData: [{ value: '1', text: 'Brown' }, { value: '2', text: 'Blond' }, { value: '3', text: 'Black' }, { value: '4', text: 'Red' }],
            validationRules: [{ type: FormElementValidation.required }]
        });

        list.push(<IFormElement>{
            name: 'personEmail',
            label: 'Email',
            type: ElemntType.inputBox,
            validationRules: [{ type: FormElementValidation.required }, { type: FormElementValidation.maxLength, value: 50 }, { type: FormElementValidation.email }]
        });

        return list;
    }

    public getInitialAddressDetailsFields() {

        var list: IFormElement[] = [];

        list.push(<IFormElement>{
            name: 'city',
            label: 'City',
            type: ElemntType.inputBox,
            validationRules: [{ type: FormElementValidation.required }, { type: FormElementValidation.maxLength, value: 40 }]
        });

        list.push(<IFormElement>{
            name: 'town',
            label: 'Town',
            type: ElemntType.inputBox,
            validationRules: [{ type: FormElementValidation.required }, { type: FormElementValidation.maxLength, value: 40 }]
        });

        list.push(<IFormElement>{
            name: 'addressOne',
            label: 'Address Line 1',
            type: ElemntType.inputBox,
            validationRules: [{ type: FormElementValidation.required }, { type: FormElementValidation.maxLength, value: 128 }]
        });

        list.push(<IFormElement>{
            name: 'addressTwo',
            label: 'Address Line 2',
            type: ElemntType.inputBox,
        });

        list.push(<IFormElement>{
            name: 'state',
            label: 'State',
            type: ElemntType.inputBox,
            validationRules: [{ type: FormElementValidation.required }, { type: FormElementValidation.maxLength, value: 2 }]
        });

        list.push(<IFormElement>{
            name: 'country',
            label: 'Country',
            type: ElemntType.inputBox,
            validationRules: [{ type: FormElementValidation.required }, { type: FormElementValidation.maxLength, value: 40 }]
        });

        list.push(<IFormElement>{
            name: 'zipCode',
            label: 'Zip code',
            type: ElemntType.inputBox,
            validationRules: [{ type: FormElementValidation.required }, { type: FormElementValidation.maxLength, value: 10 }]
        });

        return list;
    }

}