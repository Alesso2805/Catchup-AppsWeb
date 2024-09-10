import {Source} from "./source.entity.js";
/**
 * Article entity
 * @class Article
 * @description
 * Represents an article entity.
 * @property {string} title - The article title.
 * @property {string} description - The article description.
 * @property {string} url - The article url.
 * @property {string} urlToImage - The article image url.
 * @property {Source} source - The article source.
 * @property {Date} publishedAt - The article publication date.
 */
export class Article {
    /**
     * Creates an instance of Article.
     * @param {string} [title=''] - The article title.
     * @param {string} [description=''] - The article description.
     * @param {string} [url=''] - The article url.
     * @param {string} [urlToImage=''] - The article image url.
     * @param {object} [source=null] - The article source.
     * @param {string} [publishedAt=''] - The article publication date.
     */
    constructor(title = '', description = '', url = '', urlToImage = '', source =
        null, publishedAt = '') {
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.source = source ? new Source(source) : null;
        this.publishedAt = new Date(publishedAt);
    }
}