import { HandlerContext } from "$fresh/server.ts";

export interface Thing {
  other: Record
}

export const handler = async (_req: Request, _ctx: HandlerContext): Response => {
  const body = {
    "username": "fitzypop",
    "userid": 1,
  }
  return new Response(JSON.stringify(body));
};
