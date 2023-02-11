const input = document.getElementById("input");
const btn = document.getElementById("btn");
const linkResult = document.querySelector(".link_result");
const errorMsg = document.querySelector(".error");
const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu-nav");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("show-menu");
  body.classList.toggle("overflow-y-hidden");
});

const baseURL = "https://api.shrtco.de/v2";

function fetchData() {
  if (input.value.trim() != 0) {
    let inputValue = input.value;
    input.classList.remove("input_box");
    errorMsg.classList.remove("show_error");

    fetch(`${baseURL}/shorten?url=${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        linkResult.innerHTML = `
          <div class="flex flex-col gap-3 p-4 mt-3 bg-white rounded-md md:flex-row md:items-center md:justify-between">
            <a class="original_link text-headingColor" href="${data.result.original_link}" target="_blank">${data.result.original_link}</a>
            <div class="right flex flex-col gap-2 md:items-center md:flex-row">
              <a class="short_link text-btnBg" href="${data.result.full_short_link}" target="_blank">${data.result.full_short_link}</a>
              <button class="copy_btn py-2 px-4 bg-btnBg rounded-md text-white">Copy</button>
            </div>
          </div>`;

        let copyBtn = document.querySelector(".copy_btn");

        if (copyBtn) {
          copyBtn.addEventListener("click", function () {
            let shortLink = document.querySelector(".short_link");
            let tempInput = document.createElement("input");
            document.body.appendChild(tempInput);
            tempInput.value = shortLink.textContent;
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            copyBtn.textContent = "Copied!";
            copyBtn.style.backgroundColor = "#3A3054";
          });
        }
      });
  } else {
    input.classList.add("input_box");
    errorMsg.classList.add("show_error");
  }
}

btn.addEventListener("click", fetchData);
