import { Temporal } from "@js-temporal/polyfill";
import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "../../prisma/contract.d";
import contractJson from "../../prisma/contract.json" with { type: "json" };

const temporalGlobal = globalThis as typeof globalThis & {
  Temporal?: typeof Temporal;
};

temporalGlobal.Temporal ??= Temporal;

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not configured.");
}

export const db = postgres<Contract>({
  contractJson,
  url: databaseUrl,
});