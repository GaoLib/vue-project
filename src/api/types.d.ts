export interface IArticleData {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: string | number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}

export interface IRoleData {
  key: string
  name: string
  description: string
  routes: any
}

export interface ITransactionData {
  orderId: string
  timestamp: string | number
  username: string
  price: number
  status: string
}

export interface IUserData {
  id: number
  username: string
  password: string
  name: string
  email: string
  phone: string
  avatar: string
  introduction: string
  roles: string[]
}

// 英雄： id，名称，头像，分类
export interface Hero {
  id: number
  name: string
  avatar: string
  classify: string[]
}

// 账号： id，账号名，昵称，头像，等级，经验值，段位，积分，连胜场次，想玩英雄
export interface Player {
  id: number
  accountname: string
  nickname: string
  avatar: string
  level: number
  exp: number
  rank: number
  bravepoints: number
  winningstreak: number
  wanttoplay: Hero[]
}
