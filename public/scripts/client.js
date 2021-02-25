//client.js

const convertHowLongAgo = function(initialDate) {
  const extensions = {
    0: "millisecond",
    1: "second",
    2: "minute",
    3: "hour",
    4: "day",
    5: "week",
  };

  const divide = (num, iteration)=> {
    const divisors = {
      0: 1000,
      1: 60,
      2: 60,
      3: 24,
      4: 7
    }

    if (num / divisors[iteration] >= 1 && iteration <= 4) {
      return divide(num / divisors[iteration], iteration + 1);
    } else {
      return { num, iteration };
    }
  };

  const milliseconds = Date.now - initialDate //get the time between initialDate and Date.now in milliseconds
  const result = divide(milliseconds, 0);
  return `${result.iteration > 0 ? Math.floor(result.num) : result.num} ${Math.floor(result.num) > 1 ? extensions[result.iteration] + 's' : extensions[result.iteration]} ago`;
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
      <span class="tweet-age">${convertHowLongAgo(data.created_at)}</span><span class="icons"><span class="fas fa-flag"></span><span class="fas fa-retweet"></span><span class="fas fa-heart"></span></span>
    </footer>
  </article>`);
};

const renderTweets = function(db) {
  $('.tweet').remove(); //remove any existing .tweet class articles

  for (const userObj of db.sort((a,b) => b.created_at - a.created_at)) {
    const $tweet = createTweetElement(userObj);
    $('#tweets').append($tweet);
  }
}

const escapeText = function(str) {
  const element = $('<div>');
  element.text(str);
  return element.html();
};

const postTweet = ($textArea)=> {
  console.log('Form submitted, performing ajax call...');

  const text = escapeText($textArea.val());
  const user = {
    name: 'Nicholas Meisenheimer',
    handle: '@Umami_Outlook',
    avatars: 'https://i.imgur.com/ilT4JDe.png'
  }
  
  $.ajax({ method: 'POST', url: '/tweets/', data: { text, user } })
  .done(function () {
    console.log('Posted tweet succesfully!')

    $textArea.val(''); //reset textArea

    const $characterCounter = $($textArea).next().children().filter('output');
    $characterCounter.val(140); //reset characterCounter

    loadTweets();

  })
  .fail(error => console.log(error.message));
};

const loadTweets = function() {
  $.ajax({ method: 'GET', url: '/tweets/'})
  .done(data =>{
    
    console.log('Loaded tweets succesfully!')
    renderTweets(data);

  })
  .fail(error => console.log(error.message));
};

const validateTweet = function($textArea) {
  const $characterCounter = $($textArea).next().children().filter('output');

  if ($characterCounter.val() < 0) {
    alert('You know... our competitor would let you post this.')
    return false;
  } else if (!$textArea.val()) {
    alert('This is a falsey value and you ought to know that!')
    return false;
  } else {
    return true;
  }
};

$(document).ready(function() {
  loadTweets();

  const $form = $('.tweet-text');

  $form.on('submit', function (event) {
    event.preventDefault(); //prevent form submission using default http
    
    const $textArea = $(this).find('#tweet-text');

    if (validateTweet($textArea)) postTweet($textArea);

  });
});
