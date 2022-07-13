/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import "https://deno.land/x/dotenv@v3.2.0/mod.ts";

const FAUNA_KEY = Deno.env.get("FAUNA_KEY") || "Nope";
const FAUNA_DOMAIN = Deno.env.get("FAUNA_DOMAIN") || "db.fauna.com"
