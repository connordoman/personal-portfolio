/*
 * Created on Thu Dec 15 2022
 * Copyright (c) 2022 Connor Doman
 */
export const dev = process.env.NODE_ENV !== "production";
export const server = dev ? "http://localhost:3000" : "http://localhost:3000";
// export const server = dev ? "http://localhost:3000" : "https://connordoman.dev";
// export const server = "http://localhost:3000";
