import { Container, Content, Icon } from './styles'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'


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
        <Button
          title='Criar'
          type='SECUNDARY'
        />
      </Content>
    </Container>
  )
}