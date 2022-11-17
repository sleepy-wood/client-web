export const APIs = {
  v1: {
    user: {
      findOne: {
        method: 'GET',
        url: '/api/v1/users',
      },
      findUserById: {
        method: 'GET',
        url: '/api/v1/users/profile/:id',
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
    health: {
      findSleep: {
        method: 'GET',
        url: '/api/v1/sleeps',
      },
      findRem: {
        method: 'GET',
        url: '/api/v1/sleeps/rem',
      },
      findDeepSleep: {
        method: 'GET',
        url: '/api/v1/sleeps/deep',
      },
      findHeart: {
        method: 'GET',
        url: '/api/v1/heart',
      },
      findOxygen: {
        method: 'GET',
        url: '/api/v1/oxygen',
      },
      findRespiratory: {
        method: 'GET',
        url: '/api/v1/respiratory',
      },
      findWeekData: {
        method: 'GET',
        url: '/api/v1/activities/week-data',
      },
    },
    product: {
      create: {
        method: 'POST',
        url: `/api/v1/products`,
      },
      findOne: {
        method: 'GET',
        url: `/api/v1/products/:id`,
      },
      findAll: {
        method: 'GET',
        url: `/api/v1/products`,
      },
      findFiveByCategory: {
        method: 'GET',
        url: `/api/v1/products/category`,
      },
      findFiveByQuery: {
        method: 'GET',
        url: `/api/v1/products/search`,
      },
      findExtraProducts: {
        method: 'GET',
        url: '/api/v1/products/extra/:id',
      },
      findRecommendProducts: {
        method: 'GET',
        url: '/api/v1/products/recommend/:id',
      },
      updateHitPlusOne: {
        method: 'PUT',
        url: '/api/v1/products/hits/:id',
      },
    },
  },
};
