describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт
         cy.get('input[type="email"]').type('USER_LOGIN');               //логин
         cy.get('input[type="password"]').type('USER_PASSWORD');         // пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик 
         cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
         cy.get('.available > button').first().click({ force: true });   // кликаем Купить
         cy.get('.credit').type('4111111111111111');                     //  номер карты
         cy.get('.k_input_ccv').type('123');                             // CVV 
         cy.get('.k_input_date').type('2412');                           // срок действия 
         cy.get('.k_input_name').type('ARTEM IVANOV');                   // имя владельца
         cy.get('.pay-btn').click();                                  // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('0000');                            // код подтверждения 
         cy.get('.payment__submit-button').click();                      // Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем видимость сообщения
     })
 })
