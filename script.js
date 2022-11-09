function write (variablename, text) {
    let variable = document.querySelector(`style[data-variable-name=text-content-${variablename}`)
    variable.textContent = `:root {--text-content-${variablename}: "${text}"}`
}