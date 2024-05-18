async function createPostHandler(event) {
    event.preventDefault();

    const songName = document.getElementById('song-name').textContent;
    const songArtist = document.getElementById('song-artist').textContent;

    document.getElementById('current-song-name').value = songName;
    document.getElementById('current-song-artist').value = songArtist;

    document.location.replace('/dashboard/new');
}

document.querySelector('#create-new-post').addEventListener('click', createPostHandler);
