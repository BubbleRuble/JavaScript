// const playlist = {
//   name: 'my super playlist',
//   rating: 5,
//   tracks: ['Bejelewed', 'Blank Space', 'TGIF', 'Fortnite balls'],
//   changeName(newName) {
//     console.log('this всередені changeName: ', this);

//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// playlist.changeName('New Name');

// playlist.addTrack('New Track');
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);

const bucket = {
  name: 'bucket',
  items: ['cup', 'fork', 'spoon'],
  cost: 300,

  newName(updateName) {
    this.name = updateName;
  },
  newItem(updateItem) {
    this.items.push(updateItem);
  },
  getItemCount () {
    return this.items.length;
  }
}

bucket.newName('list');

bucket.newItem('glass');

console.log(bucket);

console.log(bucket.getItemCount());

