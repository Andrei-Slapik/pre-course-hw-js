
let rule = "Еще не родился тот человек, который, поста";

switch (true) {
  case rule.length < 25:
    console.log('Все таки нет правил без исключения')
    break
  case rule.length > 25:
    console.log('У меня 100 пудов все получится')
    break
    case rule.length === 25:
      console.log('50 на 50')
      break
}
