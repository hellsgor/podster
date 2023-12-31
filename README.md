# Podster

Last project in Axbit Group

Посмотреть проект - https://hellsgor.github.io/podster/

---

1. [Клонирование репозитория](#a-namerepo-clone-клонирование-репозитория-a)
2. [Версионность](#a-nameversions-версионность-a)
3. [Работа с npm](#a-namenpmcommands-работа-с-npm-a)
4. [Файловая структура](#a-namefile-structure-файловая-структура-a)
5. [Alias'ы](#a-namealias-aliasы-a)
6. [Советы и правила](#a-nametips-and-rules-советы-и-правила-a)

---

## <a name='repo-clone'>Клонирование репозитория</a>

    git clone -b main git@github.com:hellsgor/podster.git

## <a name='versions'>Версионность</a>

- node js - v.20.9.0
- npm - 10.1.0

## <a name='npmcommands'>Работа с npm</a>

- установка пакетов - `npm i`;
- запуск dev-сервера - `npm start`;
- сборка билда dev - `npm run dev`;
- сборка билда prod - `npm run build`;
- predeploy - `npm run build`,
- deploy - `gh-pages -d build`;

## <a name='file-structure'>Файловая структура</a>

- src/
    - assets/
        - favicon/ - фавиконки;
        - fonts/ - шрифты;
        - icons/ - иконки;
        - image/ - изображения;
        - pug/
            - mixins - для pug-миксинов
        - styles/ - основные файлы стилей;
    - components/ - компоненты;
        - common/ - компоненты обязательные для всех страниц;
    - layouts/ - шаблоны страниц;
    - libs/ - для хранения библиотек;
    - pages/ - страницы;
        - main/ - файлы главной страницы;
        - ui-kit/ - файлы страницы UI-Kit;
    - ui-kit/ - микро-компоненты (кнопки, чек-боксы, инпуты и пр.);
    - utils/ - части js-кода используемые в проекте вынесены в отдельную папку,
      например, отправка или валидация полей формы, маски и пр.

## <a name='alias'>Alias'ы</a>

- Img - './src/assets/image/';
- Icons - './src/assets/icons/';
- Fonts - './src/assets/fonts/';
- Components - './src/components/';
- Layouts - './src/layouts/';
- UIKit - './src/ui-kit/';
- Styles - './src/assets/styles/';
- Libs - './src/libs/' (на момент публикации не используется);
- NodeModules - './node_modules/';
- Utils - './src/utils/';
- Mixins - './src/assets/pug/mixins/';
- Moc - './src/moc/';
- Constants - ''./src/constants/''

## <a name='tips-and-rules'>Советы и правила</a>

- файлы ".gitkeep" следует удалить если в папке-родителе появятся файлы проекта.
  Файлы ".gitkeep" требуются исключительно для сохранения файловой структуры в
  git;
- каждой новой странице после копирования кода pug и scss-файлов:
    - в pug изменить:
        - значение переменной `header` если это необходимо (хедер нужен /не
          нужен);
        - значение переменной `footer` если это необходимо (футер нужен /не
          нужен);
        - значение переменной `pageClassName` (назначить правильный класс
          тегу <main> для управления страницей);
