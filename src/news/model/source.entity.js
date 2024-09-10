/**
 * Source entity
 * @class Source
 * @description
 * Represents a source entity.
 * @property {string} id - The source id.
 * @property {string} name - The source name.
 * @property {string} description - The source description.
 * @property {string} url - The source url.
 * @property {string} category - The source category.
 * @property {string} language - The source language.
 * @property {string} country - The source country.
 * @property {string} urlToLogo - The source logo url.
 */
export class Source {
    /**
     * Creates an instance of Source.
     * @param {string} [id=''] - The source id.
     * @param {string} [name=''] - The source name.
     * @param {string} [description=''] - The source description.
     * @param {string} [url=''] - The source url.
     * @param {string} [category=''] - The source category.
     * @param {string} [language=''] - The source language.
     * @param {string} [country=''] - The source country.
     */
    constructor({
                    id = '', name = '', description = '', url = '', category = '',
                    language = '', country = ''
                }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.category = category;
        this.language = language;
        this.country = country;
        this.urlToLogo = null;
    }
}