import * as Constants from './constants';

test('API Constants not null', () => {
    Object.values(Constants).forEach(el => {
        expect(el).not.toBeNull()
    })
})