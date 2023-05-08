import { HOST } from "@/lib/opengraph";
import * as playwright from "playwright-aws-lambda";
import { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";

interface ExtendedQuery extends ParsedUrlQuery {
  title: string;
}

interface ExtendedRequest extends NextApiRequest {
  query: ExtendedQuery;
}

const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  const { title } = req.query;
  const browser = await playwright.launchChromium({ headless: true });
  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 630,
    },
  });
  const url = `${HOST}/opengraph?title=${title}`;
  await page.goto(url);
  const data = await page.getByTestId("opengraph-img").screenshot({
    type: "png",
  });
  await browser.close();
  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
  res.setHeader("Content-Type", "image/png");
  res.end(data);
};

export default handler;
