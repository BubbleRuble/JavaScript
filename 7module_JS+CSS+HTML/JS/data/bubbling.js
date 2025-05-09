const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);


function onParentClick (e) {
  console.log('onParentClick');
  console.log('onParentClick -> e.target', e.target);
  console.log('onParentClick -> e.currentTarget', e.currentTarget);
};

function onChildClick (e) {
  console.log('onParentClick');
  console.log('onParentClick -> e.target', e.target);
  console.log('onParentClick -> e.currentTarget', e.currentTarget);
};

function onInnerChildClick (e) {
  console.log('onParentClick');
  console.log('onParentClick -> e.target', e.target);
  console.log('onParentClick -> e.currentTarget', e.currentTarget);
};


