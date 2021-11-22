const applicationSoft = {
  name: 'Прикладное ПО',
  subTypes: [
    { name: 'Текстовый редактор' },
    { name: 'Графический редактор' },
    { name: 'Электронная таблица' },
    { name: 'Музыкальный редактор' },
    { name: 'Обучающая программа' },
    { name: 'Игра' },
    { name: 'Связь' },
    { name: 'Другое' },
  ],
};

const systemSoft = {
  name: 'Системное ПО',
  subTypes: [
    { name: 'Драйвер' },
    { name: 'ОС' },
    { name: 'Дополнение' },
    { name: 'Утилита' },
    { name: 'Проигрыватель' },
    { name: 'Архиватор' },
    { name: 'Антивирус' },
    { name: 'Другое' },
  ],
};

const toolSoft = {
  name: 'Инструментальное ПО',
  subTypes: [
    { name: 'Среда разработки' },
    { name: 'СУБД' },
    { name: 'Компилятор' },
    { name: 'Интерпертатор' },
    { name: 'Другое' },
  ],
};

export default [applicationSoft, systemSoft, toolSoft];
