import dotenv from 'dotenv';

dotenv.config();

export const EMAILJS_ACCESS_TOKEN = process.env['EMAILJS_ACCESS_TOKEN'];
export const EMAILJS_SERVICE_ID = process.env['EMAILJS_SERVICE_ID'];
export const EMIALJS_TEMPLATE_ID_SUBSCRIBE = process.env['EMAILJS_TEMPLATE_ID_SUBSCRIBE'];
export const EMAILJS_USER_ID = process.env['EMAILJS_USER_ID'];
export const SANITY_DATASET = process.env['SANITY_DATASET'];
export const SANITY_PROJECT_ID = process.env['SANITY_PROJECT_ID'];
export const SANITY_TOKEN = process.env['SANITY_TOKEN'];
