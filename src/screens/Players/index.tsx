
import { FlatList } from 'react-native'
import { useState } from 'react'

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'
import { PlayerCard } from '@components/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'


type Props = {
}

export function Players({ }: Props) {
  const [team, setTeam] = useState('Time A')
  // const [players, setPlayers] = useState(['Gab', 'Gir', 'Rafa', 'Yellow', 'Green', 'Red', 'Blue', 'Purple'])
  const [players, setPlayers] = useState([])


  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title='Nova da Turma'
        subTitle='adicione a galera e separe os times'
      />

      <Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
        />
        <ButtonIcon icon='add' />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => { }} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message='Não há pessoas nesse time' />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }

        ]}
      />

      <Button title='Remover Turma' type='SECUNDARY' />

    </Container>
  )
}