import { useEffect } from "react";

const pageBehaviors = {
  admin: () => import("../legacy/adminDashboard.js"),
  marketplace: () => import("../legacy/marketplace.js"),
};

export function useLegacyPageBehavior(page) {
  useEffect(() => {
    pageBehaviors[page]().catch((error) => {
      console.error(`Could not load ${page} page behavior:`, error);
    });
  }, [page]);
}
