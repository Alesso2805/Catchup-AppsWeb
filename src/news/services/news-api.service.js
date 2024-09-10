import axios from "axios";
import {LogoApiService} from "../../shared/services/logo-api.service.js";
/**
 * Axios instance
 * @type {AxiosInstance}
 */
const http = axios.create({
    baseURL: 'https://newsapi.org/v2',
});
/**
 * News API key
 * @type {string}
 */
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
/**
 * NewsApiService
 * @class NewsApiService
 * @description
 * Service class for fetching news data from the News API.
 * @property {string} apiKey - The News API key.
 * @property {LogoApiService} logoApi - The logo API service.
 */
export class NewsApiService {
    apiKey = NEWS_API_KEY;
    logoApi = new LogoApiService();
    /**
     * Fetches the sources from the News API.
     * @returns {Promise} The promise object representing the sources.
     */
    getSources() {
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }
    /**
     * Fetches the articles for a source from the News API.
     * @param {string} sourceId - The source id.
     * @returns {Promise} The promise object representing the articles.
     */
    getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }
    /**
     * Builds the logo URL for a source from the News API.
     * @param {Source} source - The source entity.
     * @returns {string} The logo url.
     */
    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }
}