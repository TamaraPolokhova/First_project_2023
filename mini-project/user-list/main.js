// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
fetch('http://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => {
        const block = document.getElementsByClassName('wrap')[0];
        for (const user of users) {
            const user_block = document.createElement('div');
            user_block.innerText = `#${user.id} ${user.name}`;
            block.appendChild(user_block);

            const printer = document.createElement('button');
            printer.innerText = 'more info';
            user_block.appendChild(printer);
            printer.onclick = () => {
                location.href = `../user-details/index.html?userId=${user.id}`;
            }
        }
    })
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// function liCreator(key, value, parent) {
//     const li = document.createElement('li');
//     li.innerHTML = `<b>${key}:</b> ${value}`;
//     parent.appendChild(li);
// }
//
// function ulBuilder(key, object, parent) {
//     const li = document.createElement('li');
//     const ul = document.createElement('ul');
//     li.innerHTML = `<b>${key}:</b>`;
//     parent.appendChild(li);
//     li.appendChild(ul);
//     recursiveBuild(object, ul);
// }
//
// function recursiveBuild(object, parent) {
//     for (const key in object) {
//         typeof object[key] === 'object'
//             ? ulBuilder(key, object[key], parent)
//             : liCreator(key, object[key], parent)
//     }
// }
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// fetch(`https://jsonplaceholder.typicode.com/users/USER_ID/posts`) //https://jsonplaceholder.typicode.com/posts
//     .then((respons) => respons.json())
//     .then((users) => {
//         for (const user of users) {
//             const button= document.createElement('button');
//             button.innerText='post of current user';
//             user_block.appendChild(button);
//             button.onclick =() => {
//                 document.write (title[userId]);
//             }
//         }
//
//     })
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули
// Отримання інформації про user з endpoint'а https://jsonplaceholder.typicode.com/users/{id}
// fetch (`https://jsonplaceholder.typicode.com/users/${userId}`)
// .then(response => response.json())
//     .then(user => {
// // Виведення всієї інформації про user
//         const userDiv = document.createElement('div');
//         document.body.appendChild(userDiv);
//     });
// } else
// //Виведення повідомлення про помилку, якщо id не було передано в параметрах URL
// const errorDiv = document.createElement('div');
// errorDiv.textContent = 'User ID was not found in the URL parameters';
// document.body.appendChild(errorDiv);
// }

// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// fetch(`https://jsonplaceholder.typicode.com/posts/POST_ID/comments`)
//     .then((respons) => respons.json())
//     .then((users) => {
//         const commentDiv = document.createElement('div');
//         document.body.appendChild(commentDiv);
//     }
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)



