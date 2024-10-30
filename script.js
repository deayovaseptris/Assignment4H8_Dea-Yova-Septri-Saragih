// Nama: Dea Yova Septri Saragih

function tampilkanData() {
  const modal = document.getElementById("editModal");
  modal.style.display = "block";
  loadData();
}

function tutupModal() {
  const modal = document.getElementById("editModal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("editModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function loadData() {
  const profileData = JSON.parse(localStorage.getItem("profile"));
  if (profileData) {
    document.getElementById("name").value = profileData.name || "";
    document.getElementById("role").value = profileData.role || "";
    document.getElementById("availability").value =
      profileData.availability || "";
    document.getElementById("age").value = profileData.age || "";
    document.getElementById("location").value = profileData.location || "";
    document.getElementById("experience").value = profileData.experience || "";
    document.getElementById("email").value = profileData.email || "";
  }
}

function saveData(event) {
  event.preventDefault();

  const profileData = {
    name: document.getElementById("name").value,
    role: document.getElementById("role").value,
    availability: document.getElementById("availability").value,
    age: document.getElementById("age").value,
    location: document.getElementById("location").value,
    experience: document.getElementById("experience").value,
    email: document.getElementById("email").value,
  };

  localStorage.setItem("profile", JSON.stringify(profileData));
  tutupModal();
  displayProfile();
}

function displayProfile() {
  const profileData = JSON.parse(localStorage.getItem("profile"));
  if (profileData) {
    document.querySelector(".profile-name").textContent =
      profileData.name || "N/A";
    document.querySelector(".profile-role").textContent =
      profileData.role || "N/A";
    document.querySelector(".availability .value").textContent =
      profileData.availability || "N/A";
    document.querySelector(".usia .value").textContent =
      profileData.age || "N/A";
    document.querySelector(".lokasi .value").textContent =
      profileData.location || "N/A";
    document.querySelector(".pengalaman .value").textContent =
      profileData.experience || "N/A";
    document.querySelector(".email .value").textContent =
      profileData.email || "N/A";
  }
}

window.onload = displayProfile;
