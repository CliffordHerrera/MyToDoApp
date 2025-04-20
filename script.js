const inputValue = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const listWrap = document.getElementById('listWrap');
//const deleteBtn = document.getElementById('deleteBtn');

/*addTaskBtn.addEventListener('click', () => {
    const taskText = inputValue.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const activeBtn = document.createElement('button');
        activeBtn.textContent = 'Act';
        activeBtn.classList.add('bg-indigo-500', 'text-white', 'w-2', 'h-2', 'm-2', 'rounded-xl', 'hover:bg-indigo-600');
        activeBtn.id = 'activeBtn';
        deleteBtn.classList.add('bg-indigo-500', 'text-white', 'px-4', 'py-2', 'm-2', 'rounded-xl', 'hover:bg-indigo-600');
        deleteBtn.textContent = 'Delete';
        deleteBtn.id = 'deleteBtn';
        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        })
        taskItem.id = 'taskItemCurrent';
        taskItem.classList.add('bg-gray-200', 'text-black', 'flex', 'flex-row', 'justify-between', 'w-full', 'px-4', 'py-2', 'rounded-xl');
        taskItem.appendChild(activeBtn);
        taskItem.textContent = taskText;
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
        inputValue.value = '';
    }
}); */

addTaskBtn.addEventListener('click', () => {
    const taskText = inputValue.value.trim();
    if (taskText !== '') {
        // Create task item
        const taskItem = document.createElement('li');
        taskItem.classList.add(
            'bg-gray-200', 'text-black', 'flex', 'flex-row', 'justify-between',
            'items-center', 'w-full', 'px-4', 'py-2', 'rounded-xl', 'mb-2'
        );

        // Task text
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        // Initialize buttons
        const activeBtn = document.createElement('button');
        const activeImg = document.createElement('img');
        const timerBtn = document.createElement('button');
        const timerBtnImg = document.createElement('img');
        timerBtnImg.src = 'https://cdn-icons-png.flaticon.com/128/850/850960.png'; // timer icon
        timerBtnImg.classList.add('w-5', 'h-5');
        timerBtn.appendChild(timerBtnImg);
        timerBtn.classList.add('m-2', 'hover:scale-110', 'transition');
        timerBtn.addEventListener('click', () => {
            setInterval(() => {
                alert('Time\'s up!');
            }, 5000);
        })
        activeImg.src = 'https://cdn-icons-png.flaticon.com/512/190/190411.png'; // ✅ active icon
        activeImg.alt = 'Toggle';
        activeImg.classList.add('w-5', 'h-5');
        activeBtn.appendChild(activeImg);
        activeBtn.classList.add('m-2', 'hover:scale-110', 'transition');
        activeBtn.addEventListener('click', () => {
            taskItem.classList.toggle('opacity-50');
            const isInactive = taskItem.classList.contains('opacity-50');
            if(isInactive){
                activeImg.src = 'https://cdn-icons-png.flaticon.com/512/1828/1828774.png'; // ❌ inactive icon
                timerBtn.classList.add('hidden');
            } else {
                activeImg.src = 'https://cdn-icons-png.flaticon.com/512/190/190411.png'; // ✅ active icon
                timerBtn.classList.remove('hidden');
            }
        });

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('bg-indigo-500', 'text-white', 'px-4', 'py-2', 'm-2', 'rounded-xl', 'hover:bg-indigo-600');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        });

        // Buttons wrapper
        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('flex', 'items-center');
        buttonGroup.appendChild(timerBtn);
        buttonGroup.appendChild(activeBtn);
        buttonGroup.appendChild(deleteBtn);

        // Final assembly
        taskItem.appendChild(taskContent);
        taskItem.appendChild(buttonGroup);
        taskList.appendChild(taskItem);
        inputValue.value = '';
    }
});