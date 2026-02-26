
function copyCode() {
  const code = document.getElementById("refCode").innerText.trim();
  navigator.clipboard.writeText(code).then(() => {
    showToast();
  }).catch(() => {
    // fallback
    const temp = document.createElement("textarea");
    temp.value = code;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    showToast();
  });
}

function showToast(){
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1200);
}
