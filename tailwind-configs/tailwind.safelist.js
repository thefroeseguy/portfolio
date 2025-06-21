export default [
  {
    pattern: /container-(tiny|small|medium)/,
  },
  {
    pattern: /gap-(3|5|12|24)/,
    variants: ["sm", "md", "lg", "xl", "2xl", "3xl"],
  },
  {
    pattern: /bg-(white|black|off-white|green|yellow)/,
    variants: ["sm", "md", "lg", "xl", "2xl", "3xl"],
  },
  {
    pattern: /gap-x-(3|5|12|24)/,
    variants: ["sm", "md", "lg", "xl", "2xl", "3xl"],
  },
  {
    pattern: /col-span-([34689])/,
    variants: ["sm", "md", "lg", "xl", "2xl", "3xl"],
  },
  {
    pattern: /justify-(start|center|end|between|around)/,
  },
  {
    pattern: /btn-(primary|secondary|outline|green)/,
  },
  "mx-auto",
  "list-disc",
];