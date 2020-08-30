export const request = async ({ method, path, body }) => {
    const headers = { "Content-Type": "application/json" }
    const res = await fetch(`${process.env.API_URL || "http://localhost:4001"}${path}`, { method, headers, body: JSON.stringify(body) })
    return res
}