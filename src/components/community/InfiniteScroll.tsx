import React, { useRef, useCallback, useState } from 'react'
import useCommunityContent from 'hooks/useCommunityContent'
import GameCard from 'components/homescreen/GameCard'
import { FlexBox, Text } from 'styles'
import { COLORS } from 'utils/DEFS'
import CommunityCard from './CommunityCard'

//TODO Change game card component with one that includes the drawing, likes, etc to make it look more like the prototype
const InfiniteScroll = () => {
  //State
  const [nextToken, setNextToken] = useState("")

  //Custom Hook
  const { gameList, loading, error, hasMore, nextTokenString } = useCommunityContent(nextToken)

  //Observe to keep track of when to load more data
  const observer = useRef<IntersectionObserver>()
  const lastGameRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore) {
          setNextToken(nextTokenString)
        } else {
          setNextToken("no more data")
        }
      },
      {
        rootMargin: '100px'
      }
    )
    if (node) observer.current.observe(node)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, hasMore])

  return (
    <div className='community-card-container'>
      <FlexBox css={{ overflow: 'scroll' }} direction='column' width='100%'>
        <Text color={COLORS.secondaryGreen} css={{ textAlign: 'center' }} margin='0 0 1rem 0'>Let's see what others have created!</Text>
        {gameList.map((g, i) => {
          if (gameList.length === i + 1) {
            return <FlexBox width='100%' ref={lastGameRef} key={i}><CommunityCard game={g} key={g.id} /></FlexBox>
          } else {
            return <FlexBox width='100%' key={i}><CommunityCard game={g} key={g.id} /></FlexBox>
          }

        })}
        {loading && <div>LOADING GAMES</div>}

        {(!error && !loading) && (
          <FlexBox direction='column' justifyContent='space-around' height='8rem'>
            <Text color={COLORS.secondaryGreen} css={{ textAlign: 'center' }}>
              WOW, you have seen all the available drawings that the community has created so far.
            </Text>
            <Text color={COLORS.secondaryGreen} css={{ textAlign: 'center' }}>
              Go do something productive with your life or go to Home and join a new game.
            </Text>
            <Text color={COLORS.secondaryGreen} css={{ textAlign: 'center' }}>
              We want to see what you do next!
            </Text>
          </FlexBox>)}

        {error && <div>An error has occurred and we couldn't load more drawings! Sorry :(</div>}
      </FlexBox>
    </div>
  )
}

export default InfiniteScroll
