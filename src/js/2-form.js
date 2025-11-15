function saveToLS(key, value) {
    const zip = JSON.stringify(value);
    localStorage.setItem(key, zip);
};

function loadFromLS(key) {
    const zip = localStorage.getItem(key);
    try {
        const value = JSON.parse(zip);
        return value;
    } catch {
        return zip;
    }
};

const form = document.querySelector(".feedback-form");

const formData = {
    email: "",
    message: "",
};

form.addEventListener('input', () => {
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();
    saveToLS("feedback-form-state", formData);
});

document.addEventListener("DOMContentLoaded", () => {
    const data = loadFromLS("feedback-form-state");
    form.elements.email.value = data?.email || "";
    form.elements.message.value = data?.message || "";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formData.email !== "" && formData.message !== "") {
        const values = {
        email: formData.email,
        message: formData.message,
        };
        console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    } else {
        alert("Fill please all fields");
    };
    
});