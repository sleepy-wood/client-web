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
    cart: {
      createCartItem: {
        method: 'POST',
        url: '/api/v1/carts/items',
      },
      getCartItems: {
        method: 'GET',
        url: '/api/v1/carts/items',
      },
      removeCartItems: {
        method: 'DELETE',
        url: '/api/v1/carts/items',
      },
    },
    health: {
      findAllSleep: {
        method: 'GET',
        url: '/api/v1/sleeps',
      },
      findAllSleepRecent: {
        method: 'GET',
        url: '/api/v1/sleeps/recent',
      },
      findAllSleepMonthly: {
        method: 'GET',
        url: '/api/v1/sleeps/monthly',
      },
      findAllRecent: {
        method: 'GET',
        url: '/api/v1/healths/recent',
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
      createSmartContract: {
        method: 'POST',
        url: `/api/v1/products/smart-contract`,
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
    wishlist: {
      createWishlistItem: {
        method: 'POST',
        url: '/api/v1/wishlists/items',
      },
      getWishlistItems: {
        method: 'GET',
        url: '/api/v1/wishlists/items',
      },
      removeWishlistItems: {
        method: 'DELETE',
        url: '/api/v1/wishlists/items',
      },
    },
    order: {
      create: {
        method: 'POST',
        url: '/api/v1/orders',
      },
      findAllGroupByMonth: {
        method: 'GET',
        url: '/api/v1/orders/monthly',
      },
      findOne: {
        method: 'GET',
        url: '/api/v1/orders/:id',
      },
    },
  },
};
