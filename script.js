Array.from(bookmark).forEach(v => v.addEventListener('click', function () {

    

    if (el.classList.contains("fa-heart-o")) {
        el.classList.remove("fa-heart-o")
        el.classList.add("fa-heart")
        el.innerText = "Job saved"

    } else {
        el.classList.remove("fa-heart")
        el.classList.add("fa-heart-o")
        el.innerText = "Save Job"
    }
}));