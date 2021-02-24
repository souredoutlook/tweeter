/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 const tweetDB =[
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by staning They Might Be Giants"
    },
    "created_at": 1613961155922
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , *BONK* je suis"
    },
    "created_at": 1614047555922
  }
]

const recursiveTimeSince = function(date) {
  const extensions = {
    0: "millisecond",
    1: "second",
    2: "minute",
    3: "hour",
    4: "day"
  };

  const divide = (num, iteration)=> {
    const divisors = {
      0: 1000,
      1: 60,
      2: 60,
      3: 24
    }

    if (num / divisors[iteration] >= 1 && iteration <= 3) {
      return divide(num / divisors[iteration], iteration + 1);
    } else {
      return { num, iteration };
    }
  };

  const result = divide(Date.now() - date, 0);
  return `${result.iteration > 0 ? Math.floor(result.num) : result.num} ${Math.floor(result.num) > 1 ? extensions[result.iteration] + 's' : extensions[result.iteration]}`;
};

  
const createTweetElement = function(data) {
    return $(`<article class="tweet">
    <header class="header">
      <div class="headerLeft">
        <img class="avatar" src="${data.user.avatars}"><span class="name">${data.user.name}</span>
      </div>
      <span class="user">${data.user.handle}</span>
    </header>
    <div class="container message">
      <p class="tweet-content">${data.content.text}</p>
    </div>
    <footer class="footer">
      <span class="tweet-age">${recursiveTimeSince(data.created_at)} ago</span><span class="icons"><span class="fas fa-flag"></span><span class="fas fa-retweet"></span><span class="fas fa-heart"></span></span>
    </footer>
  </article>`);
};

const renderTweets = function(db) {
  for (const userObj of db.sort((a,b) => b.created_at - a.created_at)) {
    const $tweet = createTweetElement(userObj);
    $('#tweets').append($tweet);
  }
}

$(document).ready(function() {
  renderTweets(tweetDB)
});
