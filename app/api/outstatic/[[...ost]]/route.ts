import { GetParams, OutstaticApi, PostParams, Request } from "outstatic";

interface GetRouteContext  {
  params: GetParams
}

interface PostRouteContext {
  params: PostParams
}

export async function GET(
  request: Request,
  ctx: GetRouteContext
) {
  return OutstaticApi.GET(request, { params: ctx.params });
}

export async function POST(
  request: Request,
  ctx: PostRouteContext
) {
  return OutstaticApi.POST(request, { params: ctx.params });
}

