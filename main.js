const list = document.querySelectorAll(".item");
const activeLink = (item) => {
    // debugger
    list.forEach(i => {
        i.classList.remove('active');
    });
    item.classList.add('active');
};

list.forEach(item => {
    item.addEventListener("click", () => activeLink(item))
});