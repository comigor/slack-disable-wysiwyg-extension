console.log('DEBUG: Loading injector...');

function injectScript(file_path, tag, timeout) {
  return () => {
    return new Promise((resolve) => {
      var node = document.getElementsByTagName(tag)[0];
      var script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', file_path);
      node.appendChild(script);
      setTimeout(resolve, timeout);
    });
  }
}

injectScript(chrome.extension.getURL('index.js'), 'body', 50)()
  .then(() => {
    console.log('All injected!');
  });
