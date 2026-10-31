// Provided by plugins/screenshotSizes.ts: "/src/assets/screenshots/<slug>/<file>" -> [width, height]
declare module "virtual:screenshot-sizes" {
  const sizes: Record<string, [number, number]>;
  export default sizes;
}
