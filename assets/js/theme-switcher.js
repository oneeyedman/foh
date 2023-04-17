const themeSwitcher = (()=> {
  const THEMES = {
    dark: 'dark',
    light: 'light',
    name: {
      dark: 'oscuro',
      light: 'claro'
    }
  };

  function setTheme(theme) {
    const body = document.body;
    if (theme === THEMES.light) {
      body.classList.add('foh--light');
    } else {
      body.classList.remove('foh--light');
      body.classList.add('foh--dark');
      setTimeout(() => {
        body.classList.remove('foh--dark');
      } , 2000);

    }
  }


  function adjustThemeLinks(theme) {
    const oppositeTheme = theme === THEMES.light ? THEMES.dark : THEMES.light;
    const themeLinks = document.querySelectorAll('.js-theme-switcher-link');
  
    themeLinks.forEach(link => {
      link.href = link.href.replaceAll(oppositeTheme, theme);
    });
  }

  function setSwitcherName(theme) {
    const switcherName = document.querySelector('.js-theme-switcher-name');
    switcherName.innerHTML = THEMES.name[theme];
  }
  

  function init() {
    const switchField = document.querySelector('.js-theme-switcher-checkbox');
    switchField.checked = false;
    
    switchField.addEventListener('change', event => {
      const theme = event.currentTarget.checked ? THEMES.light : THEMES.dark;
      
      setTheme(theme);
      adjustThemeLinks(theme);
      setSwitcherName(theme);
      
    });
  }

  return {
    init
  };
})();

themeSwitcher.init();