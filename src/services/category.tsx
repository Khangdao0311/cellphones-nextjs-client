"use client";
import axios from "axios";

import config from "@/config";
import * as authServices from "@/services/auth";

export async function getAll() {
  return axios.get(`${config.api.category}`).then((response: any) => response.data);
}

export async function getHasProduct() {
  return axios.get(`${config.api.category}/hasproduct`).then((response: any) => response.data);
}

export async function getById(id: string) {
  return axios.get(`${config.api.category}/${id}`).then((response: any) => response.data);
}

export async function getQuery(params: any) {
  return axios
    .get(`${config.api.category}/query`, { params })
    .then((response: any) => response.data);
}

export async function getTotalPagesQuery(params: any) {
  return axios
    .get(`${config.api.category}/totalpagesquery`, { params })
    .then((response: any) => response.data);
}

export async function add(name: string) {
  const token = authServices.getToken();
  if (!token) return false;
  const headers = { Authorization: `Bearer ${token}` };
  return axios
    .post(`${config.api.category}`, { name }, { headers })
    .then((response: any) => response.data);
}

export async function edit(id: string, name: string) {
  const token = authServices.getToken();
  if (!token) return false;
  const headers = { Authorization: `Bearer ${token}` };
  return axios
    .put(`${config.api.category}/${id}`, { name }, { headers })
    .then((response: any) => response.data);
}

export async function cancel(id: string) {
  const token = authServices.getToken();
  if (!token) return false;
  const headers = { Authorization: `Bearer ${token}` };
  return axios
    .delete(`${config.api.category}/${id}`, { headers })
    .then((response: any) => response.data);
}
