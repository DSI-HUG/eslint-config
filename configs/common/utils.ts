import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export const isPackageInstalled = (name: string): boolean => {
    try {
        require.resolve(name);
        return true;
    } catch {
        return false;
    }
};

export const dedupeByName = <T extends { name?: string }>(items: T[]): T[] => {
    const map = new Map<string, T>();
    const withoutName: T[] = [];

    items.forEach(item => {
        if (item.name) {
            map.set(item.name, item);
        } else {
            withoutName.push(item);
        }
    });

    return [...map.values(), ...withoutName];
};
