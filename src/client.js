

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "p7wt73d0",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: "skCc2vIIiR2JkDw9DfpOie71iH9TZM9EqovNdb3lNEnPrm7dS5nNJOSOV66GGmJK8BMQJ4m3YNydhEMyc4q2sUdl1RWqLAKMS6MyeVqsdZPr15HtkYUUDHRRXZmnNejgIt69EQ4FJZMdwCNkTw2STQlzJSlt1XimPcYUzIbtFcAuHrN6Mcci",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);