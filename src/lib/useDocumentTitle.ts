import { useEffect } from "react";
import { profile } from "../data/profile";

export const SITE_TITLE = `${profile.name} — ${profile.title}`;

/** Sets the browser tab title; pass nothing for the site's default title. */
export function useDocumentTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} — ${profile.name}` : SITE_TITLE;
  }, [pageTitle]);
}
