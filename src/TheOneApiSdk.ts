import axios from "axios";
import { Movie } from "./Movie";
import { Quote } from "./Quote";

export class TheOneApiSdk {
    static new(apiToken: string): TheOneApiSdk {
        const token = apiToken || process.env.THE_ONE_API_TOKEN;
        if (!token) {
            throw new Error('TheOneApiSdk: No API token provided');
        }
        return new TheOneApiSdk(token);
    }

    async listMovies(): Promise<Movie[]> {
        // Ignore pages for now, just return all movies from the first page
        // It's not like there are that many movies in the database
        const result = await this.callApi('movie');
        return result.docs as Movie[];
    }

    async getMovie(movieId: string): Promise<Movie | undefined> {
        // There can only be one movie with a given ID
        const result = await this.callApi(`movie/${movieId}`);
        return (result.docs as Movie[])[0];
    }

    async listQuotes(movieId: string): Promise<Quote[]> {
        // TODO: Handle pagination
        const result = await this.callApi(`movie/${movieId}/quote`);
        return result.docs as Quote[];
    }

    private async callApi(endpoint: string): Promise<Record<string, unknown>> {
        const url = `https://the-one-api.dev/v2/${endpoint}`;
        const headers = {
            Authorization: `Bearer ${this.apiToken}`,
        };
        const response = await axios.get(url, {headers});
        return response.data;
    }

    private constructor(private apiToken: string) {
    }
}
