function makeFriendsList(friends) {
  const body = document.querySelector('body');
  const ul = document.createElement('ul');
  body.append(ul);
  
  for (let friend of friends) {
    ul.insertAdjacentHTML('beforeEnd', `<li>${friend.firstName} ${friend.lastName}</li>`);
  }
  return ul;
}