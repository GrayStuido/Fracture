document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('packagerForm');
    const feedback = document.getElementById('feedback');
    const cdContainer = document.getElementById('cdContainer');
    const cdImage = document.getElementById('cdImage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fileName = document.getElementById('fileName').value;
        const title = document.getElementById('title').value;
        const iframeSrc = document.getElementById('iframeSrc').value;
        const iconPath = document.getElementById('iconPath').value;

        feedback.textContent = 'Burning FractureDisk...';
        cdContainer.style.display = 'block';
        cdContainer.classList.add('burning');

        setTimeout(() => {
            feedback.textContent = 'Disk burned successfully!';
            cdContainer.classList.remove('burning');
            cdImage.src = iconPath;
            cdImage.style.opacity = '1';

            setTimeout(() => {
                packageDisk(fileName, title, iframeSrc, iconPath);
            }, 1000);
        }, 3000);
    });

    function packageDisk(fileName, title, iframeSrc, iconPath) {
        const diskInfo = JSON.stringify([{
            TITLE: title,
            "ICON-PATH": iconPath
        }]);

        const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }
        iframe { width: 100%; height: 100%; border: none; }
    </style>
</head>
<body>
    <iframe src="${iframeSrc}" frameborder="0" allowfullscreen></iframe>
</body>
</html>`;

        const fileContent = diskInfo + '\n' + htmlContent;

        const blob = new Blob([fileContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName.endsWith('.fracturedisk') ? fileName : `${fileName}.fracturedisk`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        feedback.textContent = `FractureDisk "${fileName}" packaged and ready for download!`;
    }
});