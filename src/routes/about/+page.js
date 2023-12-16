import { dev } from '$app/environment';

export async function load({fetch}){
    const res = await fetch(`https://gist.githubusercontent.com/Rafael-Urei/9accd0245d8f80e9aa2ac4d6a5663f88/raw/4170c1e8fe3a8a7200ba6637f5269413d6339ef7/experience.json`);
    const expdata = await res.json();

    return {
        expdata
    }
}
// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
