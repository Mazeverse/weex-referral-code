
function copyCode(){
  const code=document.getElementById("refCode").innerText;
  navigator.clipboard.writeText(code);
  const toast=document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1200);
}
