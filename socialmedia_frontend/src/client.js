// Connects front-end of sanity to populate database
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    // ProjectId and token located in .env file for security
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-28',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
});
// Used since the application works with images
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);