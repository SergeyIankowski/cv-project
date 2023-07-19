import {WatchQueryFetchPolicy} from "@apollo/client";
import {MutationFetchPolicy} from "@apollo/client/core/watchQueryOptions";

interface FetchPolicy {
  [key: string]: WatchQueryFetchPolicy;
}

export const FETCH_POLICY: FetchPolicy = {
  cacheOnly: "cache-only",
  cacheFirst: "cache-first",
  cacheAndNetwork: "cache-and-network",
  networkOnly: "network-only",
};

interface MutationFetchPolicyType {
  [key: string]: MutationFetchPolicy;
}

export const MUTATION_FETCH_POLICY: MutationFetchPolicyType = {
  networkOnly: "network-only",
};
