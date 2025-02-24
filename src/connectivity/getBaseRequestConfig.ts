export interface GetBaseRequestConfig {
  accessToken?: string;
  contentType?: string;
}

export function getBaseRequestConfig({
  contentType,
}: GetBaseRequestConfig = {}) {
  const hasGithubToken = !!import.meta.env.VITE_GITHUB_TOKEN;

  return {
    method: "GET",
    headers: {
      "Content-Type": contentType || "application/json",
      Accept: "application/vnd.github+json",
      // conditional object property inclusion - Properties are merged into the parent object
      ...(hasGithubToken
        ? { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` }
        : {}),
    },
  };
}
