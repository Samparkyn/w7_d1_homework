window.onload = function(){
  console.log("Ola Browser");

  var quotes = [
    {text: "Visual Basic is the way forward, I don't know why we are doing JavaScript",
    author: "Jay"
  },
    {text: "The only CSS you need to know is background-color: tomato",
    author: "Rick"
  },
    {text: "Are those hand-cut artisan crisps?",
    author: "Keith",
  },
   {text: "Scaffolding is nothing but a fiery hell.",
    author: "Val"
  }]

  var quoteSection = document.getElementById("quotes");
  attachQuotes(quotes, quoteSection);

  var handleClick = function(){

  }
  var button = document.getElementById('add-button');

  button.onclick = function() {
    var quoteTextBox = document.getElementById('quotes-text');
    var quoteAuthorBox = document.getElementById('quotes-author');
     var newQuote = document.createElement('li');
     newQuote.innerText = quoteTextBox.value
     var newAuthor = document.createElement('li');
     newAuthor.innerText = quoteAuthorBox.value
     newAuthor.appendChild(newQuote);
    }


  }

  function attachQuotes(quotes, quoteSection){
    for (var i = 0; i < quotes.length; i++){
      var blockQuote = document.createElement('blockquote');
      blockQuote.innerText = quotes[i].text;
      var cite = document.createElement('cite');
      cite.innerText = quotes[i].author;
      var article = document.createElement('article');
      blockQuote.appendChild(cite);
      article.appendChild(blockQuote);
      quoteSection.appendChild(article);
    }
  }

//   var evenQuotes = document.getElementsByClassName('quote');
//   for (var i = 0; i < evenQuotes.length; i++){
//   if ((i % 2) === 0){
//     evenQuotes[i].style.color = "deepskyblue";
//     evenQuotes[i].style.backgroundColor = "black";
//   } else {
//     evenQuotes[i].style.color = "black";
//     evenQuotes[i].style.backgroundColor = "deepskyblue";
//   }
// }









