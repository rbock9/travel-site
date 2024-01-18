import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu' // 'MobileMenu' is a variable name we're creating. Matches the actual name of the class to stay organized.

let mobileMenu = new MobileMenu(); // assigning this instance to a variable since we'll probably want to access it later on

if (module.hot) {
    module.hot.accept()
}

