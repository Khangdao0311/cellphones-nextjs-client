"use client";
// const axios = require("axios");
import axios from "axios";
import Cookies from "js-cookie";

import config from "@/app/config";

export async function register(
  name: string,
  phone: string,
  email: string,
  username: string,
  password: string
) {
  return axios
    .post(`${config.api.auth}/register`, { name, phone, email, username, password })
    .then((response: any) => response.data);
}

export async function login(account: string, password: string) {
  return axios
    .post(`${config.api.auth}/login`, { account, password })
    .then((response: any) => response.data);
}

export async function logout(username: string) {
  return axios.get(`${config.api.auth}/logout/${username}`).then((response: any) => response.data);
}

export function getUsername() {
  const username = Cookies.get("username");
  if (!username) return false;
  return username;
}

export function removeToken() {
  Cookies.remove("token");
  Cookies.remove("username");
}

export function getToken() {
  const token = Cookies.get("token");
  if (!token) return false;
  return token;
}

export function getRefreshToken() {
  const username = getUsername();
  return axios
    .post(`${config.api.auth}/refreshtoken`, { username: username })
    .then((response: any) => response.data);
}

export function getNewToken(refresh_token: string) {
  return axios
    .post(`${config.api.auth}/newtoken`, { refresh_token })
    .then((response: any) => response.data);
}

export async function refreshTokenFlow() {
  const refresh_token = await getRefreshToken();
  if (!refresh_token) {
    removeToken();
    return false;
  }
  const tokenNew = await getNewToken(refresh_token);
  Cookies.set("token", tokenNew);
  return tokenNew;
}

export function getProfile() {
  const token = getToken();
  const headers = { Authorization: `Bearer ${token}` };
  return axios
    .get(`${config.api.auth}/profile`, { headers })
    .then((response: any) => response.data);
}
