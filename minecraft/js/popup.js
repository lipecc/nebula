window.onload = function() {
    if (!localStorage.getItem('dontShowPopup')) {
        document.getElementById('joinModal').style.display = 'flex';
    }
}

function openModal() {
    document.getElementById('joinModal').style.display = 'flex';
}

function openCopyModal() {
    document.getElementById('joinModal').style.display = 'none';
    document.getElementById('copyModal').style.display = 'flex';
    if (document.getElementById('dontShowCheckbox').checked) {
        localStorage.setItem('dontShowPopup', true);
    }
}

function closeModal() {
    document.getElementById('joinModal').style.display = 'none';
    document.getElementById('copyModal').style.display = 'none';
    if (document.getElementById('dontShowCheckbox').checked) {
        localStorage.setItem('dontShowPopup', true);
    }
}

function copyLink() {
    const copyText = document.getElementById('discordLink').textContent;
    navigator.clipboard.writeText(copyText).then(function() {
        alert("Discord link copied to clipboard!");
    }, function() {
        alert("Failed to copy the link.");
    });
}

// Clr data

function openClrModal() {
    document.getElementById('clr-data-model').style.display = 'flex';
}

function closeClrModal() {
    document.getElementById('clr-data-model').style.display = 'none';
}
