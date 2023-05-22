function check_versions() {
    var cversion = document.getElementById("cversion-select").value;
    var tversion = document.getElementById("tversion-select").value;

    if (!cversion || !tversion) { return ;}

    var head = '<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575L6.457 1.047zM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.25-5.25a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5z"></path></svg></span> <code>Action required</code> - See ';
    var head_notes = '<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575L6.457 1.047zM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.25-5.25a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5z"></path></svg></span> <code>See notes</code> in ';
    var map = {
      "v1.2.1": {
        "v1.3.0": "Auto",
        "v1.3.1": "Auto",
        "v1.4.0": `${head}<a href="#v140">v1.4.0</a></p>`,
        "v1.4.1": `${head}<a href="#v141">v1.4.1</a></p>`,
        "v1.4.2": `${head}<a href="#v142">v1.4.2</a></p>`,
        "v1.4.3": `${head}<a href="#v143">v1.4.3</a></p>`,
        "v1.4.4": `${head}<a href="#v144">v1.4.4</a></p>`,
        "v1.4.5": `${head}<a href="#v145">v1.4.5</a></p>`,
        "v2.0.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.1": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.2": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.1.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.2.0": `${head}<a href="#v200">v2.0.0</a></p>`,
      }, 
      "v1.3.0": {
        "v1.3.1": "Auto",
        "v1.4.0": `${head}<a href="#v140">v1.4.0</a></p>`,
        "v1.4.1": `${head}<a href="#v141">v1.4.1</a></p>`,
        "v1.4.2": `${head}<a href="#v142">v1.4.2</a></p>`,
        "v1.4.3": `${head}<a href="#v143">v1.4.3</a></p>`,
        "v1.4.4": `${head}<a href="#v144">v1.4.4</a></p>`,
        "v1.4.5": `${head}<a href="#v145">v1.4.5</a></p>`,
        "v2.0.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.1": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.2": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.1.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.2.0": `${head}<a href="#v200">v2.0.0</a></p>`
      }, 
      "v1.3.1": {
        "v1.4.0": `${head}<a href="#v140">v1.4.0</a></p>`,
        "v1.4.1": `${head}<a href="#v141">v1.4.1</a></p>`,
        "v1.4.2": `${head}<a href="#v142">v1.4.2</a></p>`,
        "v1.4.3": `${head}<a href="#v143">v1.4.3</a></p>`,
        "v1.4.4": `${head}<a href="#v144">v1.4.4</a></p>`,
        "v1.4.5": `${head}<a href="#v145">v1.4.5</a></p>`,
        "v2.0.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.1": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.2": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.1.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.2.0": `${head}<a href="#v200">v2.0.0</a></p>`,
      }, 
      "v1.4.0": {
        "v1.4.1": "Auto",
        "v1.4.2": "Auto",
        "v1.4.3": "Auto",
        "v1.4.4": "Auto",
        "v1.4.5": `${head}<a href="#v145">v1.4.5</a></p>`,
        "v2.0.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.1": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.2": `${head}<a href="#v200">v2.0.0</a></p>`, 
        "v2.1.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.2.0": `${head}<a href="#v200">v2.0.0</a></p>`
      },
      "v1.4.1": {
        "v1.4.2": "Auto",
        "v1.4.3": "Auto",
        "v1.4.4": "Auto",
        "v1.4.5": `${head}<a href="#v145">v1.4.5</a></p>`,
        "v2.0.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.1": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.2": `${head}<a href="#v200">v2.0.0</a></p>`, 
        "v2.1.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.2.0": `${head}<a href="#v200">v2.0.0</a></p>`
      },
      "v1.4.2": {
        "v1.4.3": "Auto",
        "v1.4.4": "Auto",
        "v1.4.5": `${head}<a href="#v145">v1.4.5</a></p>`,
        "v2.0.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.1": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.2": `${head}<a href="#v200">v2.0.0</a></p>`, 
        "v2.1.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.2.0": `${head}<a href="#v200">v2.0.0</a></p>`,
      },
      "v1.4.3": {
        "v1.4.4": "Auto",
        "v1.4.5": `${head}<a href="#v145">v1.4.5</a></p>`,
        "v2.0.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.1": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.2": `${head}<a href="#v200">v2.0.0</a></p>`, 
        "v2.1.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.2.0": `${head}<a href="#v200">v2.0.0</a></p>`
      },
      "v1.4.4": {
        "v1.4.5": `${head}<a href="#v145">v1.4.5</a></p>`,
        "v2.0.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.1": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.2": `${head}<a href="#v200">v2.0.0</a></p>`, 
        "v2.1.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.2.0": `${head}<a href="#v200">v2.0.0</a></p>`
      }, 
      "v1.4.5": {
        "v2.0.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.1": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.0.2": `${head}<a href="#v200">v2.0.0</a></p>`, 
        "v2.1.0": `${head}<a href="#v200">v2.0.0</a></p>`,
        "v2.2.0": `${head}<a href="#v200">v2.0.0</a></p>`
      }, 
      "v2.0.0": {
        "v2.0.1": "Auto",
        "v2.0.2": "Auto", 
        "v2.1.0": `${head_notes} <a href="#v210">v2.1.0</a></p>`,
        "v2.2.0": `${head_notes} <a href="#v210">v2.1.0</a></p>`
      }, 
      "v2.0.1": {
        "v2.0.2": "Auto", 
        "v2.1.0": `${head_notes} <a href="#v210">v2.1.0</a></p>`,
        "v2.2.0": `${head_notes} <a href="#v210">v2.1.0</a></p>`
      }, 
      "v2.0.2": {
        "v2.1.0": `${head_notes} <a href="#v210">v2.1.0</a></p>`,
        "v2.2.0": `${head_notes} <a href="#v210">v2.1.0</a></p>`,
      }, 
      "v2.1.0": {
        "v2.2.0": "Auto",
      }
    }
    const div = document.getElementById('migration-info');
    div.innerHTML = '';

    if (cversion === tversion) {
       div.innerHTML = `<div class="admonition question">
            <p class="admonition-title">Let's talk</p>
            <p>We're not sure that's really useful. Coffee instead?</p>
            </div>`;
        return;
    }

    if (cversion in map) {
      if (tversion in map[cversion]) {
        if (map[cversion][tversion] == 'Auto') {
          div.innerHTML = `<div class="admonition success">
            <p class="admonition-title">Good news</p>
            <p>`+ cversion +` can be upgraded to `+ tversion + ` automatically</p>
            </div>`
            return;
        } else {
          div.innerHTML = `<div class="admonition danger">
            <p class="admonition-title">Caution</p>
            <p>`+ map[cversion][tversion] +`</p>
            </div>`
          return;
        }
      } 
    } 
    div.innerHTML = `<div class="admonition failure">
    <p class="admonition-title">Incompatible</p>
    <p>Migration from `+ cversion +` to `+ tversion + ` is not possible</p>
    </div>`;
    
  }
