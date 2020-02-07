(() => {
  console.log(`
    _______                                 __                                            __            _______   __  __  __                                                   
   /       \\                              /  |                                           /  |          /       \\ /  |/  |/  |                                                  
   $$$$$$$  | __    __  ________  ________ $$ |  ______    ______    ______    ______   _$$ |_         $$$$$$$  |$$/ $$ |$$ |  ______    ______    ______    ______    _______ 
   $$ |__$$ |/  |  /  |/        |/        |$$ | /      \\  /      \\  /      \\ /       \\ / $$   |        $$ |__$$ |/  |$$ |$$ | /      \\  /      \\  /      \\  /      \\  /       |
   $$    $$/ $$ |  $$ |$$$$$$$$/ $$$$$$$$/ $$ |/$$$$$$  |/$$$$$$  | $$$$$$  |/$$$$$$  |$$$$$$/         $$    $$/ $$ |$$ |$$ | $$$$$$  |/$$$$$$  |/$$$$$$  |/$$$$$$  |/$$$$$$$/ 
   $$$$$$$/  $$ |  $$ |  /  $$/    /  $$/  $$ |$$    $$ |$$ |  $$ | /    $$ |$$ |  $$/   $$ | __       $$$$$$$/  $$ |$$ |$$ | /    $$ |$$ |  $$ |$$    $$ |$$ |  $$/ $$      \ 
   $$ |      $$ \\__$$ | /$$$$/__  /$$$$/__ $$ |$$$$$$$$/ $$ |__$$ |/$$$$$$$ |$$ |        $$ |/  |      $$ |      $$ |$$ |$$ |/$$$$$$$ |$$ \__$$ |$$$$$$$$/ $$ |       $$$$$$  |
   $$ |      $$    $$/ /$$      |/$$      |$$ |$$       |$$    $$/ $$    $$ |$$ |        $$  $$/       $$ |      $$ |$$ |$$ |$$    $$ |$$    $$ |$$       |$$ |      /     $$/ 
   $$/        $$$$$$/  $$$$$$$$/ $$$$$$$$/ $$/  $$$$$$$/ $$$$$$$/   $$$$$$$/ $$/          $$$$/        $$/       $$/ $$/ $$/  $$$$$$$/  $$$$$$$ | $$$$$$$/ $$/       $$$$$$$/  
                                                         $$ |                                                                          /  \\__$$ |                              
                                                         $$ |                                                                          $$    $$/                               
                                                         $$/                                                                            $$$$$$/                                
   `)
})()

async function getTable(tableName) {
  return fetch(`http://api.pillagers.no/api/get/${tableName}`).then(res => res.json().then(users => users))
}

async function renderThrallTable(id) {
  let users = await getTable("Units")
  let container = document.getElementById(id);
  if (container) { console.log(`found container ${container}`) }
  if (!users) {
    console.error("no users, sorry")
    return
  }
  let tbl = document.createElement("table")
  let fields = [
    { key: "FirstName", value: "First name" },
    { key: "LastName", "value": "Last name" },
    { key: "Level", value: "Level" },
    { key: "Rank", value: "Rank" },
    { key: "XP", value: "XP" },
    { key: "Dead", value: "Dead" }]
  fields.forEach(h => {
    let th = document.createElement("th"); th.innerText = h.value
    tbl.appendChild(th)
  })
  users.forEach(u => {
    let tr = document.createElement("tr")
    fields.forEach(f => {
      let td = document.createElement("td");
      if (u[f.key]) {
        td.innerText = u[f.key]["_"]
      }
      tr.appendChild(td)
    })
    tbl.appendChild(tr)
    container.appendChild(tbl)
  });
}

async function renderKingTable(id) {
  let kings = await getTable("Kings")
  let container = document.getElementById(id)
  let tbl = document.createElement("table")
  let fields = [
    { key: "FirstName", value: "First name" },
    { key: "LastName", "value": "Last name" },
    { key: "Penning", value: "Penning" },
    { key: "XPGain", value: "XPGain" },
    { key: "lat", value: "lat" },
    { key: "lon", value: "lon" }]
  fields.forEach(h => {
    let th = document.createElement("th"); th.innerText = h.value
    tbl.appendChild(th)
  })
  kings.forEach(u => {
    let tr = document.createElement("tr")
    fields.forEach(f => {
      let td = document.createElement("td");
      if (u[f.key]) {
        td.innerText = u[f.key]["_"]
      }
      tr.appendChild(td)
    })
    tbl.appendChild(tr)
    container.appendChild(tbl)
  });

}


async function submitForm(event) {
  var formEmailValue = event.target.elements.emailValue.value;
  var formDisplayNameValue = event.target.elements.userNameValue.value;

  bodyString = JSON.stringify({ email: formEmailValue, displayname: formDisplayNameValue })

  await fetch(`https://prod-86.westeurope.logic.azure.com:443/workflows/1e05bc32554344fc9c4a184579c0ce79/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FFgFQoXn4DErW0bBk7l_nsUcROCK61mDehEuEwN_vyU`, {
    method: "POST",
    body: bodyString,
  }).then(d => d.text().then(f => f))
};


$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
    label = $this.prev('label');

  if (e.type === 'keyup') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.addClass('active highlight');
    }
  } else if (e.type === 'blur') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.removeClass('highlight');
    }
  } else if (e.type === 'focus') {

    if ($this.val() === '') {
      label.removeClass('highlight');
    }
    else if ($this.val() !== '') {
      label.addClass('highlight');
    }
  }

});

$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});