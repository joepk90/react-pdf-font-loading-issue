module.exports = {
    type: "bundle",
    esbuild: {
    // bundle: true,
    // minify: true,
    platform: "node",
    target: "node18",
    loader: {
        ".png": "dataurl",
        ".ttf": "dataurl",
    },
      outdir: './esbuild/'
    },
  };