export const MULTI_STEP_FORM_DATA = [
    {
        'stepID': 1,
        'stepname': 'User info',
        'subStepForm': [
            {
                'subStepID': 1,
                'stepname': 'User Name',
                'formFields': [
                    {
                        'key': 'User Name',
                        'input': 'text',
                        'valids': [
                            {
                                'valid': 'required',
                                'error': 'User Name is required'
                            }
                        ]
                    }
                ],
                'type': 'sub_step_form'
            },
            {
                'subStepID': 2,
                'stepname': 'Job',
                'formFields': [
                    {
                        'key': 'Job',
                        'input': 'text',
                        'valids': [
                            {
                                'valid': 'required',
                                'error': 'Job is required'
                            }
                        ]
                    }
                ],
                'type': 'sub_step_form'
            }
        ],
        'type': 'sub_step_form'
    },
    {
        'stepID': 2,
        'stepname': 'basic',
        'formFields': [
            {
                'key': 'firstName',
                'input': 'text',
                'valids': [{
                    'valid': 'required',
                    'error': 'firstName is required'
                },
                {
                    'valid': 'pattern',
                    'validator': '^[a-zA-Z]+$',
                    'error': 'firstName is accept only text'
                },
                {
                    'valid': 'minlength',
                    'length': 3,
                    'error': 'firstName must be at least 3 characters'
                }
                ]
            },
            {
                'key': 'middleName',
                'input': 'text',
                'valids': []
            },
            {
                'key': 'lastName',
                'input': 'text',
                'valids': [{
                    'valid': 'required',
                    'error': 'lastName is required'
                },
                {
                    'valid': 'pattern',
                    'validator': '^[a-zA-Z]+$',
                    'error': 'lastName is accept only text'
                },
                {
                    'valid': 'minlength',
                    'length': 3,
                    'error': 'lastName must be at least 3 characters'
                }
                ]
            },
            {
                'key': 'marital status',
                'input': 'select',
                'items': [{
                    'name': 'married',
                    'id': 0
                },
                {
                    'name': 'unmarried',
                    'id': 1
                }
                ],
                'valids': []
            },
            {
                'key': 'gender',
                'input': 'radio',
                'items': [{
                    'name': 'male',
                    'id': 0
                },
                {
                    'name': 'female',
                    'id': 1
                }
                ],
                'valids': []
            }
        ]
    },
    {
        'stepID': 3,
        'stepname': 'contact',
        'formFields': [
            {
                'key': 'emailId',
                'input': 'email',
                'valids': [{
                    'valid': 'required',
                    'error': 'emailId is required'
                },
                {
                    'valid': 'emailId',
                    'error': 'emailId must be valid'
                }
                ]
            },
            {
                'key': 'mobile',
                'input': 'text',
                'valids': [{
                    'valid': 'required',
                    'error': 'mobile is required'
                },
                {
                    'valid': 'pattern',
                    'validator': '^[0-9]{10}$',
                    'error': 'mobile is accept only number and maximum 10 numbers '
                }
                ]
            },
        ]
    },
    {
        'stepID': 4,
        'stepname': 'other',
        'formFields': [
            {
                'key': 'country',
                'input': 'text',
                'valids': [{
                    'valid': 'required',
                    'error': 'country is required'
                },
                ]
            },
            {
                'key': 'state',
                'input': 'text',
                'valids': [{
                    'valid': 'required',
                    'error': 'state is required'
                },
                ]
            }
        ]
    }
];
