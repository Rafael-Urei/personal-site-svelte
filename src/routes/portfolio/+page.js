import { dev } from '$app/environment';

export async function load({fetch}) {
    const res = await fetch(`https://gist.githubusercontent.com/Rafael-Urei/94b6c4de4a94e10d2696ff3d4f438a2c/raw/50d6aac1ed5d31016dd40ae09d3c31faf6ba5e3a/projects.json`)
    const projects = await res.json();

    return {
        projects
    }
}

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
