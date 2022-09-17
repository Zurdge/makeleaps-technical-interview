import {findByName, sortByPopularity} from './index';
/*
No need to edit this file
*/
describe('Find artist', () => {
    test('Function returns Andy Murry', () => {
        const artist = findByName('Andy Murry');
        expect(artist).toEqual({
            index: 8,
            fans: 1810,
            albums: 1,
            type: 'Hip hop',
            name: 'Andy Murry',
        });
    });

    test('Function returns sorted ascending array', () => {
        const artists = sortByPopularity();
        expect(artists[0]).toEqual({
            index: 6,
            fans: 39117,
            albums: 4,
            type: 'Heavy Metal',
            name: 'Schmidt Chaney',
        });

        expect(artists[artists.length - 1]).toEqual({
            index: 8,
            fans: 1810,
            albums: 1,
            type: 'Hip hop',
            name: 'Andy Murry',
        });
    });

    test('Function returns sorted descending array', () => {
        const artists = sortByPopularity('desc');
        expect(artists[0]).toEqual({
            index: 8,
            fans: 1810,
            albums: 1,
            type: 'Hip hop',
            name: 'Andy Murry',
        });

        expect(artists[artists.length - 1]).toEqual({
            index: 6,
            fans: 39117,
            albums: 4,
            type: 'Heavy Metal',
            name: 'Schmidt Chaney',
        });
    });
});
