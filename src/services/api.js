const API_BASE_URL = import.meta.env.VITE_BASE_API_URL
const AUTH_TOKEN = import.meta.env.VITE_BASIC_AUTH_TOKEN

const defaultHeaders = {
  Authorization: `Basic ${AUTH_TOKEN}`,
}

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`)
  }
  const data = await response.json()
  return data.data || []
}

export async function fetchCourts() {
  const res = await fetch(`${API_BASE_URL}/v1/public/courts`, {
    headers: defaultHeaders,
  })
  return handleResponse(res)
}

export async function fetchInvestors() {
  const res = await fetch(`${API_BASE_URL}/v1/public/investors`, {
    headers: defaultHeaders,
  })
  return handleResponse(res)
}

export async function fetchEvents() {
  const res = await fetch(`${API_BASE_URL}/v1/public/events`, {
    headers: defaultHeaders,
  })
  return handleResponse(res)
}

export async function fetchCompanyStats() {
  const res = await fetch(`${API_BASE_URL}/v1/public/companyData`, {
    headers: defaultHeaders,
  })
  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`)
  }
  const data = await res.json()
  return data.data
}

export async function sendContactEmail(formData) {
  const res = await fetch(`${API_BASE_URL}/v1/email/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })

  if (!res.ok) {
    throw new Error(`Server error: ${res.status}`)
  }

  return res.json()
}
