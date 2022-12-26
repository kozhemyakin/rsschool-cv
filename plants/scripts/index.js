console.log('Вёрстка валидная +10,\nВёрстка семантическая +20,\nВёрстка соответствует макету +48,\nТребования к css + 12,\nИнтерактивность, реализуемая через css +20.\nИтоговая оценка: 100 баллов')

function openMenu() {
    document.querySelector('.opened-mobile-menu').classList.add('activated')
}

function closeMenu() {
    document.querySelector('.opened-mobile-menu').classList.remove('activated')
  }