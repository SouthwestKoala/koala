import dotenv from 'dotenv';

dotenv.config();

export const SANITY_DATASET = process.env['SANITY_DATASET'];
export const SANITY_PROJECT_ID = process.env['SANITY_PROJECT_ID'];
export const SANITY_TOKEN = process.env['SANITY_TOKEN'];
