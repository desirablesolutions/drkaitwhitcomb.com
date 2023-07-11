import type { Weak } from "@/models/typings/"

export const arrayExists = (arr: Weak<unknown[]>) => arr && arr?.length > 0;

export const tuid = (offset?: number): number => Date.now() + (offset || 1);
