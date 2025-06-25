
document.querySelector('.generate').addEventListener('click', function() {
    const outputArea = document.getElementById('output');
    outputArea.innerHTML = `
        <p style="margin-top:20px;">Generating content...</p>
        <div class="previews">
            <img src="assets/dummy-output.jpg" alt="Generated Image 1">
            <img src="assets/dummy-output.jpg" alt="Generated Image 2">
        </div>
    `;
});
