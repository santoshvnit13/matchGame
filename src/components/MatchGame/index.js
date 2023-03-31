import {Component} from 'react'

import ThumbnailList from '../ThumbnailList'

class MatchGame extends Component {
  state = {
    isFruits: true,
    isAnimals: false,
    isPlaces: false,
    thumbList: [
      {
        id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
        category: 'FRUIT',
      },
      {
        id: '7a72c38e-a83d-48eb-b9ce-ae3c0361cc49',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-thumbnail-img.png',
        category: 'FRUIT',
      },
      {
        id: '97a33ed5-98ed-4c95-a8f0-1595880b3b69',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-thumbnail-img.png',
        category: 'FRUIT',
      },
      {
        id: '49865ac4-b5e8-4d04-893b-d69ad6004da8',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-thumbnail-img.png',
        category: 'FRUIT',
      },
      {
        id: 'd406e63c-eaaf-49ea-88a6-ed6a1572eb97',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/kivi-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/kivi-thumbnail-img.png',
        category: 'FRUIT',
      },
      {
        id: 'e997ebf9-9a47-4b7e-9035-01ae372d73dc',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/dragon-fruit-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/dragon-thumbnail-fruit-img.png',
        category: 'FRUIT',
      },
      {
        id: '4210274c-7304-44d6-8690-c5251252cd10',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/papaya-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/papaya-thumbnail-img.png',
        category: 'FRUIT',
      },
      {
        id: '057b6193-a80d-4036-9e6e-fe847c99fbb6',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/mixed-fruits-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/mixed-thumbnail-fruits-img.png',
        category: 'FRUIT',
      },
      {
        id: 'c6c66b00-c130-47d2-9d3a-1c3378d08aba',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/apple-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/apple-thumbnail-img.png',
        category: 'FRUIT',
      },
      {
        id: '1edac278-8390-4da9-b914-5f41fb49283c',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/cherry-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/cherry-thumbnail-img.png',
        category: 'FRUIT',
      },
    ],
    matchUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    score: 0,
    isGameRunning: true,
    seconds: 60,
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {seconds} = this.state
    if (seconds === 0) {
      clearInterval(this.intervalId)
      this.setState({isGameRunning: false})
    } else {
      this.setState(prevState => ({seconds: prevState.seconds - 1}))
    }
  }

  fruitsTab = () => {
    const {imagesList} = this.props
    const filteredList1 = imagesList.filter(
      filteredItem1 => filteredItem1.category === 'FRUIT',
    )
    this.setState({
      isFruits: true,
      isAnimals: false,
      isPlaces: false,
      thumbList: filteredList1,
    })
  }

  animalsTab = () => {
    const {tabsList, imagesList} = this.props
    const filteredList = imagesList.filter(
      filteredItem => filteredItem.category === 'ANIMAL',
    )
    this.setState({
      thumbList: filteredList,
      isFruits: false,
      isAnimals: true,
      isPlaces: false,
    })
  }

  placesTab = () => {
    const {tabsList, imagesList} = this.props
    const filteredList = imagesList.filter(
      filteredItem => filteredItem.category === 'PLACE',
    )
    this.setState({
      thumbList: filteredList,
      isFruits: false,
      isAnimals: false,
      isPlaces: true,
    })
  }

  passingFunction = id => {
    const {thumbList, matchUrl, score, isGameRunning} = this.state
    const {imagesList} = this.props
    const changedUrl = imagesList.sort(() => 0.5 - Math.random())[0].imageUrl

    const matchedUrlList = thumbList.filter(item => item.id === id)
    if (matchedUrlList[0].imageUrl === matchUrl) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        matchUrl: changedUrl,
      }))
    } else {
      this.setState({score, isGameRunning: false})
    }
  }

  startAgain = () => {
    console.log('hi')
    const {
      isGameRunning,
      isFruits,
      isAnimals,
      isPlaces,
      thumbList,
      matchUrl,
      score,
    } = this.state
    this.setState({
      isFruits: true,
      isAnimals: false,
      isPlaces: false,
      thumbList: [
        {
          id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
          imageUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
          thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
          category: 'FRUIT',
        },
        {
          id: '7a72c38e-a83d-48eb-b9ce-ae3c0361cc49',
          imageUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-img.png',
          thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-thumbnail-img.png',
          category: 'FRUIT',
        },
        {
          id: '97a33ed5-98ed-4c95-a8f0-1595880b3b69',
          imageUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-img.png',
          thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-thumbnail-img.png',
          category: 'FRUIT',
        },
        {
          id: '49865ac4-b5e8-4d04-893b-d69ad6004da8',
          imageUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-img.png',
          thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-thumbnail-img.png',
          category: 'FRUIT',
        },
        {
          id: 'd406e63c-eaaf-49ea-88a6-ed6a1572eb97',
          imageUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/kivi-img.png',
          thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/kivi-thumbnail-img.png',
          category: 'FRUIT',
        },
        {
          id: 'e997ebf9-9a47-4b7e-9035-01ae372d73dc',
          imageUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/dragon-fruit-img.png',
          thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/dragon-thumbnail-fruit-img.png',
          category: 'FRUIT',
        },
        {
          id: '4210274c-7304-44d6-8690-c5251252cd10',
          imageUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/papaya-img.png',
          thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/papaya-thumbnail-img.png',
          category: 'FRUIT',
        },
        {
          id: '057b6193-a80d-4036-9e6e-fe847c99fbb6',
          imageUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/mixed-fruits-img.png',
          thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/mixed-thumbnail-fruits-img.png',
          category: 'FRUIT',
        },
        {
          id: 'c6c66b00-c130-47d2-9d3a-1c3378d08aba',
          imageUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/apple-img.png',
          thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/apple-thumbnail-img.png',
          category: 'FRUIT',
        },
        {
          id: '1edac278-8390-4da9-b914-5f41fb49283c',
          imageUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/cherry-img.png',
          thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/match-game/cherry-thumbnail-img.png',
          category: 'FRUIT',
        },
      ],
      matchUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
      score: 0,
      isGameRunning: true,
      seconds: 60,
    })
  }

  render() {
    const {tabsList, imagesList} = this.props

    const {
      thumbList,
      isFruits,
      isAnimals,
      isPlaces,
      matchUrl,
      isGameRunning,
      score,
      seconds,
    } = this.state
    const scoreValue = `Score:${score}`
    const secondsValue = `${seconds} sec`
    return (
      <>
        {isGameRunning ? (
          <>
            <nav>
              <ul>
                <li>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
                    alt="website logo"
                  />
                </li>
                <li>
                  <p>Score:</p>
                  <p>{score}</p>
                </li>
                <li>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
                    alt="timer"
                  />
                  <p>{secondsValue}</p>
                </li>
              </ul>
            </nav>

            <ul>
              <li>
                <img src={matchUrl} alt="match" />
              </li>
            </ul>

            <ul>
              <li>
                <button type="button" onClick={this.fruitsTab}>
                  Fruits
                </button>
                {isFruits && (
                  <ul>
                    {thumbList.map(eachItem1 => (
                      <ThumbnailList
                        eachItem1={eachItem1}
                        key={eachItem1.id}
                        passingFunction={this.passingFunction}
                      />
                    ))}
                  </ul>
                )}

                <button type="button" onClick={this.animalsTab}>
                  Animals
                </button>
                {isAnimals && (
                  <ul>
                    {thumbList.map(eachItem1 => (
                      <ThumbnailList
                        eachItem1={eachItem1}
                        key={eachItem1.id}
                        passingFunction={this.passingFunction}
                      />
                    ))}
                  </ul>
                )}

                <button type="button" onClick={this.placesTab}>
                  Places
                </button>
                {isPlaces && (
                  <ul>
                    {thumbList.map(eachItem1 => (
                      <ThumbnailList
                        eachItem1={eachItem1}
                        key={eachItem1.id}
                        passingFunction={this.passingFunction}
                      />
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </>
        ) : (
          <>
            <img src="https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png" />
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
              alt=" trophy"
            />
            <p>YOUR SCORE</p>
            <p>{score}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            <button type="button" onClick={this.startAgain}>
              PLAY AGAIN
            </button>
          </>
        )}
      </>
    )
  }
}

export default MatchGame
