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

function generateVikingName(type) {
  let name = "";
  let nm1 = ["Åsmund", "Æinridi", "Æirik", "Ærinmund", "Ærnmund", "Æsbiorn", "Æskil", "Ævar", "Øpir", "Øybiorn", "Øystæin", "Øysten", "Abi", "Adils", "Agmundr", "Agnar", "Aki", "Aleifr", "Alf", "Alfarin", "Alfgeir", "Alfketill", "Ali", "Alrik", "Alvi", "Amundi", "An", "Anakol", "Andvett", "Anlaf", "Anund", "Arfast", "Ari", "Arinbjorn", "Armod", "Arn", "Arnbjorn", "Arnfinn", "Arngeir", "Arngrim", "Arni", "Arnkel", "Arnketill", "Arnlaug", "Arnljot", "Arnor", "Arnstein", "Arnthor", "Arnulfr", "Arnvid", "Aron", "Asbjorn", "Asbrand", "Asfrith", "Asgaut", "Asgeir", "Asgrim", "Askel", "Asketill", "Aslak", "Asmund", "Assur", "Asulf", "Asvald", "Asvard", "Athils", "Atli", "Atsurr", "Auðunar", "Audbjorn", "Audgisil", "Audgisli", "Audolf", "Audun", "Austmathr", "Authgrim", "Authketill", "Authulf", "Authun", "Auti", "Balki", "Balli", "Banki", "Bard", "Bardi", "Baug", "Beigarth", "Beiner", "Beinir", "Berg", "Bergfinn", "Bergthor", "Bergvid", "Bersi", "Bior", "Biorn", "Birning", "Bjalfi", "Bjalki", "Bjarki", "Bjarni", "Bjartmar", "Bjor", "Bjorgolf", "Bjorgulf", "Bjorn", "Bjornulf", "Blæng", "Blann", "Bodalf", "Bodvar", "Boe", "Bolli", "Bolverk", "Borgar", "Bork", "Borstig", "Bothvar", "Botulf", "Bræsi", "Bragi", "Bram", "Brand", "Bretakollr", "Broddi", "Brodir", "Brondulf", "Bruni", "Brusi", "Bui", "Byrnjolf", "Cnut", "Dag", "Dagfinn", "Dan", "Diarf", "Dunfjall", "Dyri", "Edgar", "Egil", "Eid", "Eilif", "Einar", "Eindridi", "Eirik", "Eldgrim", "Elgfrothi", "Engli", "Erlend", "Erling", "Ernmund", "Erp", "Eskil", "Eydis", "Eyjolf", "Eystein", "Eyvald", "Eyvind", "Fargrim", "Farmann", "Farthegn", "Fastulf", "Finn", "Finnleik", "Finnvid", "Firthgest", "Floki", "Flosi", "Folkbiorn", "Folkmar", "Forni", "Frømund", "Freystein", "Fridgeir", "Fridmund", "Frodi", "Frostulf", "Frothi", "Gæda", "Gæira", "Gæirmund", "Gærhialm", "Gærrar", "Gætir", "Galti", "Gamal", "Gamli", "Gardar", "Gardi", "Gauk", "Gaut", "Gauti", "Gavtvid", "Geir", "Geirfinn", "Geirleif", "Geirmund", "Geirolf", "Geirstein", "Geirthjof", "Geitir", "Geitirgest", "Gellir", "Geri", "Gest", "Giermund", "Gilli", "Gils", "Gisli", "Gizor", "Gizur", "Glam", "Glum", "Gnupa", "Gnupi", "Gorm", "Grani", "Gretter", "Grettir", "Grim", "Grimar", "Grimkel", "Grimolf", "Grimwald", "Grind", "Griotgard", "Gris", "Grith", "Grjotgard", "Guda", "Gudbrand", "Gudlaug", "Gudleif", "Gudmund", "Gudrik", "Gudrod", "Gudvær", "Gufi", "Gulli", "Gunbjorn", "Gunnald", "Gunnar", "Gunnbjorn", "Gunnhautr", "Gunni", "Gunnkel", "Gunnlæif", "Gunnlaug", "Gunnleif", "Gunnstein", "Gunnulf", "Gunnvid", "Guthhere", "Guthorm", "Guthroth", "Guthrum", "Gylfi", "Gyrd", "Häming", "Hæfnir", "Hælæif", "Hælgi", "Hæming", "Hæng", "Hadd", "Haf", "Hafgrim", "Haflidi", "Hafr", "Hagi", "Haki", "Haklang", "Hakon", "Halfdan", "Halftan", "Hall", "Hallad", "Hallbjorn", "Halldor", "Hallfred", "Hallfrid", "Hallgrim", "Halli", "Hallkel", "Hallmund", "Hallstein", "Hallvard", "Halvdan", "Ham", "Hamund", "Hanef", "Harald", "Hardbein", "Hardrefil", "Harek", "Hastein", "Hauk", "Havard", "Hedin", "Hegg", "Helgi", "Heming", "Heriolf", "Herjolf", "Herlaug", "Herlu", "Hermund", "Herstein", "Hialti", "Hildiglum", "Hildir", "Hiorvard", "Hjalkar", "Hjalti", "Hjarrandi", "Hjor", "Hjorleif", "Hjort", "Hjorvarth", "Hlenni", "Hlodvir", "Hogni", "Holmfast", "Holmgavt", "Holmgeir", "Holmstæin", "Holmstein", "Hord", "Hoskuld", "Hosvir", "Hott", "Hrærek", "Hrafn", "Hrafnkel", "Hrafnvartr", "Hragnelf", "Hranfast", "Hrani", "Hrapp", "Hreida", "Hreidar", "Hrein", "Hreitharr", "Hrifla", "Hring", "Hroald", "Hroar", "Hrodgæir", "Hrodgeir", "Hrodi", "Hrok", "Hrolf", "Hrollaug", "Hromund", "Hrossbjorn", "Hrosskel", "Hrosskell", "Hrossketil", "Hrut", "Hunbogi", "Hundi", "Hundolfr", "Hvitserk", "Iarl", "Iarlabanki", "Iarund", "Illugi", "Ingemar", "Ingi", "Ingibjorg", "Ingifast", "Ingimar", "Ingimund", "Ingjald", "Ingolf", "Ingulbjörn", "Ingvar", "Iogæir", "Ioketill", "Iorthr", "Iorund", "Irenmund", "Iri", "Iric", "Isgaut", "Isi", "Isleif", "Isulf", "Iuli", "Ivar", "Jarlabanki", "Jarlebanke", "Jarnskeggi", "Jobjorn", "Johan", "Jokul", "Jomar", "Jon", "Jorund", "Käre", "Kætiløy", "Kætil", "Kætilfast", "Kætilmund", "Kabbi", "Kadal", "Kalf", "Kar", "Kari", "Karl", "Karli", "Karsi", "Kaupmann", "Ketil", "Ketilbiorn", "Ketilbjorn", "Ketill", "Kisping", "Kjallak", "Kjartan", "Kjotvi", "Klakkr", "Knútr", "Knut", "Kodran", "Koigrim", "Kol", "Kolbein", "Kolfinn", "Koll", "Kollskegg", "Kollsvein", "Kolskegg", "Konal", "Kori", "Kormak", "Kotkel", "Kotkell", "Kraki", "Kveldulf", "Lambi", "Leidolf", "Leif", "Leiknir", "Lifolf", "Lifstæn", "Lini", "Liut", "Ljot", "Lodin", "Lodmund", "Lopt", "Ludin", "Lyting", "Magnus", "Mak", "Manni", "Mar", "Meldun", "Modolf", "Moldof", "Mord", "Mursi", "Nærfi", "Naddod", "Nafni", "Nasi", "Nefstein", "Nikolas", "Njal", "Northri", "Odd", "Oddløg", "Oddleif", "Odinkar", "Ofeig", "Ofieg", "Ogmund", "Olæ", "Olæif", "Olaf", "Oleif", "Olvir", "Onäm", "Ondott", "Onem", "Ongul", "Onund", "Orøkia", "Orest", "Orgumleidi", "Orlyg", "Orm", "Orn", "Ornolf", "Ornulf", "Orri", "Orrin", "Ospak", "Osvald", "Osvif", "Oswald", "Otkel", "Otrygg", "Ottar", "Oystæin", "Ozur", "Paul", "Ragi", "Ragnar", "Ragnfast", "Ragnvald", "Raudebjorn", "Ref", "Regin", "Reinn", "Rodmar", "Rognvald", "Runolf", "Sæbbi", "Sæmund", "Sævil", "Saksi", "Sam", "Saxi", "Selkollr", "Serk", "Sibbi", "Sigbjorn", "Sigbrand", "Sigebeorht", "Sigeferth", "Sigegar", "Sigeheah", "Sigehelm", "Sigehere", "Sigelac", "Sigemær", "Sigemund", "Sigenoth", "Sigeræd", "Sigeric", "Sigestæl", "Sigeweard", "Sigewine", "Sigewulf", "Sigfast", "Sigfus", "Sigguatr", "Sighadd", "Sighvat", "Sigmund", "Sigtrygg", "Sigurd", "Sigvaldi", "Sigvat", "Sigvid", "Sinfiotli", "Singasven", "Skœdir", "Skallagrim", "Skamkel", "Skap", "Skapti", "Skard", "Skardi", "Skarf", "Skegg", "Skeggi", "Skialg", "Skidi", "Skjaldulf", "Skjold", "Skopti", "Skorri", "Skuf", "Skuld", "Skuli", "Skurfa", "Skuti", "Slode", "Slodi", "Slothi", "Snæbjorn", "Snækol", "Snorri", "Sod", "Sokkolf", "Solmund", "Solvi", "Sorli", "Spiallbudi", "Spiut", "Spjut", "Stækar", "Starkad", "Starolf", "Starri", "Stein", "Steinar", "Steinbitr", "Steinbjorn", "Steingrim", "Steinkel", "Steinketill", "Steinmod", "Steinolf", "Steinthor", "Steinunn", "Stigandi", "Storolf", "Stuf", "Sturla", "Styr", "Styrbiorn", "Styrkar", "Styrkollr", "Styrmir", "Suit", "Sumarlid", "Sumarlidi", "Surt", "Svæin", "Svafar", "Svalfi", "Svan", "Svart", "Svartbrand", "Svartgeirr", "Svartkollr", "Svartlingr", "Svein", "Sveinbjorn", "Sven", "Sveni", "Sverting", "Svinulf", "Svipday", "Swein", "Teit", "Thangbrand", "Thialfi", "Thidrandi", "Thidrik", "Thiodolf", "Thjodofl", "Thjodoft", "Thjostolf", "Thokodolf", "Thometill", "Thorald", "Thoraldr", "Thorarin", "Thorberg", "Thorbjorn", "Thorbrand", "Thord", "Thorfast", "Thorfinn", "Thorfrethr", "Thorgaut", "Thorgeir", "Thorgest", "Thorgils", "Thorgrim", "Thorhall", "Thorir", "Thorkel", "Thorkell", "Thorketil", "Thorlak", "Thorleif", "Thorleik", "Thormar", "Thormod", "Thormothr", "Thoroard", "Thorod", "Thorodd", "Thorolf", "Thororm", "Thorred", "Thorstar", "Thorstein", "Thorvald", "Thorvard", "Thorvid", "Thrain", "Thrand", "Throst", "Tjorvi", "Tofi", "Toki", "Tola", "Tore", "Torfi", "Torrad", "Torsten", "Tosti", "Trandil", "Trud", "Trygg", "Tryggvi", "Tufi", "Tumi", "Tyrfing", "Tyrkir", "Ubbein", "Ufi", "Uglubathr", "Ulf", "Ulfar", "Ulfbjorn", "Ulfgrim", "Ulfketil", "Ulfljot", "Ulfrik", "Ulvkil", "Uni", "Unn", "Unnulf", "Värmod", "Valbrand", "Valgard", "Vali", "Valthjof", "Vandil", "Vandrad", "Var", "Varin", "Vathlauss", "Vebjorn", "Vebrand", "Vegeir", "Vekel", "Veleif", "Vermund", "Vertlithi", "Vestar", "Vestein", "Vestgeir", "Veturlidi", "Vidkunn", "Vifil", "Vigbjord", "Vigfus", "Vigi", "Vigot", "Vikar", "Visäte", "Vog", "Vott", "Waltheof", "Wary", "Wealglist", "Wengo", "Yngvar", "Ysoppa"];
  let nm2 = ["Åsmundsson", "Æinridisson", "Æiriksson", "Ærinmundsson", "Ærnmundsson", "Æsbiornsson", "Æskilsson", "Ævarsson", "Øpirsson", "Øybiornsson", "Øystæinsson", "Øystensson", "Abisson", "Adilsson", "Agmundrsson", "Agnarsson", "Akisson", "Aleifrsson", "Alfsson", "Alfarinsson", "Alfgeirsson", "Alfketillsson", "Alisson", "Alriksson", "Alvisson", "Amundisson", "Ansson", "Anakolsson", "Andvettsson", "Anlafsson", "Anundsson", "Arfastsson", "Arisson", "Arinbjornsson", "Armodsson", "Arnsson", "Arnbjornsson", "Arnfinnsson", "Arngeirsson", "Arngrimsson", "Arnisson", "Arnkelsson", "Arnketillsson", "Arnlaugsson", "Arnljotsson", "Arnorsson", "Arnsteinsson", "Arnthorsson", "Arnulfrsson", "Arnvidsson", "Aronsson", "Asbjornsson", "Asbrandsson", "Asfrithsson", "Asgautsson", "Asgeirsson", "Asgrimsson", "Askelsson", "Asketillsson", "Aslaksson", "Asmundsson", "Assursson", "Asulfsson", "Asvaldsson", "Asvardsson", "Athilsson", "Atlisson", "Atsurrsson", "Auðunarsson", "Audbjornsson", "Audgisilsson", "Audgislisson", "Audolfsson", "Audunsson", "Austmathrsson", "Authgrimsson", "Authketillsson", "Authulfsson", "Authunsson", "Autisson", "Balkisson", "Ballisson", "Bankisson", "Bardsson", "Bardisson", "Baugsson", "Beigarthsson", "Beinersson", "Beinirsson", "Bergsson", "Bergfinnsson", "Bergthorsson", "Bergvidsson", "Bersisson", "Biorsson", "Biornsson", "Birningsson", "Bjalfisson", "Bjalkisson", "Bjarkisson", "Bjarnisson", "Bjartmarsson", "Bjorsson", "Bjorgolfsson", "Bjorgulfsson", "Bjornsson", "Bjornulfsson", "Blængsson", "Blannsson", "Bodalfsson", "Bodvarsson", "Boesson", "Bollisson", "Bolverksson", "Borgarsson", "Borksson", "Borstigsson", "Bothvarsson", "Botulfsson", "Bræsisson", "Bragisson", "Bramsson", "Brandsson", "Bretakollrsson", "Brodd-Helgisson", "Broddisson", "Brodirsson", "Brondulfsson", "Brunisson", "Brusisson", "Buisson", "Byrnjolfsson", "Cnutsson", "Dagsson", "Dagfinnsson", "Dansson", "Diarfsson", "Dunfjallsson", "Dyrisson", "Edgarsson", "Egilsson", "Eidsson", "Eilifsson", "Einarsson", "Eindridisson", "Eiriksson", "Eldgrimsson", "Elgfrothisson", "Englisson", "Erlendsson", "Erlingsson", "Ernmundsson", "Erpsson", "Eskilsson", "Eydisson", "Eyjolfsson", "Eysteinsson", "Eyvaldsson", "Eyvindsson", "Fargrimsson", "Farmannsson", "Farthegnsson", "Fastulfsson", "Finnsson", "Finnleiksson", "Finnvidsson", "Firthgestsson", "Flokisson", "Flosisson", "Folkbiornsson", "Folkmarsson", "Fornisson", "Frømundsson", "Freysteinsson", "Fridgeirsson", "Fridmundsson", "Frodisson", "Frostulfsson", "Frothisson", "Gædasson", "Gæirasson", "Gæirmundsson", "Gærhialmsson", "Gærrarsson", "Gætirsson", "Galtisson", "Gamalsson", "Gamlisson", "Gardarsson", "Gardisson", "Gauksson", "Gautsson", "Gautisson", "Gavtvidsson", "Geirsson", "Geirfinnsson", "Geirleifsson", "Geirmundsson", "Geirolfsson", "Geirsteinsson", "Geirthjofsson", "Geitirsson", "Geitirgestsson", "Gellirsson", "Gerisson", "Gestsson", "Giermundsson", "Gillisson", "Gilsson", "Gislisson", "Gizorsson", "Gizursson", "Glamsson", "Glumsson", "Gnupasson", "Gnupisson", "Gormsson", "Granisson", "Grettersson", "Grettirsson", "Grimsson", "Grimarsson", "Grimkelsson", "Grimolfsson", "Grimwaldsson", "Grindsson", "Griotgardsson", "Grisson", "Grithsson", "Grjotgardsson", "Gudasson", "Gudbrandsson", "Gudlaugsson", "Gudleifsson", "Gudmundsson", "Gudriksson", "Gudrodsson", "Gudværsson", "Gufisson", "Gullisson", "Gunbjornsson", "Gunnaldsson", "Gunnarsson", "Gunnbjornsson", "Gunnhautrsson", "Gunnisson", "Gunnkelsson", "Gunnlæifsson", "Gunnlaugsson", "Gunnleifsson", "Gunnsteinsson", "Gunnulfsson", "Gunnvidsson", "Guthheresson", "Guthormsson", "Guthrothsson", "Guthrumsson", "Gylfisson", "Gyrdsson", "Hämingsson", "Hæfnirsson", "Hælæifsson", "Hælgisson", "Hæmingsson", "Hængsson", "Haddsson", "Hafsson", "Hafgrimsson", "Haflidisson", "Hafrsson", "Hagisson", "Hakisson", "Haklangsson", "Hakonsson", "Halfdansson", "Halftansson", "Hallsson", "Halladsson", "Hallbjornsson", "Halldorsson", "Hallfredsson", "Hallfridsson", "Hallgrimsson", "Hallisson", "Hallkelsson", "Hallmundsson", "Hallsteinsson", "Hallvardsson", "Halvdansson", "Hamsson", "Hamundsson", "Hanefsson", "Haraldsson", "Hardbeinsson", "Hardrefilsson", "Hareksson", "Hasteinsson", "Hauksson", "Havardsson", "Hedinsson", "Heggsson", "Helgisson", "Hemingsson", "Heriolfsson", "Herjolfsson", "Herlaugsson", "Herlusson", "Hermundsson", "Hersteinsson", "Hialtisson", "Hildiglumsson", "Hildirsson", "Hiorvardsson", "Hjalkarsson", "Hjaltisson", "Hjarrandisson", "Hjorsson", "Hjorleifsson", "Hjortsson", "Hjorvarthsson", "Hlennisson", "Hlodvirsson", "Hognisson", "Holmfastsson", "Holmgavtsson", "Holmgeirsson", "Holmstæinsson", "Holmsteinsson", "Hordsson", "Hoskuldsson", "Hosvirsson", "Hottsson", "Hræreksson", "Hrafnsson", "Hrafnkelsson", "Hrafnvartrsson", "Hragnelfsson", "Hranfastsson", "Hranisson", "Hrappsson", "Hreidasson", "Hreidarsson", "Hreinsson", "Hreitharrsson", "Hriflasson", "Hringsson", "Hroaldsson", "Hroarsson", "Hrodgæirsson", "Hrodgeirsson", "Hrodisson", "Hroksson", "Hrolfsson", "Hrollaugsson", "Hromundsson", "Hrossbjornsson", "Hrosskelsson", "Hrosskellsson", "Hrossketilsson", "Hrutsson", "Hunbogisson", "Hundisson", "Hundolfrsson", "Hvitserksson", "Iarlsson", "Iarlabankisson", "Iarundsson", "Illugisson", "Ingemarsson", "Ingisson", "Ingibjorgsson", "Ingifastsson", "Ingimarsson", "Ingimundsson", "Ingjaldsson", "Ingolfsson", "Ingulbjörnsson", "Ingvarsson", "Iogæirsson", "Ioketillsson", "Iorthrsson", "Iorundsson", "Irenmundsson", "Irisson", "Iricsson", "Isgautsson", "Isisson", "Isleifsson", "Isulfsson", "Iulisson", "Ivarsson", "Jarlabankisson", "Jarlebankesson", "Jarnskeggisson", "Jobjornsson", "Johansson", "Jokulsson", "Jomarsson", "Jonsson", "Jorundsson", "Käresson", "Kætiløysson", "Kætilsson", "Kætilfastsson", "Kætilmundsson", "Kabbisson", "Kadalsson", "Kalfsson", "Karsson", "Karisson", "Karlsson", "Karlisson", "Karsisson", "Kaupmannsson", "Ketilsson", "Ketilbiornsson", "Ketilbjornsson", "Ketillsson", "Kispingsson", "Kjallaksson", "Kjartansson", "Kjotvisson", "Klakkrsson", "Knútrsson", "Knutsson", "Kodransson", "Koigrimsson", "Kolsson", "Kolbeinsson", "Kolfinnsson", "Kollsson", "Kollskeggsson", "Kollsveinsson", "Kolskeggsson", "Konalsson", "Korisson", "Kormaksson", "Kotkelsson", "Kotkellsson", "Krakisson", "Kveldulfsson", "Lambisson", "Leidolfsson", "Leifsson", "Leiknirsson", "Lifolfsson", "Lifstænsson", "Linisson", "Liutsson", "Ljotsson", "Lodinsson", "Lodmundsson", "Loptsson", "Ludinsson", "Lytingsson", "Magnusson", "Maksson", "Mannisson", "Marsson", "Meldunsson", "Modolfsson", "Moldofsson", "Mordsson", "Mursisson", "Nærfisson", "Naddodsson", "Nafnisson", "Nasisson", "Nefsteinsson", "Nikolasson", "Njalsson", "Northrisson", "Oddsson", "Oddløgsson", "Oddleifsson", "Odinkarsson", "Ofeigsson", "Ofiegsson", "Ogmundsson", "Olæsson", "Olæifsson", "Olafsson", "Oleifsson", "Olvirsson", "Onämsson", "Ondottsson", "Onemsson", "Ongulsson", "Onundsson", "Orøkiasson", "Orestsson", "Orgumleidisson", "Orlygsson", "Ormsson", "Ornsson", "Ornolfsson", "Ornulfsson", "Orrisson", "Orrinsson", "Ospaksson", "Osvaldsson", "Osvifsson", "Oswaldsson", "Otkelsson", "Otryggsson", "Ottarsson", "Oystæinsson", "Ozursson", "Paulsson", "Ragisson", "Ragnarsson", "Ragnfastsson", "Ragnvaldsson", "Raudebjornsson", "Refsson", "Reginsson", "Reinnsson", "Rodmarsson", "Rognvaldsson", "Runolfsson", "Sæbbisson", "Sæmundsson", "Sævilsson", "Saksisson", "Samsson", "Saxisson", "Selkollrsson", "Serksson", "Sibbisson", "Sigbjornsson", "Sigbrandsson", "Sigebeorhtsson", "Sigeferthsson", "Sigegarsson", "Sigeheahsson", "Sigehelmsson", "Sigeheresson", "Sigelacsson", "Sigemærsson", "Sigemundsson", "Sigenothsson", "Sigerædsson", "Sigericsson", "Sigestælsson", "Sigeweardsson", "Sigewinesson", "Sigewulfsson", "Sigfastsson", "Sigfusson", "Sigguatrsson", "Sighaddsson", "Sighvatsson", "Sigmundsson", "Sigtryggsson", "Sigurdsson", "Sigvaldisson", "Sigvatsson", "Sigvidsson", "Sinfiotlisson", "Singasvensson", "Skœdirsson", "Skallagrimsson", "Skamkelsson", "Skapsson", "Skaptisson", "Skardsson", "Skardisson", "Skarfsson", "Skeggsson", "Skeggisson", "Skialgsson", "Skidisson", "Skjaldulfsson", "Skjoldsson", "Skoptisson", "Skorrisson", "Skufsson", "Skuldsson", "Skulisson", "Skurfasson", "Skutisson", "Slodesson", "Slodisson", "Slothisson", "Snæ-Ulfsson", "Snæbjornsson", "Snækolsson", "Snorrisson", "Sodsson", "Sokkolfsson", "Solmundsson", "Solvisson", "Sorlisson", "Spiallbudisson", "Spiutsson", "Spjutsson", "Stækarsson", "Starkadsson", "Starolfsson", "Starrisson", "Steinsson", "Steinarsson", "Steinbitrsson", "Steinbjornsson", "Steingrimsson", "Steinkelsson", "Steinketillsson", "Steinmodsson", "Steinolfsson", "Steinthorsson", "Steinunnsson", "Stigandisson", "Storolfsson", "Stufsson", "Sturlasson", "Styrsson", "Styrbiornsson", "Styrkarsson", "Styrkollrsson", "Styrmirsson", "Suitsson", "Sumarlidsson", "Sumarlidisson", "Surtsson", "Svæinsson", "Svafarsson", "Svalfisson", "Svansson", "Svartsson", "Svartbrandsson", "Svartgeirrsson", "Svartkollrsson", "Svartlingrsson", "Sveinsson", "Sveinbjornsson", "Svensson", "Svenisson", "Svertingsson", "Svinulfsson", "Svipdaysson", "Sweinsson", "Teitsson", "Thangbrandsson", "Thialfisson", "Thidrandisson", "Thidriksson", "Thiodolfsson", "Thjodoflsson", "Thjodoftsson", "Thjostolfsson", "Thokodolfsson", "Thometillsson", "Thoraldsson", "Thoraldrsson", "Thorarinsson", "Thorbergsson", "Thorbjornsson", "Thorbrandsson", "Thordsson", "Thorfastsson", "Thorfinnsson", "Thorfrethrsson", "Thorgautsson", "Thorgeirsson", "Thorgestsson", "Thorgilsson", "Thorgrimsson", "Thorhallsson", "Thorirsson", "Thorkelsson", "Thorkellsson", "Thorketilsson", "Thorlaksson", "Thorleifsson", "Thorleiksson", "Thormarsson", "Thormodsson", "Thormothrsson", "Thoroardsson", "Thorodsson", "Thoroddsson", "Thorolfsson", "Thorormsson", "Thorredsson", "Thorstarsson", "Thorsteinsson", "Thorvaldsson", "Thorvardsson", "Thorvidsson", "Thrainsson", "Thrandsson", "Throstsson", "Tjorvisson", "Tofisson", "Tokisson", "Tolasson", "Toresson", "Torfisson", "Torradsson", "Torstensson", "Tostisson", "Trandilsson", "Trudsson", "Tryggsson", "Tryggvisson", "Tufisson", "Tumisson", "Tyrfingsson", "Tyrkirsson", "Ubbeinsson", "Ufisson", "Uglubathrsson", "Ulfsson", "Ulfarsson", "Ulfbjornsson", "Ulfgrimsson", "Ulfketilsson", "Ulfljotsson", "Ulfriksson", "Ulvkilsson", "Unisson", "Unnsson", "Unnulfsson", "Värmodsson", "Valbrandsson", "Valgardsson", "Valisson", "Valthjofsson", "Vandilsson", "Vandradsson", "Varsson", "Varinsson", "Vathlaussson", "Vebjornsson", "Vebrandsson", "Vegeirsson", "Vekelsson", "Veleifsson", "Vermundsson", "Vertlithisson", "Vestarsson", "Vesteinsson", "Vestgeirsson", "Veturlidisson", "Vidkunnsson", "Vifilsson", "Vigbjordsson", "Vigfusson", "Vigisson", "Vigotsson", "Vikarsson", "Visätesson", "Vogsson", "Vottsson", "Waltheofsson", "Warysson", "Wealglistsson", "Wengosson", "Yngvarsson", "Ysoppasson"];
  let nm3 = ["Æsa", "Æstrid", "Þuriðr", "Abi", "Aldis", "Alfdis", "Alfeid", "Alof", "Armod", "Arnbjorg", "Arngunn", "Arnkatla", "Arnora", "Arnthrud", "Asa", "Asdis", "Asfrid", "Asgard", "Asgerd", "Ashild", "Aslaug", "Asleif", "Asny", "Asta", "Astrid", "Asvor", "Aud", "Audbjorg", "Audhild", "Bera", "Bergljot", "Bergthora", "Bjartney", "Bjorg", "Bolla", "Bothild", "Brynhild", "Dalla", "Dotta", "Drifa", "Droplaug", "Ermingard", "Estrid", "Fastvi", "Freydis", "Freygerd", "Frida", "Frideburg", "Fridgerd", "Gæierlaug", "Geirhild", "Geirlaug", "Geirny", "Gerd", "Gerrid", "Gillaug", "Ginnlaug", "Gjaflaug", "Gorm", "Greiland", "Grelod", "Grima", "Grimhild", "Gro", "Groa", "Guðný", "Gudbjorg", "Gudfinna", "Gudfrid", "Gudlang", "Gudney", "Gudny", "Gudrid", "Gudrun", "Gunnhild", "Gunnvor", "Gyda", "Gyrd", "Gyrid", "Halla", "Hallbera", "Hallberta", "Halldis", "Halldora", "Hallfrid", "Hallgerd", "Hallgrim", "Hallkatla", "Hallveig", "Hedinfrid", "Heith", "Helga", "Herbjorg", "Herdis", "Herkja", "Hervor", "Hild", "Hilde", "Hildigunn", "Hildirid", "Hlif", "Holmfrid", "Holmlaug", "Hrafnhild", "Hrefna", "Hrodny", "Hungerd", "Inga", "Ingegärd", "Ingeltore", "Ingibjorg", "Ingigerd", "Ingirid", "Ingirun", "Ingithora", "Ingrid", "Ingulfrid", "Ingun", "Ingunn", "Isgerd", "Jaddvor", "Jarngerd", "Jodis", "Jofrid", "Joreid", "Jorunn", "Kadlin", "Katla", "Ketiloy", "Ljot", "Ljufa", "Ljufu", "Luta", "Mœid", "Maria", "Matilda", "Melkorka", "Nidbiorg", "Nidbjorg", "Oddbjorg", "Oddny", "Odindis", "Ogn", "Olof", "Ormhild", "Osk", "Ottkatla", "Rafarta", "Raghild", "Ragna", "Ragneid", "Ragnfrid", "Ragnhild", "Rannveig", "Ranveig", "Reginleif", "Runa", "Sæunn", "Salbjorg", "Sibbe", "Signy", "Sigrid", "Sigrunn", "Sigvor", "Siv", "Skuld", "Skur", "Solveig", "Solvor", "Steinunn", "Steinvor", "Styrlaug", "Svala", "Svanhild", "Svanlaug", "Thjodhild", "Thkatla", "Thora", "Thorballa", "Thorbjorg", "Thordis", "Thorelf", "Thorfinna", "Thorfrid", "Thorfrithr", "Thorgærd", "Thorgerd", "Thorgrima", "Thorgunna", "Thorhalla", "Thorhild", "Thorkatla", "Thorlaug", "Thorljot", "Thorunn", "Thorve", "Thorvor", "Thraslaug", "Thurid", "Thyre", "Thyri", "Tofa", "Tola", "Tonna", "Torgärd", "Torhild", "Torunn", "Turid", "Ulfeid", "Ulfheid", "Una", "Unn", "Valborg", "Valgerd", "Vandrad", "Vigdis", "Yngvild", "Yri", "Yrsa"];
  let nm4 = ["Åsmundottir", "Æinrididottir", "Æirikdottir", "Ærinmundottir", "Ærnmundottir", "Æsbiorndottir", "Æskildottir", "Ævardottir", "Øpirdottir", "Øybiorndottir", "Øystæindottir", "Øystendottir", "Abidottir", "Adilsdottir", "Agmundrdottir", "Agnardottir", "Akidottir", "Aleifrdottir", "Alfdottir", "Alfarindottir", "Alfgeirdottir", "Alfketilldottir", "Alidottir", "Alrikdottir", "Alvidottir", "Amundidottir", "Andottir", "Anakoldottir", "Andvettdottir", "Anlafdottir", "Anundottir", "Arfastdottir", "Aridottir", "Arinbjorndottir", "Armodottir", "Arndottir", "Arnbjorndottir", "Arnfinndottir", "Arngeirdottir", "Arngrimdottir", "Arnidottir", "Arnkeldottir", "Arnketilldottir", "Arnlaugdottir", "Arnljotdottir", "Arnordottir", "Arnsteindottir", "Arnthordottir", "Arnulfrdottir", "Arnvidottir", "Arondottir", "Asbjorndottir", "Asbrandottir", "Asfrithdottir", "Asgautdottir", "Asgeirdottir", "Asgrimdottir", "Askeldottir", "Asketilldottir", "Aslakdottir", "Asmundottir", "Assurdottir", "Asulfdottir", "Asvaldottir", "Asvardottir", "Athilsdottir", "Atlidottir", "Atsurrdottir", "Auðunardottir", "Audbjorndottir", "Audgisildottir", "Audgislidottir", "Audolfdottir", "Audundottir", "Austmathrdottir", "Authgrimdottir", "Authketilldottir", "Authulfdottir", "Authundottir", "Autidottir", "Balkidottir", "Ballidottir", "Bankidottir", "Bardottir", "Bardidottir", "Baugdottir", "Beigarthdottir", "Beinerdottir", "Beinirdottir", "Bergdottir", "Bergfinndottir", "Bergthordottir", "Bergvidottir", "Bersidottir", "Biordottir", "Biorn dottir", "Birningdottir", "Bjalfidottir", "Bjalkidottir", "Bjarkidottir", "Bjarnidottir", "Bjartmardottir", "Bjor dottir", "Bjorgolfdottir", "Bjorgulfdottir", "Bjorndottir", "Bjornulfdottir", "Blængdottir", "Blanndottir", "Bodalfdottir", "Bodvardottir", "Boedottir", "Bollidottir", "Bolverkdottir", "Borgardottir", "Borkdottir", "Borstigdottir", "Bothvardottir", "Botulfdottir", "Bræsidottir", "Bragidottir", "Bramdottir", "Brandottir", "Bretakollrdottir", "Brodd-Helgidottir", "Broddidottir", "Brodirdottir", "Brondulfdottir", "Brunidottir", "Brusidottir", "Buidottir", "Byrnjolfdottir", "Cnutdottir", "Dagdottir", "Dagfinndottir", "Dandottir", "Diarfdottir", "Dunfjalldottir", "Dyridottir", "Edgardottir", "Egildottir", "Eidottir", "Eilifdottir", "Einardottir", "Eindrididottir", "Eirikdottir", "Eldgrimdottir", "Elgfrothidottir", "Englidottir", "Erlendottir", "Erlingdottir", "Ernmundottir", "Erpdottir", "Eskildottir", "Eydisdottir", "Eyjolfdottir", "Eysteindottir", "Eyvaldottir", "Eyvindottir", "Fargrimdottir", "Farmanndottir", "Farthegndottir", "Fastulfdottir", "Finndottir", "Finnleikdottir", "Finnvidottir", "Firthgestdottir", "Flokidottir", "Flosidottir", "Folkbiorndottir", "Folkmardottir", "Fornidottir", "Frømundottir", "Freysteindottir", "Fridgeirdottir", "Fridmundottir", "Frodidottir", "Frostulfdottir", "Frothidottir", "Gædadottir", "Gæiradottir", "Gæirmundottir", "Gærhialmdottir", "Gærrardottir", "Gætirdottir", "Galtidottir", "Gamaldottir", "Gamlidottir", "Gardardottir", "Gardidottir", "Gaukdottir", "Gautdottir", "Gautidottir", "Gavtvidottir", "Geirdottir", "Geirfinndottir", "Geirleifdottir", "Geirmundottir", "Geirolfdottir", "Geirsteindottir", "Geirthjofdottir", "Geitirdottir", "Geitirgestdottir", "Gellirdottir", "Geridottir", "Gestdottir", "Giermundottir", "Gillidottir", "Gilsdottir", "Gislidottir", "Gizordottir", "Gizurdottir", "Glamdottir", "Glumdottir", "Gnupadottir", "Gnupidottir", "Gormdottir", "Granidottir", "Gretterdottir", "Grettirdottir", "Grimdottir", "Grimardottir", "Grimkeldottir", "Grimolfdottir", "Grimwaldottir", "Grindottir", "Griotgardottir", "Grisdottir", "Grithdottir", "Grjotgardottir", "Gudadottir", "Gudbrandottir", "Gudlaugdottir", "Gudleifdottir", "Gudmundottir", "Gudrikdottir", "Gudrodottir", "Gudværdottir", "Gufidottir", "Gullidottir", "Gunbjorndottir", "Gunnaldottir", "Gunnardottir", "Gunnbjorndottir", "Gunnhautrdottir", "Gunnidottir", "Gunnkeldottir", "Gunnlæifdottir", "Gunnlaugdottir", "Gunnleifdottir", "Gunnsteindottir", "Gunnulfdottir", "Gunnvidottir", "Guthheredottir", "Guthormdottir", "Guthrothdottir", "Guthrumdottir", "Gylfidottir", "Gyrdottir", "Hämingdottir", "Hæfnirdottir", "Hælæifdottir", "Hælgidottir", "Hæmingdottir", "Hængdottir", "Haddottir", "Hafdottir", "Hafgrimdottir", "Haflididottir", "Hafrdottir", "Hagidottir", "Hakidottir", "Haklangdottir", "Hakondottir", "Halfdandottir", "Halftandottir", "Halldottir", "Halladottir", "Hallbjorndottir", "Halldordottir", "Hallfredottir", "Hallfridottir", "Hallgrimdottir", "Hallidottir", "Hallkeldottir", "Hallmundottir", "Hallsteindottir", "Hallvardottir", "Halvdandottir", "Hamdottir", "Hamundottir", "Hanefdottir", "Haraldottir", "Hardbeindottir", "Hardrefildottir", "Harekdottir", "Hasteindottir", "Haukdottir", "Havardottir", "Hedindottir", "Heggdottir", "Helgidottir", "Hemingdottir", "Heriolfdottir", "Herjolfdottir", "Herlaugdottir", "Herludottir", "Hermundottir", "Hersteindottir", "Hialtidottir", "Hildiglumdottir", "Hildirdottir", "Hiorvardottir", "Hjalkardottir", "Hjaltidottir", "Hjarrandidottir", "Hjordottir", "Hjorleifdottir", "Hjortdottir", "Hjorvarthdottir", "Hlennidottir", "Hlodvirdottir", "Hognidottir", "Holmfastdottir", "Holmgavtdottir", "Holmgeirdottir", "Holmstæindottir", "Holmsteindottir", "Hordottir", "Hoskuldottir", "Hosvirdottir", "Hottdottir", "Hrærekdottir", "Hrafndottir", "Hrafnkeldottir", "Hrafnvartrdottir", "Hragnelfdottir", "Hranfastdottir", "Hranidottir", "Hrappdottir", "Hreidadottir", "Hreidardottir", "Hreindottir", "Hreitharrdottir", "Hrifladottir", "Hringdottir", "Hroaldottir", "Hroardottir", "Hrodgæirdottir", "Hrodgeirdottir", "Hrodidottir", "Hrokdottir", "Hrolfdottir", "Hrollaugdottir", "Hromundottir", "Hrossbjorndottir", "Hrosskeldottir", "Hrosskelldottir", "Hrossketildottir", "Hrutdottir", "Hunbogidottir", "Hundidottir", "Hundolfrdottir", "Hvitserkdottir", "Iarldottir", "Iarlabankidottir", "Iarundottir", "Illugidottir", "Ingemardottir", "Ingidottir", "Ingibjorgdottir", "Ingifastdottir", "Ingimardottir", "Ingimundottir", "Ingjaldottir", "Ingolfdottir", "Ingulbjörndottir", "Ingvardottir", "Iogæirdottir", "Ioketilldottir", "Iorthrdottir", "Iorundottir", "Irenmundottir", "Iridottir", "Iricdottir", "Isgautdottir", "Isidottir", "Isleifdottir", "Isulfdottir", "Iulidottir", "Ivardottir", "Jarlabankidottir", "Jarlebankedottir", "Jarnskeggidottir", "Jobjorndottir", "Johandottir", "Jokuldottir", "Jomardottir", "Jondottir", "Jorundottir", "Käredottir", "Kætiløydottir", "Kætildottir", "Kætilfastdottir", "Kætilmundottir", "Kabbidottir", "Kadaldottir", "Kalfdottir", "Kardottir", "Karidottir", "Karldottir", "Karlidottir", "Karsidottir", "Kaupmanndottir", "Ketildottir", "Ketilbiorndottir", "Ketilbjorndottir", "Ketilldottir", "Kispingdottir", "Kjallakdottir", "Kjartandottir", "Kjotvidottir", "Klakkrdottir", "Knútrdottir", "Knutdottir", "Kodrandottir", "Koigrimdottir", "Koldottir", "Kolbeindottir", "Kolfinndottir", "Kolldottir", "Kollskeggdottir", "Kollsveindottir", "Kolskeggdottir", "Konaldottir", "Koridottir", "Kormakdottir", "Kotkeldottir", "Kotkelldottir", "Krakidottir", "Kveldulfdottir", "Lambidottir", "Leidolfdottir", "Leifdottir", "Leiknirdottir", "Lifolfdottir", "Lifstændottir", "Linidottir", "Liutdottir", "Ljotdottir", "Lodindottir", "Lodmundottir", "Loptdottir", "Ludindottir", "Lytingdottir", "Magnusdottir", "Makdottir", "Mannidottir", "Mardottir", "Meldundottir", "Modolfdottir", "Moldofdottir", "Mordottir", "Mursidottir", "Nærfidottir", "Naddodottir", "Nafnidottir", "Nasidottir", "Nefsteindottir", "Nikolasdottir", "Njaldottir", "Northridottir", "Oddottir", "Oddløgdottir", "Oddleifdottir", "Odinkardottir", "Ofeigdottir", "Ofiegdottir", "Ogmundottir", "Olædottir", "Olæifdottir", "Olafdottir", "Oleifdottir", "Olvirdottir", "Onämdottir", "Ondottdottir", "Onemdottir", "Onguldottir", "Onundottir", "Orøkiadottir", "Orestdottir", "Orgumleididottir", "Orlygdottir", "Ormdottir", "Orndottir", "Ornolfdottir", "Ornulfdottir", "Orridottir", "Orrindottir", "Ospakdottir", "Osvaldottir", "Osvifdottir", "Oswaldottir", "Otkeldottir", "Otryggdottir", "Ottardottir", "Oystæindottir", "Ozurdottir", "Pauldottir", "Ragidottir", "Ragnardottir", "Ragnfastdottir", "Ragnvaldottir", "Raudebjorndottir", "Refdottir", "Regindottir", "Reinndottir", "Rodmardottir", "Rognvaldottir", "Runolfdottir", "Sæbbidottir", "Sæmundottir", "Sævildottir", "Saksidottir", "Samdottir", "Saxidottir", "Selkollrdottir", "Serkdottir", "Sibbidottir", "Sigbjorndottir", "Sigbrandottir", "Sigebeorhtdottir", "Sigeferthdottir", "Sigegardottir", "Sigeheahdottir", "Sigehelmdottir", "Sigeheredottir", "Sigelacdottir", "Sigemærdottir", "Sigemundottir", "Sigenothdottir", "Sigerædottir", "Sigericdottir", "Sigestældottir", "Sigeweardottir", "Sigewinedottir", "Sigewulfdottir", "Sigfastdottir", "Sigfusdottir", "Sigguatrdottir", "Sighaddottir", "Sighvatdottir", "Sigmundottir", "Sigtryggdottir", "Sigurdottir", "Sigvaldidottir", "Sigvatdottir", "Sigvidottir", "Sinfiotlidottir", "Singasvendottir", "Skœdirdottir", "Skallagrimdottir", "Skamkeldottir", "Skapdottir", "Skaptidottir", "Skardottir", "Skardidottir", "Skarfdottir", "Skeggdottir", "Skeggidottir", "Skialgdottir", "Skididottir", "Skjaldulfdottir", "Skjoldottir", "Skoptidottir", "Skorridottir", "Skufdottir", "Skuldottir", "Skulidottir", "Skurfadottir", "Skutidottir", "Slodedottir", "Slodidottir", "Slothidottir", "Snæ-Ulfdottir", "Snæbjorndottir", "Snækoldottir", "Snorridottir", "Sodottir", "Sokkolfdottir", "Solmundottir", "Solvidottir", "Sorlidottir", "Spiallbudidottir", "Spiutdottir", "Spjutdottir", "Stækardottir", "Starkadottir", "Starolfdottir", "Starridottir", "Steindottir", "Steinardottir", "Steinbitrdottir", "Steinbjorndottir", "Steingrimdottir", "Steinkeldottir", "Steinketilldottir", "Steinmodottir", "Steinolfdottir", "Steinthordottir", "Steinunndottir", "Stigandidottir", "Storolfdottir", "Stufdottir", "Sturladottir", "Styrdottir", "Styrbiorndottir", "Styrkardottir", "Styrkollrdottir", "Styrmirdottir", "Suitdottir", "Sumarlidottir", "Sumarlididottir", "Surtdottir", "Svæindottir", "Svafardottir", "Svalfidottir", "Svandottir", "Svartdottir", "Svartbrandottir", "Svartgeirrdottir", "Svartkollrdottir", "Svartlingrdottir", "Sveindottir", "Sveinbjorndottir", "Svendottir", "Svenidottir", "Svertingdottir", "Svinulfdottir", "Svipdaydottir", "Sweindottir", "Teitdottir", "Thangbrandottir", "Thialfidottir", "Thidrandidottir", "Thidrikdottir", "Thiodolfdottir", "Thjodofldottir", "Thjodoftdottir", "Thjostolfdottir", "Thokodolfdottir", "Thometilldottir", "Thoraldottir", "Thoraldrdottir", "Thorarindottir", "Thorbergdottir", "Thorbjorndottir", "Thorbrandottir", "Thordottir", "Thorfastdottir", "Thorfinndottir", "Thorfrethrdottir", "Thorgautdottir", "Thorgeirdottir", "Thorgestdottir", "Thorgilsdottir", "Thorgrimdottir", "Thorhalldottir", "Thorirdottir", "Thorkeldottir", "Thorkelldottir", "Thorketildottir", "Thorlakdottir", "Thorleifdottir", "Thorleikdottir", "Thormardottir", "Thormodottir", "Thormothrdottir", "Thoroardottir", "Thorodottir", "Thoroddottir", "Thorolfdottir", "Thorormdottir", "Thorredottir", "Thorstardottir", "Thorsteindottir", "Thorvaldottir", "Thorvardottir", "Thorvidottir", "Thraindottir", "Thrandottir", "Throstdottir", "Tjorvidottir", "Tofidottir", "Tokidottir", "Toladottir", "Toredottir", "Torfidottir", "Torradottir", "Torstendottir", "Tostidottir", "Trandildottir", "Trudottir", "Tryggdottir", "Tryggvidottir", "Tufidottir", "Tumidottir", "Tyrfingdottir", "Tyrkirdottir", "Ubbeindottir", "Ufidottir", "Uglubathrdottir", "Ulfdottir", "Ulfardottir", "Ulfbjorndottir", "Ulfgrimdottir", "Ulfketildottir", "Ulfljotdottir", "Ulfrikdottir", "Ulvkildottir", "Unidottir", "Unndottir", "Unnulfdottir", "Värmodottir", "Valbrandottir", "Valgardottir", "Validottir", "Valthjofdottir", "Vandildottir", "Vandradottir", "Vardottir", "Varindottir", "Vathlaussdottir", "Vebjorndottir", "Vebrandottir", "Vegeirdottir", "Vekeldottir", "Veleifdottir", "Vermundottir", "Vertlithidottir", "Vestardottir", "Vesteindottir", "Vestgeirdottir", "Veturlididottir", "Vidkunndottir", "Vifildottir", "Vigbjordottir", "Vigfusdottir", "Vigidottir", "Vigotdottir", "Vikardottir", "Visätedottir", "Vogdottir", "Vottdottir", "Waltheofdottir", "Warydottir", "Wealglistdottir", "Wengodottir", "Yngvardottir", "Ysoppadottir"];
  if (type === 1) {
    let rnd = Math.floor(Math.random() * nm3.length);
    let rnd2 = Math.floor(Math.random() * nm4.length);
    name = nm3[rnd] + " " + nm4[rnd2];
  } else {
    let rnd = Math.floor(Math.random() * nm1.length);
    let rnd2 = Math.floor(Math.random() * nm2.length);
    name = nm1[rnd] + " " + nm2[rnd2];
  }
  return name
}

function createThrall() {
  let form = $("form").serializeArray()
  if (!form) { console.log("no form on page"); return }
  let kingmail = form[0].value;
  let thrallFirstName = form[1].value.split(" ")[0] || form[1].value
  let thrallLastName = form[1].value.split(" ")[1] || `${form[1].value}sson`;
  let thrallBody = JSON.stringify(
    {
      "Dead": false,
      "FirstName": thrallFirstName,
      "LastName": thrallLastName,
      "Level": 1,
      "Rank": "Thrall",
      "XP": Math.round(Math.random() * 10)
    }
  )
  let url = `https://pillagers-storage-functions.azurewebsites.net/api/CreateUnit?email=${kingmail}`
  fetch(url, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: thrallBody
  }).then(d => d.text().then((f) => {
    let inner = document.getElementById("progress-inner")
    if (inner) {
      inner.style.width = "100%"
      inner.classList.add("done")
      inner.innerText = "CONGRATULATIONS ON BECOMING A THRALL!"
    }
    return f;
  }))
}

function populateVikingName() {
  let el = document.getElementById("vikingname");
  el["value"] = generateVikingName()
}

async function populateKingOptions() {
  let kings = await getTable("Kings")
  let select = document.getElementById("selectking")
  kings.forEach(king => {
    let opt = document.createElement("option")
    opt.value = king.RowKey["_"]
    opt.innerText = `${king.FirstName["_"]} ${king.LastName["_"]}`
    select.appendChild(opt);
  });
}

async function renderProgressBar(container, delay) {
  let cont = document.querySelector(container);
  if (document.getElementById("progress-outer")) { document.getElementById("progress-outer").outerHTML = "" }
  let outer = document.createElement("div")
  let inner = document.createElement("div")
  outer.style.height = "25px";
  inner.style.height = "100%";
  outer.style.width = "100%"
  outer.style.border = "1px solid #ccc"
  outer.id = "progress-outer"
  inner.id = "progress-inner"
  inner.style.backgroundColor = "#1ab188"
  inner.style.width = "0%";
  outer.appendChild(inner)
  cont.appendChild(outer)
  function timeout(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
  let innerWidth = parseInt(inner.style.width.split("%")[0]);
  while (innerWidth < 100) {
    await timeout(delay).then(() => { innerWidth++; inner.style.width = `${innerWidth}%` })
    if ([].slice.call(document.querySelector("#progress-inner").classList).length) {
      innerWidth = 100
      inner.style.width="100%"
    }
  }
}

async function submitForm(event) {
  let formEmailValue = event.target.elements.emailValue.value;
  let formDisplayNameValue = event.target.elements.userNameValue.value;

  bodyString = JSON.stringify({ email: formEmailValue, displayname: formDisplayNameValue })

  await fetch(`https://prod-86.westeurope.logic.azure.com:443/workflows/1e05bc32554344fc9c4a184579c0ce79/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FFgFQoXn4DErW0bBk7l_nsUcROCK61mDehEuEwN_vyU`, {
    method: "POST",
    body: bodyString,
  }).then(d => d.text().then(f => f))
};


$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  let $this = $(this),
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