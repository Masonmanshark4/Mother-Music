async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_content = document.querySelector('textarea[name="post-content"]').value.trim();
    const songName = document.querySelector('input[name="currentSongName"]').value;
    const songArtist = document.querySelector('input[name="currentSongArtist"]').value;
  
    if (title && post_content && songName && songArtist) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          post_content,
          songName,
          songArtist
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  