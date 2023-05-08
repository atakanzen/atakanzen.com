/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../public/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const image = fetch(
  new URL("../../public/images/profile.png", import.meta.url)
).then((res) => res.arrayBuffer());

const handler = async (req: NextRequest) => {
  try {
    const imageData = await image;
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
          }}
          tw="flex items-center justify-center bg-white w-full h-full"
        >
          <img
            src={imageData as unknown as string}
            alt="Atakan Zengin's Profile Logo"
            width={600}
            height={600}
          />
          <div tw="flex flex-wrap flex-col items-center justify-center">
            <p tw="text-5xl text-center max-w-md">{title}</p>
            <p tw="text-4xl text-white p-4 rounded-lg bg-sky-500">
              atakanzen.com
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [{ name: "Inter", data: fontData }],
        emoji: "twemoji",
      }
    );
  } catch (error: any) {
    console.log(error.message);
    return new Response("Failed to generate Opengraph Image", { status: 500 });
  }
};

export default handler;
