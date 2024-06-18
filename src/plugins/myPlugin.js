// myPlugin.js
export default {
    install(app, options) {
      // Add a global method
      app.config.globalProperties.$myMethod = () => {
        console.log('This is a global method');
      };
  
      // Add a global property
      app.config.globalProperties.$myProperty = 'My global property';
  
      // Add a global component
      app.component('MyComponent', {
        template: '<div>A custom component!</div>'
      });
  
      // Add a global directive
      app.directive('focus', {
        mounted(el) {
          el.focus();
        }
      });
    }
  };
  