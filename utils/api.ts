/**
 * Simple API helper
 * - set BASE_URL to your server (or use full URLs when calling)
 * - postData(path, payload) will POST JSON and return parsed response or text
 */

// export const BASE_URL = "http://localhost:3000"; // change to your server

// export async function postData(path: string, data: any) {
//   const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;
//   try {
//     const res = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const text = await res.text();

//     // try parse JSON, otherwise return raw text
//     try {
//       return JSON.parse(text);
//     } catch (_e) {
//       return text;
//     }
//   } catch (error) {
//     console.log("postData error:", error);
//     throw error;
//   }
// }


import { log, error as loggerError } from "./logger";
const BASE_URL = "https://ckartisan.com/api";

export const getData = async (endpoint: string) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    const text = await res.text();
    if (!res.ok) {
      log("getData error:", res.status, text);
      return null;
    }
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  } catch (err) {
    loggerError("getData fetch error:", err);
    return null;
  }
};

export const postData = async (endpoint: string, data: any) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const text = await res.text();
    if (!res.ok) {
      log("postData error:", res.status, text);
      return null;
    }
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  } catch (err) {
    loggerError("postData fetch error:", err);
    return null;
  }
};