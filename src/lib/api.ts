import { PUBLIC_BASE_URL } from '$env/static/public';

export const api = {
    get: async (endpoint: string, customFetch: typeof fetch): Promise<any> => {
        try {
            const response = await customFetch(`${PUBLIC_BASE_URL}/api/v1${endpoint}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Error ${response.status}: ${text}`);
            }

            return response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    },
};