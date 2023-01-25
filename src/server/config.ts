const env = process.env;

export const PORT = env.PORT ?? "8080";
export const HOST = env.HOST ?? "localhost";
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URI =
  env.MONGODB_URI ?? "mongodb+srv://root:mangotree1999@namingcontestapp.2cgmzmx.mongodb.net/?retryWrites=true&w=majority";
export const DATABASE_NAME = env.DATABASE_NAME ?? "NamingContestApp";

export default {
  PORT,
  HOST,
  SERVER_URL,
};
