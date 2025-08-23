import { OutstaticApi, Request } from "outstatic";

export async function GET(
  request: Request,
  ctx: RouteContext<"/api/outstatic/[[...ost]]">
) {
  const params = ctx.params;
  return OutstaticApi.GET(request, { params });
}
export const POST = OutstaticApi.POST;
