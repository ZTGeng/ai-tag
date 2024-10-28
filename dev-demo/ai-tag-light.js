const YOUR_API_KEY = "...";

class AIElement extends HTMLElement {
  constructor() {
    super();

    this.loadingIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.loadingIcon.id = 'ai-button-loading-icon';
    this.loadingIcon.setAttribute('viewBox', '0 0 50 50');
    this.loadingIcon.innerHTML = `
      <path d="M 25 5 C 14.351563 5 5.632813 13.378906 5.054688 23.890625 C 5.007813 24.609375 5.347656 25.296875 5.949219 25.695313 C 6.550781 26.089844 7.320313 26.132813 7.960938 25.804688 C 8.601563 25.476563 9.019531 24.828125 9.046875 24.109375 C 9.511719 15.675781 16.441406 9 25 9 C 29.585938 9 33.699219 10.925781 36.609375 14 L 34 14 C 33.277344 13.988281 32.609375 14.367188 32.246094 14.992188 C 31.878906 15.613281 31.878906 16.386719 32.246094 17.007813 C 32.609375 17.632813 33.277344 18.011719 34 18 L 40.261719 18 C 40.488281 18.039063 40.71875 18.039063 40.949219 18 L 44 18 L 44 8 C 44.007813 7.460938 43.796875 6.941406 43.414063 6.558594 C 43.03125 6.175781 42.511719 5.964844 41.96875 5.972656 C 40.867188 5.988281 39.984375 6.894531 40 8 L 40 11.777344 C 36.332031 7.621094 30.964844 5 25 5 Z M 43.03125 23.972656 C 41.925781 23.925781 40.996094 24.785156 40.953125 25.890625 C 40.488281 34.324219 33.558594 41 25 41 C 20.414063 41 16.304688 39.074219 13.390625 36 L 16 36 C 16.722656 36.011719 17.390625 35.632813 17.753906 35.007813 C 18.121094 34.386719 18.121094 33.613281 17.753906 32.992188 C 17.390625 32.367188 16.722656 31.988281 16 32 L 9.71875 32 C 9.507813 31.96875 9.296875 31.96875 9.085938 32 L 6 32 L 6 42 C 5.988281 42.722656 6.367188 43.390625 6.992188 43.753906 C 7.613281 44.121094 8.386719 44.121094 9.007813 43.753906 C 9.632813 43.390625 10.011719 42.722656 10 42 L 10 38.222656 C 13.667969 42.378906 19.035156 45 25 45 C 35.648438 45 44.367188 36.621094 44.945313 26.109375 C 44.984375 25.570313 44.800781 25.039063 44.441406 24.636719 C 44.078125 24.234375 43.570313 23.996094 43.03125 23.972656 Z"></path>
    `;

    this.aiButtonIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.aiButtonIcon.id = 'ai-button-icon';
    this.aiButtonIcon.setAttribute('viewBox', '0 0 512 512');
    this.aiButtonIcon.innerHTML = `
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M208,512a24.84,24.84,0,0,1-23.34-16l-39.84-103.6a16.06,16.06,0,0,0-9.19-9.19L32,343.34a25,25,0,0,1,0-46.68l103.6-39.84a16.06,16.06,0,0,0,9.19-9.19L184.66,144a25,25,0,0,1,46.68,0l39.84,103.6a16.06,16.06,0,0,0,9.19,9.19l103,39.63A25.49,25.49,0,0,1,400,320.52a24.82,24.82,0,0,1-16,22.82l-103.6,39.84a16.06,16.06,0,0,0-9.19,9.19L231.34,496A24.84,24.84,0,0,1,208,512Zm66.85-254.84h0Z"></path>
        <path d="M88,176a14.67,14.67,0,0,1-13.69-9.4L57.45,122.76a7.28,7.28,0,0,0-4.21-4.21L9.4,101.69a14.67,14.67,0,0,1,0-27.38L53.24,57.45a7.31,7.31,0,0,0,4.21-4.21L74.16,9.79A15,15,0,0,1,86.23.11,14.67,14.67,0,0,1,101.69,9.4l16.86,43.84a7.31,7.31,0,0,0,4.21,4.21L166.6,74.31a14.67,14.67,0,0,1,0,27.38l-43.84,16.86a7.28,7.28,0,0,0-4.21,4.21L101.69,166.6A14.67,14.67,0,0,1,88,176Z"></path>
        <path d="M400,256a16,16,0,0,1-14.93-10.26l-22.84-59.37a8,8,0,0,0-4.6-4.6l-59.37-22.84a16,16,0,0,1,0-29.86l59.37-22.84a8,8,0,0,0,4.6-4.6L384.9,42.68a16.45,16.45,0,0,1,13.17-10.57,16,16,0,0,1,16.86,10.15l22.84,59.37a8,8,0,0,0,4.6,4.6l59.37,22.84a16,16,0,0,1,0,29.86l-59.37,22.84a8,8,0,0,0-4.6,4.6l-22.84,59.37A16,16,0,0,1,400,256Z"></path>
      </g>
    `;

    this.aiButton = document.createElement('button');
    this.aiButton.id = 'ai-button';
    this.aiButton.appendChild(this.aiButtonIcon);
    this.aiButton.addEventListener('click', () => {
      this.aiButton.innerHTML = '';
      this.aiButton.appendChild(this.loadingIcon);
      this.aiButton.disabled = true;
      this.chatApi().then((data) => {
        if (data && data !== "Error") {
          console.log(data);
          this.updateElement(data);
        }
        this.aiButton.innerHTML = '';
        this.aiButton.appendChild(this.aiButtonIcon);
        this.aiButton.disabled = false;
      });
    });

    const style = document.createElement('style');
    style.textContent = `
      #ai-button {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 9999;
        padding: 10px;
        border: none;
        border-radius: 20%;
        background-color: #6c63ff;
        color: #fff;
        cursor: pointer;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease;
      }
      
      #ai-button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
        box-shadow: none;
      }

      #ai-button:hover:enabled {
        background-color: #4f4bd9;
      }

      #ai-button-icon {
        width: 24px;
        height: 24px;
        fill: currentColor;
        transition: transform 0.3s ease;
      }

      #ai-button-loading-icon {
        width: 24px;
        height: 24px;
        fill: currentColor;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `;

    this.slotDiv = document.createElement('div');
    this.appendChild(this.aiButton);
    this.appendChild(style);
    this.appendChild(this.slotDiv);
  }

  // connectedCallback() {
    // const slot = this.shadowRoot.querySelector('slot');
  // }

  updateElement(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    console.log(doc);
    this.slotDiv.innerHTML = '';
    Array.from([...doc.head.childNodes, ...doc.body.childNodes]).forEach((child) => {
      console.log(child);
      if (child.nodeName === 'SCRIPT') {
        const script = document.createElement('script');
        script.textContent = child.textContent;
        this.slotDiv.appendChild(script);
      } else {
        this.slotDiv.appendChild(child);
      }
    });
  }

  async chatApi() {
    const currentContent = getDisplayedHTML();
    const prompt = systemPrompt(currentContent);
    console.log(prompt);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${YOUR_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: prompt },
            { role: 'user', content: 'Change the background color of the webpage to yellow.' }
          ]
        })
      });
  
      if (!response.ok) {
        console.error('Chat API response error:', response);
        return "Error";
      } else {
        const data = await response.json();
        return data.choices[0].message.content;
      }
    } catch (error) {
      console.error('Chat API request error:', error);
      return "Error";
    }
  }
}
customElements.define('ai-element', AIElement);

const systemPrompt = (content) => `
You are a front-end developer and web designer. You will use your creativity and skills to meet the client's request.
The information below (wrapped between """) is the current whole webpage. You will find a <ai-element> tag in it. Your task is to generate proper HTML content to insert into the <ai-element> tag.
"""
${content}
"""
Your response must STRICTLY follow this format:
 - It is in HTML and ready to be parsed with DOMParser. No extra spaces or characters before or after the HTML content. Do NOT put your content in code block wrapped by triple backticks.
 - It only contains the content inside the <ai-element> tag. Do NOT include any content outside the <ai-element> tag. Do NOT include the <ai-element> tag itself.
 - It CANNOT include these tags: <html>, <head>, <body>, doctype declaration, or any head-related tags.
 - It could contain no more than one <style> tags, only when needed. The css in it will be applied to the whole page.
 - It could contain no more than one <script> tags, only when needed. The code in it will be immediately run. The <script> tag cannot be contained by any other tag.
`;

const sample = `
<div><button id="button-1">Chick Me 1</button></div>
<div><button id="button-2">Chick Me 2</button></div>
<style>
  button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
</style>
<script>
  console.log("new button created");
  document.getElementById('button-1').addEventListener('click', () => {
    alert('Button 1 clicked!');
  });
</script>`;

function getDisplayedHTML() {
  const bodyClone = document.body.cloneNode(true);

  function removeEmptyElements(element) {
    Array.from(element.childNodes).forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName === 'AI-ELEMENT') {
          node.innerHTML = 'Your generated content will be inserted here.';
        } else if (node.tagName === "IMG") {
          if (!node.alt) {
            element.removeChild(node);
          }
        } else if (node.textContent.trim() === "" || node.hidden) {
          element.removeChild(node);
        } else {
          removeEmptyElements(node);
        }
      }
    });
  }

  removeEmptyElements(bodyClone);

  return bodyClone.innerHTML;
}
