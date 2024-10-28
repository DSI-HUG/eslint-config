const UPPER_CASE_REGEXP = [
    // url params
    'PATIENT_ID',
    'SCOPEID',
    'SESSIONID',
    'EDS_ID',
    'DOCPAGE',

    // proxy call
    'REQUEST',
    'SERVERID',
    'SERVICEID',
    'SUBSERVICEID'
];

const NAMING_CONVENTIONS = [
    {
        'selector': 'default',
        'format': ['strictCamelCase']
    },
    {
        'selector': 'typeLike',
        'format': ['PascalCase']
    },
    {
        'selector': 'enumMember',
        'format': ['UPPER_CASE']
    },
    {
        'selector': 'typeProperty',
        'format': ['UPPER_CASE'],
        'filter': {
            'regex': `^(${UPPER_CASE_REGEXP.join('|')})$`,
            'match': true
        }
    },
    {
        'selector': 'objectLiteralProperty',
        'format': ['UPPER_CASE'],
        'filter': {
            'regex': `^(${UPPER_CASE_REGEXP.join('|')})$`,
            'match': true
        }
    },
    {
        'selector': 'property',
        'modifiers': ['static'],
        'format': ['UPPER_CASE']
    },
    {
        'selector': 'property',
        'format': ['strictCamelCase'],
        'leadingUnderscore': 'allow'
    },
    {
        'selector': 'parameter',
        'format': ['strictCamelCase'],
        'leadingUnderscore': 'allow'
    }
];

export const namingConventions = (overrides = []) => {
    const _namingConventions = [...NAMING_CONVENTIONS];
    overrides.forEach(override => {
        const index = _namingConventions.findIndex(
            item => item.selector === override.selector
        );
        if (index !== -1) {
            _namingConventions[index] = override;
        } else {
            _namingConventions.push(override);
        }
    });
    return _namingConventions;
};
