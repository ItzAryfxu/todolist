// Ambil elemen penting
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Fungsi untuk menambah tugas
addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    // Buat elemen list baru
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Tambahkan tombol hapus
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.classList.add("delete-btn");

    // Event untuk menghapus tugas
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(listItem);
    });

    // Tambahkan tombol ke list item
    listItem.appendChild(deleteBtn);

    // Tambahkan list item ke ul
    taskList.appendChild(listItem);

    // Kosongkan input setelah menambah
    taskInput.value = "";
});
