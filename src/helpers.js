export function randomArrayItem(data) {
  return data[Math.floor(Math.random() * data.length)];
}

export function getRandomTagline() {
  const taglines = [
    "Let's get this shit done!",
    "Whatcha gonna do? Whatcha gonna do when they come for you?",
    "Better late than never..."
  ];
  return randomArrayItem(taglines);
}
