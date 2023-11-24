// for music button
async function fetchMusicDisplayData() {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/videos/category/1001');
        const data = await response.json();
        return data.data;
    }
    catch (error) {
        console.log(error);
    }
}

function createVideoHolder(video) {
    const card = document.createElement('div');
    card.className = 'videoCard';
    const thumbnail = document.createElement('img');
    thumbnail.src = video.thumbnail;
    card.appendChild(thumbnail);
    const title = document.createElement('h3');
    title.textContent = video.title;
    card.appendChild(title);

    const authors = document.createElement('h5');
    authors.textContent = video.authors;
    card.appendChild(authors);
    return card;
}

async function videoList() {
    const videoListContainer = document.getElementById('videoList');
    const apiData = await fetchMusicDisplayData();
    videoListContainer.innerHTML = '';

    apiData.forEach(video => {
        const videoCard = createVideoHolder(video);
        videoListContainer.appendChild(videoCard);
    });
}

const musicButton = document.getElementById('musicButton');
musicButton.addEventListener('click', videoList);

