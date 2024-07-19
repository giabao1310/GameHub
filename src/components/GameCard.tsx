import { Card, CardBody, Heading, VStack, HStack, Image, Flex } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height={350}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
        </HStack>
        <VStack align="start" spacing={2} mt="2">
          <Heading fontSize={20}>{game.name}</Heading>
        </VStack>
        <Flex direction="column" align="center" justify="flex-end" position="absolute" bottom="0" left="0" right="0" p="4">
          <Emoji initialLiked={false} />
        </Flex>
      </CardBody>
    </Card>
  )
}

export default GameCard