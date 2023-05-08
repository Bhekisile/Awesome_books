const getDate = () => {
const date = document.querySelector('.date');
date.innerHTML = DateTime.local();
}

export default getDate;