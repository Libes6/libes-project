import { clsMix } from './clsMix';

describe('className', () => {
    test('test one arg', () => {
        expect(clsMix('maxclass')).toBe('maxclass');
    });

    test('test one arg and mode', () => {
        const expected = 'maxclass hovered scrollable';
        expect(
            clsMix('maxclass', { hovered: true, scrollable: true })
        ).toBe(expected);
    });

    test('test one arg and mode and additional ', () => {
        const expected = 'maxclass class1 class2';
        expect(clsMix('maxclass', {}, ['class1', 'class2'])).toBe(
            expected
        );
    });
});
