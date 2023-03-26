import { Container, Content, Icon } from './styles'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'


type Props = {
}

export function NewGroup({ }: Props) {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />

        <Highlight
          title='Nova Turma'
          subTitle='cria a turma para adicionar as pessoas'
        />

        <Input
          placeholder='Nome da turma'
        />

        <Button
          title='Criar'
          style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  )
}