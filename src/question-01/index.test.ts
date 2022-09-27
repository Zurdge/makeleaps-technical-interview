import {filterByType, sortByPopularity} from './index';
import artistsData from '../data/artists';

/*
No need to edit this file
*/
describe('Question-01', () => {
    test('Function returns Andy Murry', () => {
        // eslint-disable-next-line no-console
        console.log('Question-01 : Task 1');

        const artists = filterByType('Rock');
        expect(artists).toHaveLength(4);
    });

    test('Function returns sorted ascending array', () => {
        // eslint-disable-next-line no-console
        console.log('Question-01 : Task 2');

        // eslint-disable-next-line no-use-before-define
        expect(originalArtistData).toEqual(artistsData);

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

        // eslint-disable-next-line no-use-before-define
        expect(originalArtistData).toEqual(artistsData);
    });

    test('Function returns sorted descending array', () => {
        // eslint-disable-next-line no-console
        console.log('Question-01 : Task 3');

        // eslint-disable-next-line no-use-before-define
        expect(originalArtistData).toEqual(artistsData);

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

        // eslint-disable-next-line no-use-before-define
        expect(originalArtistData).toEqual(artistsData);
    });
});

const originalArtistData = [
    {
        index: 0,
        fans: 34849,
        albums: 6,
        type: 'Rock',
        name: 'Rivas Avila',
    },
    {
        index: 1,
        fans: 13729,
        albums: 10,
        type: 'Jazz',
        name: 'Underwood Mullins',
    },
    {
        index: 2,
        fans: 34945,
        albums: 10,
        type: 'Rock',
        name: 'Dyer Blackwell',
    },
    {
        index: 3,
        fans: 22563,
        albums: 16,
        type: 'Electronic',
        name: 'Jeanie Peters',
    },
    {
        index: 4,
        fans: 3496,
        albums: 6,
        type: 'Hip hop',
        name: 'Berta Sparks',
    },
    {
        index: 5,
        fans: 12245,
        albums: 16,
        type: 'Electronic',
        name: 'Moses Anthony',
    },
    {
        index: 6,
        fans: 39117,
        albums: 4,
        type: 'Heavy Metal',
        name: 'Schmidt Chaney',
    },
    {
        index: 7,
        fans: 30503,
        albums: 16,
        type: 'Rock',
        name: 'Dale Salas',
    },
    {
        index: 8,
        fans: 1810,
        albums: 1,
        type: 'Hip hop',
        name: 'Andy Murry',
    },
    {
        index: 9,
        fans: 36450,
        albums: 15,
        type: 'Rock',
        name: 'Odom Buckner',
    },
];
