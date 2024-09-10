import axios from "axios";
import {LogoApiService} from "@/shared/services/logo-api.service.js";
const http = axios.create({
    baseURL: 'https://newsapi.org/v2',
});
const NEWS_API_KEY = 'd081379599d14dd69ef71aa198f9f6d1';
export class NewsApiService {
    apiKey = NEWS_API_KEY;
    logoApi = new LogoApiService();
    getSources() {
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }
    getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }
    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }
}