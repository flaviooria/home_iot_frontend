import type { PageServerLoad } from './$types';
import { api } from '$lib/api';

export const load = (async ({fetch}) => {
    const res = await fetch('http://localhost:8000/api/v1/installations');
    const data = await res.json();

    return { installations: data };
}) satisfies PageServerLoad;