const modal = document.getElementById("modal");

document.getElementById("openBtn").onclick = () => modal.classList.add("open");
document.getElementById("closeBtn").onclick = () => modal.classList.remove("open");

// يقفل لما تدوس على الخلفية
modal.onclick = (e) => {
  if (e.target === modal) modal.classList.remove("open");
};