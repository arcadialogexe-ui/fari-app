import { createClient } from "@liveblocks/client";

export const LIVEBLOCKS_PUBLIC_KEY = "pk_dev_WF18YLyHC6vGKdIbi5y0aCPF3jnLh_2Ef-vdt81JjENNu57ZxbG3Nw3FKETEfrGM";

export function makeLiveBlocksClient() {
  return createClient({
    publicApiKey: LIVEBLOCKS_PUBLIC_KEY,
  });
}
