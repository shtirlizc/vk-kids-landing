import { categoryQueryParameter } from "./data.ts";

export const setCategoryInUrl = (category: string) => {
  const url = new URL(window.location.href);

  if (url.searchParams.get(categoryQueryParameter) === category) return;

  url.searchParams.set(categoryQueryParameter, category);
  window.history.pushState(window.history.state, "", url);
};
