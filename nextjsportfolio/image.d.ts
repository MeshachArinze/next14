declare module "*.png";

declare module "*.svg";

declare module "*.jpg" {
  const fileName: string;
  export = fileName;
}