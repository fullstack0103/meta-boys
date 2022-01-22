import React from 'react'
import { useTheme } from 'styled-components'
import { GradientCard } from '../Shared'
import {
  RoadMapContainer,
  BackgroundListWrapper,
  TopImage,
  MiddleImage,
  BottomImage,
  ContentWrapper,
  BoxWrapper,
  LeftNumberWrapper,
  PointBox,
  RightNumberWrapper,
  TitleWrapper,
  Title,
  BgWrapper
} from './styles'
import { LineElements } from './LineElements';
import { useWindowSize } from '../../hooks/useWindowSize'
import { CircleProgressBar } from './CircleProgressBar'

export const RoadMap = () => {
  const theme = useTheme()
  const { width } = useWindowSize()

  return (
    <>
      {width > 576 && <LineElements />}
      <RoadMapContainer id='roadmap'>
        <TitleWrapper>
          <Title>
            <GradientCard />
            <h1>ROADMAP</h1>
          </Title>
        </TitleWrapper>
        <BgWrapper>
          <ContentWrapper>
          <BoxWrapper isLeft>
            <LeftNumberWrapper data-aos="fade-zoom-in">
              {width > 576 && <PointBox id='d1' className='d1'><div /></PointBox>}
              <span>1</span>
            </LeftNumberWrapper>
            <div className='gradient-box' data-aos="fade-up">
              <GradientCard>
                <h1>The Rewards</h1>
                <p>We will reward those who support and believe in the project and help grow the community, share information or inspire good ideas with many surprises: free sweatshirt and special gifts both physical and digital. </p>
              </GradientCard>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className='gradient-box' data-aos="fade-up">
              <GradientCard>
                <div className='gradient-header'>
                  <CircleProgressBar percent={20} />
                  <h1>The Charity</h1>
                </div>
                <p>MetaBoys believes in contributing to society and helping to create a better world. You too can participate in a cause to change the world by donating <span>$50,000</span> to one of 3 causes selected by the community: Humanitarian, Animal or Environmental.</p>
              </GradientCard>
            </div>
            <RightNumberWrapper data-aos="fade-zoom-in">
              <span>2</span>
              {width > 576 && <PointBox id='d2' className='d2'><div className='d2-1' /></PointBox>}
            </RightNumberWrapper>
          </BoxWrapper>
          <BoxWrapper isLeft>
            <LeftNumberWrapper data-aos="fade-zoom-in">
              {width > 576 && <PointBox id='d3' className='d3'><div className='d3-1' /></PointBox>}
              <span>3</span>
            </LeftNumberWrapper>
            <div className='gradient-box' data-aos="fade-up">
              <GradientCard>
                <div className='gradient-header'>
                  <h1>The Knowledge</h1>
                  <CircleProgressBar percent={40} />
                </div>
                <p>MetaBoys understands that knowledge is power. We will provide exclusive access to a maximum of information in the biggest fields: <span>ENTREPRENEURSHIP, NFT, CRYPTO, ECOM, INVESTMENT, STARTUP. We have selected the biggest minds in the entrepreneurial world to bring you the latest information.</span></p>
                <p>Members who will teach the community include, startup founders, renowned investors, whales, entrepreneurs and NFT collectors.</p>
                <p>We will also provide knowledge sharing through access to online courses, Zooms, private groups, and more.</p>
              </GradientCard>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className='gradient-box' data-aos="fade-up">
              <GradientCard>
                <div className='gradient-header'>
                <CircleProgressBar percent={60} />
                  <h1>The Funding</h1>
                </div>
                <p>We will help you realize your biggest entrepreneurial dreams. We will select three community projects that we will fund. We plan on investing between <span>$100,000 to $400,000</span> to fund these projects. Community members will have the opportunity to invite others to join.  </p>
              </GradientCard>
            </div>
            <RightNumberWrapper data-aos="fade-zoom-in">
              <span>4</span>
              {width > 576 && <PointBox id='d4' className='d4'><div className='d4-1' /></PointBox>}
            </RightNumberWrapper>
          </BoxWrapper>
          <BoxWrapper isLeft>
            <LeftNumberWrapper data-aos="fade-zoom-in">
              {width > 576 && <PointBox id='d5' className='d5'><div className='d5-1' /></PointBox>}
              <span>5</span>
            </LeftNumberWrapper>
            <div className='gradient-box' data-aos="fade-up">
              <GradientCard>
                <div className='gradient-header'>
                  <h1>The Meetings</h1>
                  <CircleProgressBar percent={80} />
                </div>
                <p>We will start to held meetings in the Metaverse, where one of the largest and strongest ecosystems of entrepreneurs will be created <span>exclusively for HOLDERS.</span> A VIP area where the whole community can meet will be available, as will an online shop where you can purchase some of the best outfits and be the most stylish in the Metaverse.</p>
                <p>You will also be able to customize your virtual characters in your own image, and will have <span>free clothing</span> options to choose from every 3 months: to be selected in the SHOP.</p>
              </GradientCard>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className='gradient-box' data-aos="fade-up">
              <GradientCard>
                <div className='gradient-header'>
                <CircleProgressBar percent={100} />
                  <h1>The Events</h1>
                </div>
                <p>We will give <span>TOTALLY FREE ACCESS</span> to a variety of online and physical <span>Private Mastermind</span> events and some of them be held in some of the best cities in the world: <span>LOS ANGELES, MIAMI, NEW YORK, PARIS, and DUBAI...</span></p>
                <p>Members will enjoy free access to the <span>PRIVATE PARTIES</span> and luxury activities   where they will meet some of the best businessmen around.</p>
              </GradientCard>
            </div>
            <RightNumberWrapper data-aos="fade-zoom-in">
              <span>6</span>
              {width > 576 && <PointBox id='d6' className='d6'><div /></PointBox>}
            </RightNumberWrapper>
          </BoxWrapper>
        </ContentWrapper>
        <BackgroundListWrapper>
          <div>
            <TopImage src={width > 1440 ? theme.images.roadMapTop : theme.images.roadMapTop1} alt='top-road-map'  />
            <MiddleImage src={width > 1440 ? theme.images.roadMapMiddle : theme.images.roadMapMiddle1} alt='middle-road-map'  />
            <BottomImage src={width > 1440 ? theme.images.roadMapBottom : theme.images.roadMapBottom1} alt='bottom-road-map'  />
          </div>
        </BackgroundListWrapper>
        </BgWrapper>
      </RoadMapContainer>
    </>

  )
}
