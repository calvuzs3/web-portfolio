import mdx from "@next/mdx";

if (process.env.NODE_ENV === "development") {
  console.log("info - lanURL:", 'http://${require("address").ip()}:3000');
}
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
