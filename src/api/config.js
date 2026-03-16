/**
 * API Configuration
 * Centralizes the API base URL using environment variables
 */

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
export const API_BASE_URL = `${API_URL}/api`

export default {
  API_URL,
  API_BASE_URL
}
