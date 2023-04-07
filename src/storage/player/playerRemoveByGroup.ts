import AsyncStora from '@react-native-async-storage/async-storage'
import { AppError } from '@utils/AppError'
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { playersGetByGroupAndTeam } from './playersGetByGroupAndTeam'
import { playersGetByGroup } from './playersGetByGroup'
import { PLAYER_COLLECTION } from '@storage/storageConfig'

export async function playerRemoveByGroup(playerName:string, group: string){
  try {
    const storage = await playersGetByGroup(group)
    const filteredPlayers = await storage.filter(player => player.name !== playerName)
    const players = JSON.stringify(filteredPlayers)

    await AsyncStora.setItem(`${PLAYER_COLLECTION}-${group}`, players)

  } catch (error) {
    throw error
  }

}