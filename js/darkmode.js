let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const metaTheme = document.querySelector('meta[name="theme-color"]')

const updateThemeColor = () => {
  const isDark = document.body.classList.contains('darkmode')
  metaTheme.setAttribute("content", isDark ? "#1e1e1e" : "#fff8f0")
}

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
  updateThemeColor()
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
  updateThemeColor()
}

if (darkmode === "active") enableDarkmode()
else updateThemeColor()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
