import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 387,
  site: "mysite",
  domains: ["mysite.deco.site"],
});