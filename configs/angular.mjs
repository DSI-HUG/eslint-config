import angularPlugin from 'angular-eslint';
import tsPlugin from 'typescript-eslint';

const angularPluginTsBaseConfig = (plugin, parser) => ({
    name: 'angular-eslint/ts-base',
    languageOptions: {
        parser,
        sourceType: 'module',
    },
    plugins: {
        '@angular-eslint': plugin,
    },
});

const angularPluginTemplateBaseConfig = (plugin, parser) => ({
    name: 'angular-eslint/template-base',
    languageOptions: {
        parser,
    },
    plugins: {
        '@angular-eslint/template': plugin,
    },
});

/**
 * @typedef {import('@typescript-eslint/utils').TSESLint.FlatConfig.Rules} Rules
 * @typedef {import('eslint').Linter.Config} Config
 */

/** @type {Record<'TS' | 'HTML', Rules>} */
const RECOMMENDED_RULES = {
    TS: {
        // Disallow having too many lines in inline template and styles
        // http://codelyzer.com/rules/component-max-inline-declarations
        '@angular-eslint/component-max-inline-declarations': [
            'error',
            {
                template: 3,
                styles: 3,
                animations: 30,
            },
        ],

        // Component selectors should follow given naming rules
        // http://codelyzer.com/rules/component-selector
        '@angular-eslint/component-selector': [
            'error',
            {
                type: 'element',
                prefix: '',
                style: 'kebab-case',
            },
        ],

        // Ensure that classes use contextual decorators in its body
        // http://codelyzer.com/rules/contextual-decorator
        '@angular-eslint/contextual-decorator': 'error',

        // Directive selectors should follow given naming rules
        // http://codelyzer.com/rules/directive-selector
        '@angular-eslint/directive-selector': [
            'error',
            {
                type: 'attribute',
                prefix: '',
                style: 'camelCase',
            },
        ],

        // Disallow the declaration of impure pipes
        // http://codelyzer.com/rules/no-pipe-impure
        '@angular-eslint/no-pipe-impure': 'error',

        // Prefer to declare @Output as readonly since they are not supposed to be reassigned
        // http://codelyzer.com/rules/prefer-output-readonly
        '@angular-eslint/prefer-output-readonly': 'error',

        // Enforce component’s change detection to ChangeDetectionStrategy.OnPush
        // http://codelyzer.com/rules/prefer-on-push-component-change-detection
        '@angular-eslint/prefer-on-push-component-change-detection': 'error',

        // The ./ prefix is standard syntax for relative URLs; don’t depend on Angular’s current ability to do without that prefix
        // http://codelyzer.com/rules/relative-url-prefix
        '@angular-eslint/relative-url-prefix': 'error',

        // Component selector must be declared
        // http://codelyzer.com/rules/use-component-selector
        '@angular-eslint/use-component-selector': 'error',
    },
    HTML: {
        // The condition complexity shouldn’t exceed a rational limit in a template
        // http://codelyzer.com/rules/template-conditional-complexity
        '@angular-eslint/template/conditional-complexity': 'error',

        // Disallow using ‘$any’ in templates.
        // http://codelyzer.com/rules/template-no-any
        '@angular-eslint/template/no-any': 'error',
    },
};

/** @type {(name: string, files?: (string | string[])[], rules?: Rules) => Config[]} */
const html = (name, files, rules) =>
    // @ts-expect-error
    tsPlugin.config({
        name,
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        extends: rules
            ? [angularPluginTemplateBaseConfig(angularPlugin.templatePlugin, angularPlugin.templateParser)]
            : [...angularPlugin.configs.templateRecommended, ...angularPlugin.configs.templateAccessibility],
        rules: rules ?? {},
    });

/** @type {(name: string, files?: (string | string[])[], rules?: Rules) => Config[]} */
const ts = (name, files, rules) =>
    // @ts-expect-error
    tsPlugin.config({
        name,
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        // @ts-expect-error
        extends: rules
            ? [angularPluginTsBaseConfig(angularPlugin.tsPlugin, tsPlugin.parser)]
            : [...angularPlugin.configs.tsRecommended],
        processor: angularPlugin.processInlineTemplates,
        rules: rules ?? {},
    });

export default {
    /** @type {Record<'ts' | 'html', (files?: (string | string[])[]) => Config[]>} */
    recommended: {
        ts: files => ts('hug/recommended/angular', files, RECOMMENDED_RULES.TS),
        html: files => html('hug/recommended/angular-html', files, RECOMMENDED_RULES.HTML),
    },

    /** @type {Record<'ts' | 'html', (files?: (string | string[])[]) => Config[]>} */
    moderate: {
        ts: files =>
            ts('hug/moderate/angular', files, {
                ...RECOMMENDED_RULES.TS,

                // Enforce component’s change detection to ChangeDetectionStrategy.OnPush
                // http://codelyzer.com/rules/prefer-on-push-component-change-detection
                '@angular-eslint/prefer-on-push-component-change-detection': 'off',
            }),
        html: files => html('hug/moderate/angular-html', files, RECOMMENDED_RULES.HTML),
    },

    /** @type {(files?: (string | string[])[], rules?: Rules) => Config[]} */
    ts: (files, rules) => ts('hug/defaults/angular (overrides)', files, rules),

    /** @type {(files?: (string | string[])[], rules?: Rules) => Config[]} */
    html: (files, rules) => html('hug/defaults/angular-html (overrides)', files, rules),
};
