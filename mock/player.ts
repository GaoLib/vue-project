import { Request, Response } from 'express'
import { Hero, Player } from '../src/api/types'
import { heros } from './heros'
import faker from 'faker'

faker.locale = 'zh_CN'

const playerCount = 100
const playerList: Player[] = []

for (let i = 0; i < playerCount; i++) {
  playerList.push({
    id: i,
    accountname: faker.name.findName(),
    avatar: faker.image.avatar(),
    bravepoints: faker.random.number(1000),
    exp: faker.random.number(10000),
    level: faker.random.number(30),
    nickname: faker.name.findName(),
    rank: faker.random.number(200),
    wanttoplay: getWanttoPlay(),
    winningstreak: faker.random.number(10)
  })
}

function getWanttoPlay() {
  const wanttoplay: Set<Hero> = new Set()
  while (wanttoplay.size < 3) {
    wanttoplay.add(heros[faker.random.number(9)])
  }
  return Array.from(wanttoplay)
}

export const getPlayers = (req: Request, res: Response) => {
  const { reqKeyword, reqPage = 1, reqLimit = 10 } = req.query

  const page = Number(reqPage)
  const limit = Number(reqLimit)
  const keyword = reqKeyword ? reqKeyword + '' : ''

  const mockList = playerList.filter(item => {
    return !keyword || item.accountname.indexOf(keyword) !== -1
  })

  const pageList = mockList.filter((item, index) => index < limit * page && index >= Number(limit * (page - 1)))

  res.json({
    code: 2000,
    data: {
      total: pageList.length,
      list: pageList
    }
  })
}
