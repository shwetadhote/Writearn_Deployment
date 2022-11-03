import ApiCaller from "../utils/Api";

export const Auth = () => {
  return ApiCaller(
    `homepage/top-picks`,
    "GET",
    {},
    process.env.NEXT_PUBLIC_APP_WRITEARN_API
  )
}

export const TopAuthorsApi = () => {
    return ApiCaller(
      `homepage/top-authors`,
      "GET",
      {},
      process.env.NEXT_PUBLIC_APP_WRITEARN_API
    )
  }

  export const ExploreTopicsApi = () => {
    return ApiCaller(
      `post-types`,
      "GET",
      {},
      process.env.NEXT_PUBLIC_APP_WRITEARN_API
    )
  }

  export const LatestPostApi = () => {
    return ApiCaller(
      `post/all/`,
      "GET",
      {},
      process.env.NEXT_PUBLIC_APP_WRITEARN_API
    )
  }

  export const TrendingNewsApi = () => {
    return ApiCaller(
      `homepage/latest-post/601ba1defda88c416f1939b9`,
      "GET",
      {},
      process.env.NEXT_PUBLIC_APP_WRITEARN_API
    )
  }

  export const PopularBlogPostApi = () => {
    return ApiCaller(
      `homepage/latest-post/601ba1defda88c416f1939b8`,
      "GET",
      {},
      process.env.NEXT_PUBLIC_APP_WRITEARN_API
    )
  }

  
  export const CategoryApi = () => {
    return ApiCaller(
      `Category`,
      "GET",
      {},
      process.env.NEXT_PUBLIC_APP_WRITEARN_API
    )
  }

  export const ProfileApi = () => {
    return ApiCaller(
      `post/all/`,
      "GET",
      {},
      process.env.NEXT_PUBLIC_APP_WRITEARN_API
    )
  }

  export const ProfileDataApi = (userId: (string | string[] | undefined)[]) => {
    return ApiCaller(
      `user/${userId}`,
      "GET",
      {},
      process.env.NEXT_PUBLIC_APP_WRITEARN_API
      )
    }