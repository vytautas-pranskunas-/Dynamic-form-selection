var FormBuilderService = (function () {
    function FormBuilderService() {
    }
    FormBuilderService.prototype.getInitialPersonDetailsFields = function () {
        var list = [];
        list.push({
            name: 'name',
            label: 'Name',
            type: 1 /* inputBox */,
            validationRules: [{ type: 1 /* required */ }, { type: 2 /* maxLength */, value: 25 }, { type: 3 /* minLength */, value: 3 }]
        });
        list.push({
            name: 'middleName',
            label: 'Middle name',
            type: 1 /* inputBox */,
        });
        list.push({
            name: 'surname',
            label: 'Surname',
            type: 1 /* inputBox */,
            validationRules: [{ type: 1 /* required */ }, { type: 2 /* maxLength */, value: 25 }, { type: 3 /* minLength */, value: 3 }]
        });
        list.push({
            name: 'age',
            label: 'Age',
            type: 1 /* inputBox */,
            validationRules: [{ type: 1 /* required */ }, { type: 2 /* maxLength */, value: 2 }]
        });
        list.push({
            name: 'isMarried',
            label: 'Is married',
            type: 2 /* checkBox */,
            validationRules: [{ type: 1 /* required */ }]
        });
        list.push({
            name: 'hairColor',
            label: 'Hair color',
            type: 3 /* dropDown */,
            initialData: [{ value: '1', text: 'Brown' }, { value: '2', text: 'Blond' }, { value: '3', text: 'Black' }, { value: '4', text: 'Red' }],
            validationRules: [{ type: 1 /* required */ }]
        });
        list.push({
            name: 'personEmail',
            label: 'Email',
            type: 1 /* inputBox */,
            validationRules: [{ type: 1 /* required */ }, { type: 2 /* maxLength */, value: 50 }, { type: 4 /* email */ }]
        });
        return list;
    };
    FormBuilderService.prototype.getInitialAddressDetailsFields = function () {
        var list = [];
        list.push({
            name: 'city',
            label: 'City',
            type: 1 /* inputBox */,
            validationRules: [{ type: 1 /* required */ }, { type: 2 /* maxLength */, value: 40 }]
        });
        list.push({
            name: 'town',
            label: 'Town',
            type: 1 /* inputBox */,
            validationRules: [{ type: 1 /* required */ }, { type: 2 /* maxLength */, value: 40 }]
        });
        list.push({
            name: 'addressOne',
            label: 'Address Line 1',
            type: 1 /* inputBox */,
            validationRules: [{ type: 1 /* required */ }, { type: 2 /* maxLength */, value: 128 }]
        });
        list.push({
            name: 'addressTwo',
            label: 'Address Line 2',
            type: 1 /* inputBox */,
        });
        list.push({
            name: 'state',
            label: 'State',
            type: 1 /* inputBox */,
            validationRules: [{ type: 1 /* required */ }, { type: 2 /* maxLength */, value: 2 }]
        });
        list.push({
            name: 'country',
            label: 'Country',
            type: 1 /* inputBox */,
            validationRules: [{ type: 1 /* required */ }, { type: 2 /* maxLength */, value: 40 }]
        });
        list.push({
            name: 'zipCode',
            label: 'Zip code',
            type: 1 /* inputBox */,
            validationRules: [{ type: 1 /* required */ }, { type: 2 /* maxLength */, value: 10 }]
        });
        return list;
    };
    FormBuilderService.serviceId = "formBuilder";
    return FormBuilderService;
})();
//# sourceMappingURL=FormBuilderService.js.map