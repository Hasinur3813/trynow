export const countdown = (endTime, onTick) => {
  const intervalId = setInterval(() => {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance < 0) {
      clearInterval(intervalId);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    if (onTick) onTick({ days, hours, minutes, seconds });
  }, 1000);

  return intervalId;
};
