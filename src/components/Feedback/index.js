import {Component} from 'react'
import './index.css'
import FeedbackItem from '../FeedbackItem'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class Feedback extends Component {
  state = {start: resources}

  onChanging = () => {
    const {start} = this.state
    const {loveEmojiUrl} = start
    return (
      <div>
        <img src={loveEmojiUrl} alt="loveImage" />
        <h1>Thank You!</h1>
      </div>
    )
  }

  render() {
    const {start} = this.state
    const {emojis} = start
    return (
      <div className="background">
        <div className="cont">
          <h1>How Satisfied are you with our customer support performance</h1>
          <ul>
            {emojis.map(user => (
              <FeedbackItem
                key={user.id}
                information={user}
                onChanging={this.onChanging}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
