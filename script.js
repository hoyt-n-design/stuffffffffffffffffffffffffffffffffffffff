// 1. Create the button element
const dynamicBtn = document.createElement('button');

// 2. Add text and styling
dynamicBtn.innerText = 'Dynamic Button';
dynamicBtn.style.backgroundColor = 'lightblue';

// 3. Add functionality
dynamicBtn.addEventListener('click', () => {
    console.log('Dynamic button clicked!');
});

// 4. Append it to the page (e.g., to the body)
document.body.appendChild(dynamicBtn);
