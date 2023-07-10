import { DateTime } from './luxon.js';

const today = () => {
  const dates = document.querySelectorAll('.date');
  for (let i = 0; i < dates.length; i += 1) {
    const today = DateTime.now().toFormat('MMMM dd yyyy, h:mm:ss a');
    dates[i].innerHTML = today;
  }
};
setInterval(today, 1000);

export default today;