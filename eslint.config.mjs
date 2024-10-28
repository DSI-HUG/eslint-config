import hug from './index.mjs';

let config;

if (process.env.CONFIG === 'MODERATE') {
    console.log('Using config "moderate"');
    config = await hug.configs.moderate;
} else {
    console.log('Using config "recommended"');
    config = await hug.configs.recommended;
}

export default [
    ...config,
    {
        ignores: [
            'examples/'
        ]
    }
];
