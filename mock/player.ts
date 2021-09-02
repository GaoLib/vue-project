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
  const { keyword, page = 1, limit = 10 } = req.query

  const reqPage = Number(page)
  const reqLimit = Number(limit)
  const reqKeyword = keyword ? keyword + '' : ''

  const mockList = playerList.filter(item => {
    return !reqKeyword || item.accountname.indexOf(reqKeyword) !== -1
  })

  const pageList = mockList.filter((item, index) => index < reqLimit * reqPage && index >= Number(reqLimit * (reqPage - 1)))

  return res.json({
    code: 20000,
    data: {
      total: playerList.length,
      list: pageList
    }
  })
}

export const getPlayer = (req: Request, res: Response) => {
  const { id } = req.params
  for (const player of playerList) {
    if (player.id.toString() === id) {
      return res.json({
        code: 20000,
        data: {
          player
        }
      })
    }
  }
  return res.json({
    code: 70001,
    message: '没有找到相应玩家'
  })
}

export const createPlayer = (req: Request, res: Response) => {
  const { player } = req.body

  return res.json({
    code: 20000,
    data: {
      player
    }
  })
}

export const updatePlayer = (req: Request, res: Response) => {
  const { id } = req.params
  const { player } = req.body

  for (const player of playerList) {
    if (player.id.toString() === id) {
      return res.json({
        code: 20000,
        data: {
          player
        }
      })
    }
  }
  return res.json({
    code: 7000,
    message: '没有找到相应玩家'
  })
}

export const deletePlayer = (req: Request, res: Response) => {
  const { player } = req.body

  return res.json({
    code: 20000
  })
}
