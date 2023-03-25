import { Movie, TheOneApiSdk } from '..';
import * as dotenv from 'dotenv';

dotenv.config();
const apiToken = process.env.API_TOKEN as string;

test('listQuotes', async () => {
    const sdk = TheOneApiSdk.new(apiToken);
    const quotes = await sdk.listQuotes('5cd95395de30eff6ebccde5d');
    expect(quotes).toHaveLength(872);

    expect(quotes[0]).toEqual({
        _id: '5cd96e05de30eff6ebcce7e9',
        character: '5cd99d4bde30eff6ebccfe9e',
        dialog: 'Deagol!',
        id: '5cd96e05de30eff6ebcce7e9',
        movie: '5cd95395de30eff6ebccde5d',
    });
});

test('getMovie', async () => {
    const sdk = TheOneApiSdk.new(apiToken);
    const movie = await sdk.getMovie('5cd95395de30eff6ebccde56');
    expect(movie).toEqual({
        _id: '5cd95395de30eff6ebccde56',
        academyAwardNominations: 30,
        academyAwardWins: 17,
        boxOfficeRevenueInMillions: 2917,
        budgetInMillions: 281,
        name: 'The Lord of the Rings Series',
        rottenTomatoesScore: 94,
        runtimeInMinutes: 558,
    });
});

test('getMovie: not found', async () => {
    const sdk = TheOneApiSdk.new(apiToken);
    await expect(sdk.getMovie('111')).rejects.toThrow('Request failed with status code 500');

    await expect(sdk.getMovie('5cd95395de30eff6eb111111')).resolves.toBeUndefined();
});

test('listMovies', async () => {
    const sdk = TheOneApiSdk.new(apiToken);
    const movies = await sdk.listMovies();

    const expectedMovies: Movie[] = [
        {
            _id: '5cd95395de30eff6ebccde56',
            academyAwardNominations: 30,
            academyAwardWins: 17,
            boxOfficeRevenueInMillions: 2917,
            budgetInMillions: 281,
            name: 'The Lord of the Rings Series',
            rottenTomatoesScore: 94,
            runtimeInMinutes: 558,
        },
        {
            _id: '5cd95395de30eff6ebccde57',
            academyAwardNominations: 7,
            academyAwardWins: 1,
            boxOfficeRevenueInMillions: 2932,
            budgetInMillions: 675,
            name: 'The Hobbit Series',
            rottenTomatoesScore: 66.33333333,
            runtimeInMinutes: 462,
        },
        {
            _id: '5cd95395de30eff6ebccde58',
            academyAwardNominations: 3,
            academyAwardWins: 1,
            boxOfficeRevenueInMillions: 1021,
            budgetInMillions: 200,
            name: 'The Unexpected Journey',
            rottenTomatoesScore: 64,
            runtimeInMinutes: 169,
        },
        {
            _id: '5cd95395de30eff6ebccde59',
            academyAwardNominations: 3,
            academyAwardWins: 0,
            boxOfficeRevenueInMillions: 958.4,
            budgetInMillions: 217,
            name: 'The Desolation of Smaug',
            rottenTomatoesScore: 75,
            runtimeInMinutes: 161,
        },
        {
            _id: '5cd95395de30eff6ebccde5a',
            academyAwardNominations: 1,
            academyAwardWins: 0,
            boxOfficeRevenueInMillions: 956,
            budgetInMillions: 250,
            name: 'The Battle of the Five Armies',
            rottenTomatoesScore: 60,
            runtimeInMinutes: 144,
        },
        {
            _id: '5cd95395de30eff6ebccde5b',
            academyAwardNominations: 6,
            academyAwardWins: 2,
            boxOfficeRevenueInMillions: 926,
            budgetInMillions: 94,
            name: 'The Two Towers',
            rottenTomatoesScore: 96,
            runtimeInMinutes: 179,
        },
        {
            _id: '5cd95395de30eff6ebccde5c',
            academyAwardNominations: 13,
            academyAwardWins: 4,
            boxOfficeRevenueInMillions: 871.5,
            budgetInMillions: 93,
            name: 'The Fellowship of the Ring',
            rottenTomatoesScore: 91,
            runtimeInMinutes: 178,
        },
        {
            _id: '5cd95395de30eff6ebccde5d',
            academyAwardNominations: 11,
            academyAwardWins: 11,
            boxOfficeRevenueInMillions: 1120,
            budgetInMillions: 94,
            name: 'The Return of the King',
            rottenTomatoesScore: 95,
            runtimeInMinutes: 201,
        },
    ];

    expect(movies).toEqual(expectedMovies);
});

