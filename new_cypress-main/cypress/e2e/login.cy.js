describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru'); // Найти поле логин и вставить логин
         cy.get('#pass').type('iLoveqastudio1'); // Найти поле пороля и вставить пароль
         cy.get('#loginButton').click(); // нажал войти 
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверить что текст будет виден 
         cy.get('#messageHeader').should('be.visible') // виден пользователю 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
    })

         it('автотест на проверку логики восстановления пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').click(); // Найти Забыл пароль и нажать
            cy.get('#mailForgot').type('maxim@qa.studio') // Ввести любую почту
            cy.get('#restoreEmailButton').click(); // нажать "отправить код"
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверить что текст будет виден 
            cy.get('#messageHeader').should('be.visible') // виден пользователю 
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
         
     })

     it('проверку на негативный кейс авторизации', function () {
          cy.visit('https://login.qa.studio/');
          cy.get('#mail').type('german@dolnikov.ru'); // Найти поле логин и вставить логин
          cy.get('#pass').type('iLoveqas12234tudio1'); // Найти поле пороля и вставить НЕ ПРАВИЛЬНЫЙ пароль
          cy.get('#loginButton').click(); // нажал войти 
          cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверить что текст будет виден 
          cy.get('#messageHeader').should('be.visible') // виден пользователю 
          cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
     })

     it('проверку на негативный кейс авторизации', function () {
          cy.visit('https://login.qa.studio/');
          cy.get('#mail').type('germa123n@dolnikov.ru'); // Найти поле логин и вставить НЕ ПРАВИЛЬНЫЙ логин
          cy.get('#pass').type('iLoveqastudio1'); // Найти поле пороля и вставить НЕ ПРАВИЛЬНЫЙ пароль
          cy.get('#loginButton').click(); // нажал войти 
          cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверить что текст будет виден 
          cy.get('#messageHeader').should('be.visible') // виден пользователю 
          cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
     })

     it('проверку на негативный кейс авторизации', function () {
          cy.visit('https://login.qa.studio/');
          cy.get('#mail').type('germandolnikov.ru'); // Найти поле логин и вставить НЕ ПРАВИЛЬНЫЙ логин
          cy.get('#pass').type('iLoveqastudio1'); // Найти поле пороля и вставить НЕ ПРАВИЛЬНЫЙ пароль
          cy.get('#loginButton').click(); // нажал войти 
          cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверить что текст будет виден 
          cy.get('#messageHeader').should('be.visible') // виден пользователю 
          cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
     })

     it(' проверку на приведение к строчным буквам в логине', function () {
          cy.visit('https://login.qa.studio/');
          cy.get('#mail').type('GerMan@Dolnikov.ru'); // Найти поле логин и вставить НЕ ПРАВИЛЬНЫЙ логин
          cy.get('#pass').type('iLoveqastudio1'); // Найти поле пороля и вставить  ПРАВИЛЬНЫЙ пароль
          cy.get('#loginButton').click(); // нажал войти 
          cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверить что текст будет виден 
          cy.get('#messageHeader').should('be.visible') // виден пользователю 
          cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
     })

 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome