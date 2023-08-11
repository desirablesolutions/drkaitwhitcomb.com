import type { Weak } from "blakprint"
import { twMerge } from "tailwind-merge";



export const arrayExists = (arr: Weak<unknown[]>) => arr && arr?.length > 0;

export const tuid = (offset?: number): number => Date.now() + (offset || 1);


export function classSet(classList: any) {
    return twMerge(classList)
}

export const INCREMENT_BY_ONE = (value: number): number => value + 1;

export const DECREMENT_BY_ONE = (value: number): number => value -1;
