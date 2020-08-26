function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var rankList = document.querySelectorAll(".ranked-list li");
  for (let i=0;i<rankList.length;i++){
    rankList[i].innerHTML+=parseInt(rankList[i].innerHTML)+n;
  }
}
function deepestChild(node){
  var parentDiv = document.querySelector('div#grand-node);
  while (parentDiv.querySelector('div')) {
    deepestChild
  }
}