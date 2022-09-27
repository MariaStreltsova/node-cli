CLI приложение

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list

https://monosnap.com/file/qnjqUcXZhLZPmLqId5aKKiA73rx7jO

# Получаем контакт по id

node index.js --action get --id 5

https://monosnap.com/file/AjVcEPijHfsVrOchuxBDsXhyaa8VGd

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

https://monosnap.com/file/WhWD0Ns4yB7tQOPnY6WQMVjboiArZI

# Удаляем контакт

node index.js --action remove --id=3

https://monosnap.com/file/1jW2WWthagljwEnxF9KnPG7qHWN9FH
