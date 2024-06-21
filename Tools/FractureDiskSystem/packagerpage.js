document.addEventListener('DOMContentLoaded', function() {
    const packagerForm = document.getElementById('packagerForm');

    packagerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const fileName = document.getElementById('fileName').value.trim();
        const title = document.getElementById('title').value.trim();
        const iframeSrc = document.getElementById('iframeSrc').value.trim();
        const iconPath = document.getElementById('iconPath').value.trim();

        // Validate form values
        if (!fileName || !title || !iframeSrc || !iconPath) {
            alert('Please fill in all fields.');
            return;
        }

        // Construct JSON-like structure with HTML content
        const diskInfo = JSON.stringify([
            {
                "TITLE": title,
                "ICON-PATH": iconPath
            }
        ]);

        const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>
</head>
<body>
    <iframe src="${iframeSrc}"></iframe>
</body>
</html>`;

        // Create a Blob with the file content
        const fileContent = `${diskInfo}\n${htmlContent}`;
        const blob = new Blob([fileContent], { type: 'text/html' });

        // Create download link
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = fileName.endsWith('.fracturedisk') ? fileName : `${fileName}.fracturedisk`;
        downloadLink.click();
    });
});
