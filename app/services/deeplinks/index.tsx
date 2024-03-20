const config = {
  screens: {
    Login: {
      path: "/:params",
      parse: {
        name: (params: string) => `${params}`,
      },
    },
  },
};

const linking = {
  prefixes: ["foresee://app"],
  config,
};

export default linking;
