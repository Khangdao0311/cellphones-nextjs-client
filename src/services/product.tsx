"use client";

import axios from "axios";
import config from "@/config";

export async function getById(id: string) {
  return axios.get(`${config.api.product}/${id}`).then((response: any) => response.data);
}

export async function getSame(id: string, limit: number) {
  return axios
    .get(`${config.api.product}/same/${id}/${limit}`)
    .then((response: any) => response.data);
}

export async function getQuery(params: any) {
  return axios
    .get(`${config.api.product}/query`, { params })
    .then((response: any) => response.data);
}

export async function getTotalPagesQuery(params: any) {
  return axios
    .get(`${config.api.product}/totalpagesquery`, { params })
    .then((response: any) => response.data);
}
