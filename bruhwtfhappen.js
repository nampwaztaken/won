function execute() {
  const endings = [
    "You Win!", "Not This!", "Champion!", "I get it, you won", "Stop it", "Secret",
    "Evil", "Satanic", "Neutralised", "Contrived Ending", "ending ending", "You Lose!",
    "Victory!", "No U", "truly neutralised", "Pointless", "Hardcore", "h5", "fixed",
    "NoTimeForNonsense", "antisimplicity", "shame on you", "hacker", "ping pong", "Party", "effortless"
  ];
  
  let i = 0;
  const interval = setInterval(() => {
    if (i >= endings.length) {
      clearInterval(interval);
      return;
    }
    showEnding(endings[i]);
    i++;
  }, 100);
}
