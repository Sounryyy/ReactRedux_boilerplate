import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterLink from 'src/components/FilterLink/index';

class App extends Component {
  render() {
    return (
      <div>
        Hello world! <br />
        <br />
        <h1>На вечер: </h1>
        <h2>1) Настроить stylelint</h2>
        <h2>2) Стилизовать и привести в нормальный вид Button и FilterLink</h2>
        <h2>3) Чуть подкорректировать архитектуру</h2>
        <br />
        <br />
        <h1>До завершения: </h1>
        <h2>Стилизация начальных контейнеров и компонентов</h2>
        <h2>Лоадер</h2>
        <h2>Локализация</h2>
        <h2>Добавить возможность тестирования</h2>
        <h2>Добавить middleware</h2>
        <h2>Протестировать начальные компоненты</h2>
        <h2>Полное корректирование prettier + eslint + stylelint</h2>
        <h2>Код сплиттинг в бандлах</h2>
        <h2>Прод версия вебпак конфига</h2>
        <h2>Done</h2>
        <br />
        <FilterLink filter="Info">Go to 404 page</FilterLink>
      </div>
    );
  }
}

export default connect(state => ({
  testStore: state
}))(App);
