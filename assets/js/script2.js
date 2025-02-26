      function playSound() {
        const audio = document.querySelector("audio");
        audio.play();
      }

      document.addEventListener("DOMContentLoaded", function () {
        document.body.classList.add("loading");
        window.onload = function () {
          document.getElementById("loading-screen").style.display = "none";
          document.body.classList.remove("loading");
        };
      });

      document.addEventListener('mousemove', (e) => {
        const smoke = document.createElement('div');
        smoke.classList.add('smoke');
        smoke.style.left = `${e.pageX}px`;
        smoke.style.top = `${e.pageY}px`;
        document.body.appendChild(smoke);

        setTimeout(() => {
          smoke.remove();
        }, 1500);
      });

      function showTime() {
        const now = new Date();
        const hours = String(now.getHours() % 12 || 12).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = now.getHours() < 12 ? 'AM' : 'PM';
        document.getElementById('lxrd').innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
      }

      async function fetchIP() {
        try {
          const response = await fetch('https://api.ipify.org?format=json');
          const data = await response.json();
          document.getElementById('0b7bed6e6630029afc407b19c22aedef').innerText = `Your IP: ${data.ip}`;
        } catch (error) {
          document.getElementById('0b7bed6e6630029afc407b19c22aedef').innerText = 'Error Fetching IP';
        }
      }

      function fetchUserAgent() {
        const userAgent = navigator.userAgent;
        document.getElementById('userAgentContainer').innerText = `User Agent: ${userAgent}`;
      }

      setInterval(showTime, 500);
      fetchIP();
      fetchUserAgent();
