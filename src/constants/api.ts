export const APIs = {
  v1: {
    user: {
      findOne: {
        method: 'GET',
        url: '/api/v1/users',
      },
      findUserById: {
        method: 'GET',
        url: '/api/v1/users/:id',
      },
      trendingTen: {
        method: 'GET',
        url: '/api/v1/users/trending-ten',
      },
      topTen: {
        method: 'GET',
        url: '/api/v1/users/top-ten',
      },
    },
    attachFile: {
      create: {
        method: 'POST',
        url: `/api/v1/files/temp/upload`,
      },
    },
    product: {
      create: {
        method: 'POST',
        url: `/api/v1/products`,
      },
      findAll: {
        method: 'GET',
        url: `/api/v1/products`,
      },
      findFiveByCategory: {
        method: 'GET',
        url: `/api/v1/products/category`,
      },
    },
  },
};
