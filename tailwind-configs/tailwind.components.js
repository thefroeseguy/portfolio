const plugin = require("tailwindcss/plugin");

const container_defaults = {
  maxWidth: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "1rem",
  paddingRight: "1rem",
};

export const containerTiny = plugin(({ addComponents, theme, e }) => {
  addComponents({
    ".container-tiny": {
      ...container_defaults,
      ...{
        "@screen sm": {
          maxWidth: theme("containers.sm"),
        },
        "@screen md": {
          maxWidth: theme("containers.md"),
        },
      },
    },
  });
});

export const containerSmall = plugin(({ addComponents, theme, e }) => {
  addComponents({
    ".container-small": {
      ...container_defaults,
      ...{
        "@screen sm": {
          maxWidth: theme("containers.sm"),
        },
        "@screen md": {
          maxWidth: theme("containers.md"),
        },
        "@screen lg": {
          maxWidth: theme("containers.lg"),
        },
      },
    },
  });
});

export const containerMedium = plugin(({ addComponents, theme, e }) => {
  addComponents({
    ".container-medium": {
      ...container_defaults,
      ...{
        "@screen sm": {
          maxWidth: theme("containers.sm"),
        },
        "@screen md": {
          maxWidth: theme("containers.md"),
        },
        "@screen lg": {
          maxWidth: theme("containers.lg"),
        },
        "@screen xl": {
          maxWidth: theme("containers.xl"),
        },
      },
    },
  });
});
