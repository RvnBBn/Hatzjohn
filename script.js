document.getElementById('writeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const filename = document.getElementById('filename').value;
    const content = document.getElementById('content').value;
    const token = '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'; // Replace with your GitHub token
    const owner = 'RvnBBn'; // Replace with your GitHub username
    const repo = ' RvnBBn/Hatzjohn'; // Replace with your GitHub repository name

    const path = filename;
    const message = `Update ${filename}`;
    const contentEncoded = btoa(content); // Base64 encode the content

    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: message,
            content: contentEncoded,
            branch: 'main' // Change branch name if needed
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.commit) {
            document.getElementById('result').innerText = `File ${filename} updated successfully.`;
        } else {
            document.getElementById('result').innerText = `Error: ${data.message}`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred.';
    });
});
