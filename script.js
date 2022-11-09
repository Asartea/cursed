let variables = document.querySelector('style')
function write (text) {
    variables.textContent = `:root {--text-content: "${text}"}`
}