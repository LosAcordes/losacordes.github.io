async function fetchLastUpdate() {
  const apiUrl = 'https://api.github.com/repos/LosAcordes/losacordes.github.io/commits?per_page=1';
  try {
    const response = await fetch(apiUrl); // Fetch data
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Extract date and message from the first (newest) commit
    const latestCommit = data[0];
    const commitMessage = latestCommit.commit.message;
    const commitDateString = latestCommit.commit.committer.date;
    // Format date
    const commitDate = new Date(commitDateString);
    const formattedDate = commitDate.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    // Update HTML
    const container = document.getElementById('actualizacion');
    container.innerHTML = `
      <p>
        Última actualizacion el ${formattedDate}
        <br/>
        Cambios: ${commitMessage}
      </p>
    `;

  } catch (error) {
    document.getElementById('actualizacion').innerHTML =
      '<p>ERROR: No se pudo obtener la última fecha de actualizacion :(</p>';
  }
}

document.addEventListener('DOMContentLoaded', fetchLastUpdate);
