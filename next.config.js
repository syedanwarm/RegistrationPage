module.exports = {
    async redirects() {
      return [
        {
          source: '/registration',
          destination: '/index.html',
          permanent: true,
        },
      ];
    },
  };