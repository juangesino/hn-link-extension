var links = document.getElementsByClassName('storylink');
for (var i = 0; i < links.length; i++) {
  links[i].setAttribute('target', '_blank');
  links[i].setAttribute('rel', 'noopener');
}
console.log("HackerNews Links Extension: Links will now open in a new tab.");
