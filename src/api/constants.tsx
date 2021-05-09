export type GHVersion = {
    html_url: string,
    name: string,
    loading?: Boolean
};

export const FALLBACK_VER: GHVersion = {
    html_url: "",
    name: "Beta",
    loading: true
};

//const issues: (s: string) => string = s => (s + "/issues");
const issues = "issues";
const wiki = "wiki";

export const WIN_GITHUB: string = "charburgx/flplus-win";
export const WIN_SOURCE: string = "https://github.com/" + WIN_GITHUB;
export const WIN_ISSUES: string = WIN_SOURCE + '/' + issues;
export const WIN_WIKI:   string = WIN_SOURCE + '/' + wiki;