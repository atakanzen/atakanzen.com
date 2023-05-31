/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../public/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const handler = async (req: NextRequest) => {
  try {
    const fontData = await font;

    const { searchParams } = new URL(req.url!);

    const title = searchParams.has("title")
      ? searchParams.get("title")
      : "Find more at";

    return new ImageResponse(
      (
        <div
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
          }}
          tw="flex items-center justify-center bg-white w-full h-full"
        >
          <div tw="flex flex-col items-center justify-center">
            <p tw="text-6xl font-black text-center mx-36">{title}</p>
            <a tw="text-3xl ">atakanzen.com</a>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [{ name: "Inter", data: fontData, weight: 900 }],
      }
    );
  } catch (error: any) {
    console.log(error.message);
    return new Response("Failed to generate Opengraph Image", { status: 500 });
  }
};

export default handler;
