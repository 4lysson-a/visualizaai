import Parse from 'parse/dist/parse.min.js';

const PARSE_HOST_URL = import.meta.env.VITE_PARSE_HOST_URL;
const PARSE_APPLICATION_ID = import.meta.env.VITE_PARSE_APPLICATION_ID;
const PARSE_JAVASCRIPT_KEY = import.meta.env.VITE_PARSE_JAVASCRIPT_KEY;

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export { Parse as AppParse };
