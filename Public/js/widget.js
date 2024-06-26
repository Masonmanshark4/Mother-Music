// Function to fetch random song from the server
async function fetchRandomSong() {
  try {
    const response = await fetch('/songs/random-song');
    const data = await response.json();

    // Update widget with song information
    document.getElementById('song-name').textContent = data.name;
    document.getElementById('song-artist').textContent = data.artist;
    document.getElementById('song-album').textContent = data.album;
    document.getElementById('song-preview').src = data.previewUrl;
    document.getElementById('song-link').href = data.externalUrl;

    // Store song details in hidden inputs
    document.getElementById('current-song-name').value = data.name;
    document.getElementById('current-song-artist').value = data.artist;
  } catch (error) {
    console.error('Error fetching random song:', error);
  }
}

// Event listener for the "Generate Random Song" button
document.getElementById('generate-btn').addEventListener('click', fetchRandomSong);

// Fetch a random song when the page loads
fetchRandomSong();
