import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import EachChoice from '../EachChoice'

import {
  BgContainer,
  InnerContainer,
  TopContainer,
  MainHeading,
  MiniHeading,
  ScoreCard,
  BottomContinaer,
  GameChoicesContinaer,
  EachChoiceEle,
  SubHeading,
  ResultImg,
  Button,
  CloseBtn,
  RulesBtnContainer,
  ModalContainer,
  RuleImg,
} from './styledComponets'

class RockPaperScissors extends Component {
  state = {
    yourSelected: '',
    opponentSelected: '',
    gameRunning: true,
    gameResult: '',
    score: 0,
  }

  playAgain = () => {
    this.setState({
      yourSelected: '',
      opponentSelected: '',
      gameRunning: true,
      gameResult: '',
    })
  }

  getGameResult = (userId, opponantId) => {
    let result
    if (userId === opponantId) {
      result = 'IT IS DRAW'
    } else if (userId === 'ROCK') {
      if (opponantId === 'SCISSORS') {
        result = 'YOU WON'
      } else if (opponantId === 'PAPER') {
        result = 'YOU LOSE'
      }
    } else if (userId === 'SCISSORS') {
      if (opponantId === 'PAPER') {
        result = 'YOU WON'
      } else if (opponantId === 'ROCK') {
        result = 'YOU LOSE'
      }
    } else if (userId === 'PAPER') {
      if (opponantId === 'ROCK') {
        result = 'YOU WON'
      } else if (opponantId === 'SCISSORS') {
        result = 'YOU LOSE'
      }
    }
    return result
  }

  userSelection = userChoise => {
    const {score} = this.state

    const {choicesList} = this.props
    const index = Math.floor(Math.random(choicesList.length) * 3)
    const opponantChoise = choicesList[index]
    const gameResult = this.getGameResult(userChoise.id, opponantChoise.id)

    let resultScore

    if (gameResult === 'YOU WON') {
      resultScore = score + 1
    } else if (gameResult === 'YOU LOSE') {
      resultScore = score - 1
    } else {
      resultScore = score
    }

    this.setState({
      yourSelected: userChoise,
      opponentSelected: opponantChoise,
      gameResult,
      gameRunning: false,
      score: resultScore,
    })
  }

  render() {
    const {choicesList} = this.props
    const {gameRunning, yourSelected, opponentSelected, gameResult} = this.state
    const {score} = this.state

    return (
      <BgContainer>
        <InnerContainer>
          <TopContainer>
            <div>
              <MainHeading>
                ROCK <br />
                PAPER
                <br />
                SCISSORS
              </MainHeading>
            </div>
            <ScoreCard>
              <MiniHeading score>Score</MiniHeading>
              <MiniHeading score>{score}</MiniHeading>
            </ScoreCard>
          </TopContainer>
          <BottomContinaer>
            {gameRunning ? (
              <GameChoicesContinaer>
                {choicesList.map(eachChoice => (
                  <EachChoice
                    key={eachChoice.id}
                    eachChoice={eachChoice}
                    userSelection={this.userSelection}
                  />
                ))}
              </GameChoicesContinaer>
            ) : (
              <>
                <GameChoicesContinaer>
                  <EachChoiceEle>
                    <SubHeading>YOU</SubHeading>
                    <ResultImg src={yourSelected.imageUrl} alt="your choice" />
                  </EachChoiceEle>
                  <EachChoiceEle>
                    <SubHeading>OPPONENT</SubHeading>
                    <ResultImg
                      src={opponentSelected.imageUrl}
                      alt="opponent choice"
                    />
                  </EachChoiceEle>
                </GameChoicesContinaer>
                <MiniHeading>{gameResult}</MiniHeading>
                <Button type="button" onClick={this.playAgain}>
                  Play Again
                </Button>
              </>
            )}
          </BottomContinaer>
          <RulesBtnContainer>
            <Popup trigger={<Button rule>Rules</Button>} modal nested>
              {close => (
                <ModalContainer>
                  <CloseBtn onClick={close} type="button">
                    <RiCloseLine />
                  </CloseBtn>
                  <RuleImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ModalContainer>
              )}
            </Popup>
          </RulesBtnContainer>
        </InnerContainer>
      </BgContainer>
    )
  }
}

export default RockPaperScissors
