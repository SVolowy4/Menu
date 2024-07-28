let daysOfWeek = [
   680, 270, 270, 270, 330, 450, 680
]
let date = new Date()
let today = date.getDay()
let time = date.getHours()

const $body = document.getElementById('body')

const $mainDisplay = document.getElementById('mainDisplay')

//створення головних кнопок
function creatBtn(bc, b) {
  
    bc = document.createElement('div'),
    b = document.createElement('button')
  
  //стилі
  b.classList.add('btn')
  
  //рендер
  bc.append(b)
  $mainDisplay.append(bc)
  
  return bc, b
}

const $mBtnTip = creatBtn()
$mBtnTip.textContent = 'На господинь'
$mBtnTip.classList.add('main-button')
//при натисненні кнопки "на господинь"
$mBtnTip.addEventListener('click', e => {
  
  $mainDisplay.innerHTML = ''
	$mainDisplay.style.margin = '150px 0px 0px 80px'
  $body.style.backgroundImage = 'url(./img/gospudin.png)'
  $body.style.boxShadow = '1px 1px 10px 10px black'

  const $textCont = document.createElement('div')
  const $text = document.createElement('span')
	  $text.textContent = 'К-ть фіців: '
		$text.style.color = 'black'
		$text.style. fontFamily = 'open_sansitalic'

  const $input = document.createElement('input')
    $input.setAttribute('type', 'number')
		$input.style.outline = 'none'
		$input.style.width = '50px'
		$input.style.border = 'none'
		$input.style.borderBottom = '1px solid black'
		$input.style.backgroundColor = 'white'
		$input.style.color = 'black'
		$input.style.textAlign = 'center'
		$input.style.fontSize = '18px'
		$input.style.fontFamily = 'open_sansitalic'
  
  $textCont.append($text, $input)
  $mainDisplay.append($textCont)
  
  $input.addEventListener('blur', e => {
  
        let $total = document.createElement('p')
  
        const total = daysOfWeek[today] / $input.value
        
        $total.textContent = total.toFixed(2) + ' грн'
				$total.style.color = 'black' 
				$total.style.fontSize = '20px' 
				$total.style.fontSize = '20px'
        $total.style.paddingLeft = '50px' 
        $mainDisplay.append($total)
        $input.blur()
        
  $input.addEventListener('click', e=>{
    
		$input.value = ''
    $total.remove()
  })
  
})
})


// НА КІНЕЦЬ ДНЯ
const $mBtnCon = creatBtn()
$mBtnCon.textContent = 'На кінець дня'
$mBtnCon.classList.add('main-button')
//при натисненні кнопки "на кінець дня"
$mBtnCon.addEventListener('click', e=>{
  
$mainDisplay.innerHTML = ''
$mainDisplay.style.margin = '200px 0px 0px 80px'
$body.style.backgroundImage = 'url(./img/form.png)'


  const $textCont = document.createElement('div')
  
	const $text = document.createElement('span')
	$text.textContent = 'Твій ТО: '
	$text.style.color = 'white'

  const $input = document.createElement('input')
  $input.setAttribute('type', 'number')
  $input.style.outline = 'none'
  $input.style.width = '100px'
  $input.style.border = 'none'
  $input.style.borderBottom = '1px solid white'
  $input.style.backgroundColor = 'black'
	$input.style.color = 'white'
  $input.style.textAlign = 'center'
  $input.style.fontSize = '18px'
  
	const $textUah = document.createElement('span')
	$textUah.textContent = 'грн'
  $textUah.style.color = 'white'

  $textCont.append($text, $input, $textUah)
  $mainDisplay.append($textCont)
  
  $input.addEventListener('blur', e => {
    
//Результат розрахунку по процентах
    const totalToDeath = $input.value * (0.25/100)
    const totalToBar = $input.value * (0.5 /100)
    const totalToKitch = $input.value * (0.25/100)
    const totalToRun = $input.value * (0.1 /100)
    const totalToHost = $input.value * (0.05 /100)

		const sumReg = totalToDeath + totalToBar + totalToKitch
		const sumOff = sumReg + totalToRun + totalToHost
		
    
    
//Створення лінки Смерть русні з результатом
    const $anchorsCon = document.createElement('div')
    $anchorsCon.style.display = 'flex'
    $anchorsCon.style.flexDirection = 'column'
    $anchorsCon.style.gap = '10px'
		$anchorsCon.style.marginTop = '10px'

    const $linkConDeath = document.createElement('div')
    $linkConDeath.style.display = 'flex'
    $linkConDeath.style.gap = '10px'

    
    const $anchorToDeath = document.createElement('a')
      $anchorToDeath.setAttribute('href', 'https://send.monobank.ua/jar/83kMwShVbB')
      $anchorToDeath.setAttribute('target', '_blank')
      $anchorToDeath.textContent = 'Смерть русні'
			$anchorToDeath.style.color = 'white'
			$anchorToDeath.style.textDecoration= 'none'

      const $totalToDeath = document.createElement('span')
				$totalToDeath.textContent = totalToDeath.toFixed(2) + ' грн'
				$totalToDeath.style.color = 'white'

      
//Створення лінки БАР/КАСА з результатом 
    const $linkConBar = document.createElement('div')
    $linkConBar.style.display = 'flex'
    $linkConBar.style.gap = '10px'
    const $anchorToBar = document.createElement('a')
      $anchorToBar.setAttribute('href', 'https://send.monobank.ua/44tm2c3wn')
      $anchorToBar.setAttribute('target', '_blank')
      $anchorToBar.textContent = 'Бар/Каса'
			$anchorToBar.style.color = 'white'
			$anchorToBar.style.textDecoration= 'none'
      
      const $totalToBar = document.createElement('span')
				$totalToBar.textContent = totalToBar.toFixed(2) + ' грн'
				$totalToBar.style.color = 'white'

//Створення лінки КУХНЯ/КОНДИТЕРИ з результатом 
const $linkConKitch = document.createElement('div')
$linkConKitch.style.display = 'flex'
$linkConKitch.style.gap = '10px'
const $anchorToKitch = document.createElement('a')
  $anchorToKitch.setAttribute('href', 'https://send.monobank.ua/jar/A16UrC2X5w')
  $anchorToKitch.setAttribute('target', '_blank')
  $anchorToKitch.textContent = 'Кухня/Кондитери'
	$anchorToKitch.style.color = 'white'
	$anchorToKitch.style.textDecoration= 'none'
  
  const $totalToKitch = document.createElement('span')
		$totalToKitch.textContent = totalToKitch.toFixed(2) + ' грн'
		$totalToKitch.style.color = 'white'

  
//Створення лінки РАНЕРУ з результатом 
const $toggleCon = document.createElement('div')
$toggleCon.style.display = 'flex'
$toggleCon.style.flexDirection = 'column'
$toggleCon.style.gap = '10px'
$toggleCon.style.marginTop = '15px'
const $itemConRun = document.createElement('div')
$itemConRun.style.display = 'flex'
$itemConRun.style.gap = '10px'
const $itemToRun = document.createElement('span')

$itemToRun.textContent = 'Ранеру'
$itemToRun.style.color = 'white'

const $totalToRun = document.createElement('span')
$totalToRun.textContent = totalToRun.toFixed(2) + ' грн'
$totalToRun.style.color = 'white'

//Створення лінки Хостес з результатом 
const $itemConHost = document.createElement('div')
$itemConHost.style.display = 'flex'
$itemConHost.style.gap = '10px'
const $itemToHost = document.createElement('span')

$itemToHost.textContent = 'Хостес'
$itemToHost.style.color = 'white'

const $totalToHost = document.createElement('span')
$totalToHost.textContent = totalToHost.toFixed(2) + ' грн'
$totalToHost.style.color = 'white'

$toggleCon.style.display = 'none'

const $toggleBtnReg = document.createElement('button')
	$toggleBtnReg.textContent = '↓ Без Хостес/Ранера ↓'
  $toggleBtnReg.style.padding = '5px'
	$toggleBtnReg.style.marginTop = '10px'
	$toggleBtnReg.style.fontFamily = 'open_sansitalic'
	$toggleBtnReg.style.backgroundColor = 'black'
	$toggleBtnReg.style.color = 'white'
	$toggleBtnReg.style.border = '1px solid white'

const $toggleBtnOff = document.createElement('button')
	$toggleBtnOff.textContent = '↑ Із Хостес/Ранером ↑'
  $toggleBtnOff.style.padding = '5px'
	$toggleBtnOff.style.display = 'none'
	$toggleBtnOff.style.marginTop = '10px'
	$toggleBtnOff.style.fontFamily = 'open_sansitalic'
	$toggleBtnOff.style.backgroundColor = 'black'
	$toggleBtnOff.style.color = 'white'
	$toggleBtnOff.style.border = '1px solid white'



const $sumReg = document.createElement('p')
$sumReg.textContent = `Всього: ${sumReg.toFixed(2)} грн`
$sumReg.style.color = 'white'


const $sumOff = document.createElement('p')
$sumOff.textContent = `Всього: ${sumOff.toFixed(2)} грн`
$sumOff.style.color = 'white'
$sumOff.style.display = 'none'

$toggleBtnReg.addEventListener('click', e=>{
  $toggleCon.style.display = 'block'
  $toggleBtnReg.style.display = 'none'
  $toggleBtnOff.style.display = 'block'
	$sumReg.style.display = 'none'
	$sumOff.style.display = 'block'
})


$toggleBtnOff.addEventListener('click', e=>{
  $toggleCon.style.display = 'none'
  $toggleBtnReg.style.display = 'block'
  $toggleBtnOff.style.display = 'none'
	$sumReg.style.display = 'block'
	$sumOff.style.display = 'none'
})



//Рендер
$anchorsCon.append($linkConDeath, $linkConBar, $linkConKitch)

$linkConDeath.append($anchorToDeath, $totalToDeath)

$linkConBar.append($anchorToBar, $totalToBar)

$linkConKitch.append($anchorToKitch, $totalToKitch)

$toggleCon.append($itemConRun, $itemConHost)

$itemConRun.append($itemToRun, $totalToRun)

$itemConHost.append($itemToHost, $totalToHost)



$mainDisplay.append
($anchorsCon, $toggleCon, $toggleBtnReg, $toggleBtnOff, $sumReg, $sumOff)

    
    $input.blur()
    
$input.addEventListener('click', e=>{

$anchorsCon.remove()
$toggleCon.remove()
$toggleBtnReg.remove()
$toggleBtnOff.remove()
$sumReg.remove()
$sumOff.remove()
})

})

})
