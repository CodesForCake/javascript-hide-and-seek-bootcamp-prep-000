function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var rankList = document.querySelectorAll(".ranked-list");
  for (let i=0;i<rankList.length;i++){
    var rankListChildren = rankList[i].children;
    for (let j=0;j<rankListChildren.length;j++) {
      rankListChildren[j].innerHTML=parseInt(rankListChildren[j])+parseInt(n);
    }
  }
}
function deepestChild(node){
/*  var firstDiv = document.getElementById('grand-node').querySelector('div');
  if (firstDiv.innerHTML === "boo!"){
    return firstDiv.innerHTML;
  } else {
    deepestChild(firstDiv);  
  }*/
}