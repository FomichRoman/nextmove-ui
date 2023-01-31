import { getContentType } from './../utils/api.utils';
import axios from 'axios'

export const API_URL = `${process.env.APP_URL}/api`

export const axiosClassic = axios.create({
  baseURL: API_URL,
  headers: getContentType()
})