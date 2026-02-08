// Utility Helper Functions
// URL encoding and compression utilities for share links

// Compress and encode state for URL sharing
export function compressState(state) {
    try {
        const jsonString = JSON.stringify(state);
        // For simplicity, we'll use base64 encoding
        // In production, you might want to use LZString or similar for better compression
        return btoa(encodeURIComponent(jsonString));
    } catch (error) {
        console.error('Error compressing state:', error);
        return null;
    }
}

// Decompress and decode state from URL
export function decompressState(encoded) {
    try {
        const jsonString = decodeURIComponent(atob(encoded));
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Error decompressing state:', error);
        return null;
    }
}

// Generate share link with state
export function generateShareLink(state) {
    const compressed = compressState(state);
    if (!compressed) return null;
    
    const baseUrl = window.location.origin + window.location.pathname;
    return `${baseUrl}?data=${compressed}`;
}

// Parse state from URL parameters
export function parseUrlState() {
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get('data');
    
    if (data) {
        return decompressState(data);
    }
    return null;
}

// Copy text to clipboard
export async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (error) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textarea);
            return true;
        } catch (err) {
            document.body.removeChild(textarea);
            console.error('Failed to copy:', err);
            return false;
        }
    }
}

// Download text as file
export function downloadFile(content, filename, contentType = 'text/plain') {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Format number with commas
export function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Clamp value between min and max
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

// Deep clone object
export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Show temporary notification
export function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#2d5016' : '#8b0000'};
        color: #f0e6d3;
        border-radius: 8px;
        border: 2px solid ${type === 'success' ? '#4a7728' : '#b91414'};
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

export default {
    compressState,
    decompressState,
    generateShareLink,
    parseUrlState,
    copyToClipboard,
    downloadFile,
    formatNumber,
    clamp,
    deepClone,
    showNotification
};
