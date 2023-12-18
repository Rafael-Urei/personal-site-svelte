import { dev } from '$app/environment';

export async function load({fetch}) {
    const res = await fetch(`https://gist.githubusercontent.com/Rafael-Urei/1b65db476c98b3c9e4c3886acec8ed05/raw/de2fcce88ea10368e5d3afd1db341ce915ccc851/projects.json`)
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
