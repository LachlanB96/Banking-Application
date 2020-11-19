

export async function login(data) {
    const response = await fetch(`/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credentials: data })
    })
    return await response.json();
}