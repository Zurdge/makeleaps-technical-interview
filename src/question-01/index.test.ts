import {findByName, sortByPopularity} from './index';
import artistsData from '../data/artists';

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

        expect(originalArtistData).toEqual(artistsData);
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

const originalArtistData = [
    {
      "index": 0,
      "fans": 34849,
      "albums": 6,
      "type": "Rock",
      "name": "Rivas Avila"
    },
    {
      "index": 1,
      "fans": 13729,
      "albums": 10,
      "type": "Jazz",
      "name": "Underwood Mullins"
    },
    {
      "index": 2,
      "fans": 34945,
      "albums": 10,
      "type": "Rock",
      "name": "Dyer Blackwell"
    },
    {
      "index": 3,
      "fans": 22563,
      "albums": 16,
      "type": "Electronic",
      "name": "Jeanie Peters"
    },
    {
      "index": 4,
      "fans": 3496,
      "albums": 6,
      "type": "Hip hop",
      "name": "Berta Sparks"
    },
    {
      "index": 5,
      "fans": 12245,
      "albums": 16,
      "type": "Electronic",
      "name": "Moses Anthony"
    },
    {
      "index": 6,
      "fans": 39117,
      "albums": 4,
      "type": "Heavy Metal",
      "name": "Schmidt Chaney"
    },
    {
      "index": 7,
      "fans": 30503,
      "albums": 16,
      "type": "Rock",
      "name": "Dale Salas"
    },
    {
      "index": 8,
      "fans": 1810,
      "albums": 1,
      "type": "Hip hop",
      "name": "Andy Murry"
    },
    {
      "index": 9,
      "fans": 36450,
      "albums": 15,
      "type": "Rock",
      "name": "Odom Buckner"
    }
  ]