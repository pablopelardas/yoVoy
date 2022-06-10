import { sequelize } from "../api/src/db"

const organization = [
	{name: "Netherlands"},
	{name: "South Africa"},
	{name: "Spain"},
	{name: "United States"},
	{name: "Sweden"},
	{name: "Germany"},
	{name: "France"},
	{name: "Singapore"},
	{name: "Argentina"},
	{name: "Costa Rica"}
]

const locations = [
{name:"Biito",address:"80284 Calypso Circle",cityId:2},
{name:"Al Jīzah",address:"37970 Arizona Plaza",cityId:4},
{name:"Cipari",address:"32263 Vernon Plaza",cityId:2},
{name:"Dolsk",address:"151 Barby Trail",cityId:5},
{name:"Vicente Guerrero",address:"06 8th Pass",cityId:5},
{name:"Huangnaihai",address:"2 Moose Alley",cityId:2},
{name:"Vaiamonte",address:"11485 Coleman Avenue",cityId:4},
{name:"Libmanan",address:"2130 Norway Maple Center",cityId:2},
{name:"Huddinge",address:"7 Sugar Crossing",cityId:4},
{name:"Wanju",address:"575 Pearson Crossing",cityId:2},
{name:"Bogovinje",address:"9386 Colorado Alley",cityId:1},
{name:"Tytuvėnėliai",address:"08024 Muir Avenue",cityId:5},
{name:"Guimarei",address:"1 6th Parkway",cityId:5},
{name:"Cruz das Almas",address:"22 Monument Center",cityId:3},
{name:"Al Manşūrah",address:"66 Sundown Street",cityId:5},
{name:"Longshan",address:"2555 Sloan Drive",cityId:5},
{name:"Jishi",address:"7710 Chive Point",cityId:4},
{name:"Haihui",address:"58382 Derek Court",cityId:2},
{name:"Chahe",address:"5506 Summer Ridge Way",cityId:1},
{name:"Nuevo Emperador",address:"4 Corben Place",cityId:2}
]

const events =[
{name:"License to Drive",description:"In quis justo. Maecenas  nulla ultrices aliquet.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:5},
{name:"Demon Seed",description:"In sagittis dui vel nisl. Duiuet at, feugiat non, pretium quis, lectus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:6},
{name:"Hotte in Paradise (Hotte im Paradies)",description:"Aenean lectus. Pel orci vehicula condimentum.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:9},
{name:"Daddy Day Camp",description:"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:10},
{name:"Step Brothers",description:"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:2},
{name:"In a Glass Cage (Tras el cristal)",description:"Duis conDonec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:3},
{name:"Career Opportunities",description:"Morbi porttitor lorem id ligula. Iin, tempus sit amet, sem.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:8},
{name:"Doctor Strange",description:"Vestibulum ac est lacinia nisi ium Aliquam erat volutpat.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:9},
{name:"Pokémon Origins",description:"In congue. Etiam justo. Etiam pretium iaculis justo.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:10},
{name:"Run",description:"Cum sociis natoque penatibus etapient montes, nascetur ridiculus mus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:7},
{name:"Guess Who",description:"Praesent blandit. Nam nut eget, tempus vel, pede.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:6},
{name:"Fragile Trust: Plagiarism, Power, and Jayson Blair at the New York Times, A",description:"In htumst. Etiam faucibus cursus urna. Ut tellus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:8},
{name:"Life and Times of Hank Greenberg, The",description:"Aenean fermentueifend luctus, ultricies eu, nibh.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:8},
{name:"Franz Kafka's a Country Doctor",description:"Praesent id massa id nisl v odio.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:8},
{name:"My Louisiana Sky",description:"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, quis, lectus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:7},
{name:"Midsummer Night's Party, A (Midsummer of Love, A) (Sommaren med Göran)",description:"Nam ultrices, libero non ma elitiverr lacus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:7},
{name:"Happy End",description:"Nullam sit amet turpis elementum linibh.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:4},
{name:"Flypaper",description:"Etiam vel augue. Vestibulum rut sem.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:3},
{name:"King's Speech, The",description:"Suspendisse potenti. In eleifentumst.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:5},
{name:"From Zero to Hero",description:"Cras non velit nec nisi vulpque.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:3},
{name:"Two Rabbits (2 Coelhos)",description:"Praesent blandit. Nam get, tincide.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:10},
{name:"Lego: The Adventures of Clutch Powers",description:"Integer tincidurat.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:4},
{name:"Winter of Frozen Dreams",description:"Cum sociis natoque penatibus et maparturient montes, nas.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:9},
{name:"Black Sleep, The",description:"Phasellus in felis. Donec semper sapien a libero. Nam dui.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:5},
{name:"Come Live with Me",description:"Quisque id justo sit amet sapien dignissim vesl est. Donec ofeugiat et, eros.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:6},
{name:"Youth in Revolt",description:"Cras non velit nec nisi vulputate nonummy. Maementum pellentesque.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:10},
{name:"Snails, The (Escargots, Les)",description:"Nulla ut erat id mauris vulus. Nulla facilisi.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:9},
{name:"Alps (Alpeis)",description:"Etiam vel augue. Vestibulum rutrum rutavida sem.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:1},
{name:"Adrift (Choi Voi)",description:"Integer ac leo. Pellentesque ultrices mat nisi.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:5},
{name:"Come Blow Your Horn",description:"Fusce consequat. Nulla nisl. Nunc nisl.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:2},
{name:"Wackness, The",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:7},
{name:"Heads",description:"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:1},
{name:"Seven Up!",description:"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:10},
{name:"Evening",description:"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mor pede juementum.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:5},
{name:"Kagemusha",description:"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede loblectus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:5},
{name:"Dead Like Me: Life After Death",description:"Nam ultrices, libero non mattis pulvinar, nligula in lacus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:5},
{name:"Carry on Screaming!",description:"Proin interdum mauris non ligula pellentesque  metae, nisl.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:10},
{name:"Women Art Revolution",description:"Mauris enim leo, rhoncus sed, vestibulum sit amgue, ve",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:10},
{name:"Whale, The",description:"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunue.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:2},
{name:"Colorado Territory",description:"Morbi non lectus. Aliquam sit amet diam in magna bibendis.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:5},
{name:"Being Elmo: A Puppeteer's Journey",description:"Proin eu mi. Nulla ac enim. In tempec sem.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:8},
{name:"Cosmic Psychos: Blokes You Can Trust",description:"Aenean fermentum. Donec ut mauris ies eu, nibh.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:4},
{name:"Lesson of the Evil (Aku no kyôten)",description:"Lorem ipsum dolor sit aent lectus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:4},
{name:"Triple Cross",description:"Proin eu mi. Nulla ac enim. In tempor, turpis sem.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:5},
{name:"Lust for Gold (Duhul aurului)",description:"Nam ultrices, libero noviverra dapibus. Null lacus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:6},
{name:"Thunderpants",description:"In congue. Etiam justo. Etiam pretium iaculis justo.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:9},
{name:"I'm Gonna Explode (a.k.a. I'm Going to Explode) (Voy a explotar)",description:"Mauriset, massa id lobortis o.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:9},
{name:"Gertrud",description:"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:5},
{name:"Leningrad Cowboys Meet Moses",description:"Nullam porttitor lacus at tue ipsum. Aliquam non mauris.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:6},
{name:"Backwoods (Bosque de sombras)",description:"Proin interdum mauris non ligula pelle, nisl.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:1},
{name:"Prime Cut",description:"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismoec sem.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:1},
{name:"Sherlock Holmes: A Game of Shadows",description:"Phasellus in felis. Donec semper sapien a libero. Nam dui.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:6},
{name:"Orchestra Rehearsal (Prova d'orchestra)",description:"Praesent id massa id nisl venen odio.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:9},
{name:"Aloft",description:"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:5},
{name:"Sabata",description:"Duis bibendum, felis sed interdum venenatis, tuu est conntum.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:2},
{name:"On a marché sur Bangkok",description:"Duis consequat dui nec nisi volutpat eus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:4},
{name:"North & South",description:"Phasellus in felis. Donec semper sapien a libero. Nam dui.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:3},
{name:"There's Always Tomorrow",description:"Nam ultrices, libero non mata. Sed vel en lacus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:7},
{name:"Children of the Corn II: The Final Sacrifice",description:"Nam ultrices, libero non mattis pulacus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:5},
{name:"Lawnmower Man, The",description:"Phasellus in felis. Donec semper sapien a libero. Nam dui.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:3},
{name:"Don't Be a Menace to South Central While Drinking Your Juice in the Hood",description:"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttum.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:4},
{name:"Blob, The",description:"Donec diam neque, vestibulum eget, vulputatemique.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:4},
{name:"Two Mrs. Carrolls, The",description:"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:9},
{name:"Canyon, The",description:"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante onvallis.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:3},
{name:"Inevitable Defeat of Mister & Pete, The",description:"Duis consequat dui nec nisi volutpat eleifend. Donec ut dquam fringilla rhoncus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:8},
{name:"Red Salute",description:"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvoncus dui vel sem.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:6},
{name:"Revenge of the Nerds II: Nerds in Paradise",description:"Praesent id massa id nisl venen.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:4},
{name:"Langoliers, The",description:"Phasellus in felis. Donec semper sapien a libero. Nam dui.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:1},
{name:"Entrapment",description:"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod .",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:3},
{name:"Johnny Dangerously",description:"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdieis.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:7},
{name:"Free Fall",description:"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:6},
{name:"Space Is The Place",description:"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in l.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:8},
{name:"Brave Little Toaster, The",description:"Proin eu mi. Nulla ac enim. In tempor, turpis nec euisec sem.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:3},
{name:"Satan's Brew (Satansbraten)",description:"Aliquam quis turpis eget elit sodales scelerisque. Maururpis.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:2},
{name:"Dopamine",description:"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:7},
{name:"Cruel Intentions 3",description:"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:2},
{name:"Ruthless People",description:"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:1},
{name:"Immigrants (L.A. Dolce Vita)",description:"Proin eu mi. Nulla ac enim. In tempor, turpis nec euh ligula nec sem.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:6},
{name:"It's Impossible to Learn to Plow by Reading Books",description:"Cum sociis natoque penatibus et magnis dis pus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:3},
{name:"Cold Weather",description:"Fusce consequat. Nulla nisl. Nunc nisl.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:6},
{name:"Anarchist Cookbook, The",description:"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:10},
{name:"White Darkness, The",description:"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:1},
{name:"41-Year-Old Virgin Who Knocked Up Sarah Marshall and Felt Superbad About It, The",description:"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:7},
{name:"Stefano Quantestorie",description:"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:7},
{name:"Princess of Montpensier, The (La princesse de Montpensier)",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:5},
{name:"Seoul Searching",description:"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:8},
{name:"Man Who Shot Liberty Valance, The",description:"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:1},
{name:"Lasa y Zabala",description:"Proin interdum mauris non ligula pellentesque ultrices. Phae, nisl.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:10},
{name:"Gold Diggers of 1937",description:"Maecenas tristique, est et tempus semperequat metus sapien ut nunc. Vestibulum ante ipsum potenti.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:6},
{name:"Book of Love",description:"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:3},
{name:"Shining Night: A Portrait of Composer Morten Lauridsen",description:"Proin leo odio, porttitor id, conse.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:3},
{name:"Evening",description:"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:7},
{name:"Resident Evil",description:"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:9},
{name:"Never Ever! (Nigdy w zyciu!)",description:"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:2},
{name:"Dangerous Ground",description:"Phasellus in felis. Donec semper sapien a libero. Nam dui.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:1},
{name:"Jimi Hendrix",description:"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac conseqotenti.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:8},
{name:"Gotcha!",description:"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:6},
{name:"Trip, The",description:"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:9},
{name:"Simon & the Oaks",description:"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:6},
{name:"Molly",description:"Donec diurtortor sollicitudin mi, sit amet lo Integer ac neque.",background_image:"https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/muerdo-buenosaires-900x400-ticketek.png",organizationId:10}
]

const eventLocations = [
{eventId:1,locationId:6},
{eventId:2,locationId:10},
{eventId:3,locationId:7},
{eventId:4,locationId:1},
{eventId:5,locationId:14},
{eventId:6,locationId:18},
{eventId:7,locationId:19},
{eventId:8,locationId:11},
{eventId:9,locationId:3},
{eventId:10,locationId:17},
{eventId:11,locationId:13},
{eventId:12,locationId:14},
{eventId:13,locationId:16},
{eventId:14,locationId:8},
{eventId:15,locationId:4},
{eventId:16,locationId:8},
{eventId:17,locationId:10},
{eventId:18,locationId:4},
{eventId:19,locationId:11},
{eventId:20,locationId:15},
{eventId:21,locationId:6},
{eventId:22,locationId:16},
{eventId:23,locationId:9},
{eventId:24,locationId:4},
{eventId:25,locationId:14},
{eventId:26,locationId:6},
{eventId:27,locationId:13},
{eventId:28,locationId:10},
{eventId:29,locationId:16},
{eventId:30,locationId:10},
{eventId:31,locationId:14},
{eventId:32,locationId:5},
{eventId:33,locationId:15},
{eventId:34,locationId:20},
{eventId:35,locationId:8},
{eventId:36,locationId:13},
{eventId:37,locationId:1},
{eventId:38,locationId:2},
{eventId:39,locationId:8},
{eventId:40,locationId:13},
{eventId:41,locationId:18},
{eventId:42,locationId:17},
{eventId:43,locationId:16},
{eventId:44,locationId:20},
{eventId:45,locationId:4},
{eventId:46,locationId:16},
{eventId:47,locationId:15},
{eventId:48,locationId:12},
{eventId:49,locationId:11},
{eventId:50,locationId:9},
{eventId:51,locationId:18},
{eventId:52,locationId:2},
{eventId:53,locationId:11},
{eventId:54,locationId:18},
{eventId:55,locationId:8},
{eventId:56,locationId:10},
{eventId:57,locationId:13},
{eventId:58,locationId:2},
{eventId:59,locationId:1},
{eventId:60,locationId:17},
{eventId:61,locationId:4},
{eventId:62,locationId:19},
{eventId:63,locationId:9},
{eventId:64,locationId:8},
{eventId:65,locationId:18},
{eventId:66,locationId:7},
{eventId:67,locationId:4},
{eventId:68,locationId:6},
{eventId:69,locationId:7},
{eventId:70,locationId:13},
{eventId:71,locationId:7},
{eventId:72,locationId:14},
{eventId:73,locationId:4},
{eventId:74,locationId:15},
{eventId:75,locationId:13},
{eventId:76,locationId:8},
{eventId:77,locationId:1},
{eventId:78,locationId:17},
{eventId:79,locationId:19},
{eventId:80,locationId:20},
{eventId:81,locationId:15},
{eventId:82,locationId:9},
{eventId:83,locationId:18},
{eventId:84,locationId:12},
{eventId:85,locationId:18},
{eventId:86,locationId:14},
{eventId:87,locationId:9},
{eventId:88,locationId:1},
{eventId:89,locationId:14},
{eventId:90,locationId:7},
{eventId:91,locationId:3},
{eventId:92,locationId:20},
{eventId:93,locationId:13},
{eventId:94,locationId:19},
{eventId:95,locationId:3},
{eventId:96,locationId:5},
{eventId:97,locationId:15},
{eventId:98,locationId:3},
{eventId:99,locationId:16},
{eventId:100,locationId:3}
]

const dates = [
{date:"16/5/2024",price:1957,eventLocationId:1},
{date:"6/9/2022",price:752,eventLocationId:2},
{date:"3/10/2021",price:1491,eventLocationId:3},
{date:"30/6/2023",price:708,eventLocationId:4},
{date:"25/5/2023",price:1619,eventLocationId:5},
{date:"15/9/2024",price:1428,eventLocationId:6},
{date:"12/2/2022",price:1048,eventLocationId:7},
{date:"19/5/2024",price:1328,eventLocationId:8},
{date:"24/11/2022",price:1551,eventLocationId:9},
{date:"4/3/2024",price:549,eventLocationId:10},
{date:"30/1/2026",price:1553,eventLocationId:11},
{date:"8/8/2022",price:962,eventLocationId:12},
{date:"7/7/2023",price:1028,eventLocationId:13},
{date:"11/2/2025",price:1778,eventLocationId:14},
{date:"21/5/2023",price:592,eventLocationId:15},
{date:"20/4/2023",price:1296,eventLocationId:16},
{date:"20/1/2025",price:1876,eventLocationId:17},
{date:"28/1/2024",price:1631,eventLocationId:18},
{date:"16/8/2024",price:1397,eventLocationId:19},
{date:"6/4/2025",price:1212,eventLocationId:20},
{date:"11/4/2022",price:1311,eventLocationId:21},
{date:"19/7/2021",price:1636,eventLocationId:22},
{date:"22/6/2021",price:907,eventLocationId:23},
{date:"27/4/2023",price:1758,eventLocationId:24},
{date:"28/10/2025",price:644,eventLocationId:25},
{date:"24/9/2021",price:1101,eventLocationId:26},
{date:"21/1/2023",price:1923,eventLocationId:27},
{date:"11/9/2023",price:983,eventLocationId:28},
{date:"16/10/2025",price:653,eventLocationId:29},
{date:"5/9/2022",price:1191,eventLocationId:30},
{date:"12/7/2025",price:634,eventLocationId:31},
{date:"1/12/2022",price:663,eventLocationId:32},
{date:"25/12/2023",price:950,eventLocationId:33},
{date:"2/6/2024",price:1958,eventLocationId:34},
{date:"30/11/2025",price:1763,eventLocationId:35},
{date:"15/11/2021",price:1643,eventLocationId:36},
{date:"24/9/2022",price:1764,eventLocationId:37},
{date:"23/11/2023",price:761,eventLocationId:38},
{date:"26/1/2025",price:1522,eventLocationId:39},
{date:"13/12/2022",price:1557,eventLocationId:40},
{date:"19/6/2025",price:1992,eventLocationId:41},
{date:"12/9/2021",price:1305,eventLocationId:42},
{date:"10/9/2023",price:1274,eventLocationId:43},
{date:"10/9/2022",price:1031,eventLocationId:44},
{date:"8/3/2025",price:515,eventLocationId:45},
{date:"10/12/2021",price:510,eventLocationId:46},
{date:"11/6/2022",price:1499,eventLocationId:47},
{date:"13/8/2022",price:1465,eventLocationId:48},
{date:"17/10/2022",price:1310,eventLocationId:49},
{date:"6/9/2023",price:545,eventLocationId:50},
{date:"29/9/2024",price:1010,eventLocationId:51},
{date:"26/2/2025",price:1440,eventLocationId:52},
{date:"23/11/2023",price:737,eventLocationId:53},
{date:"17/10/2021",price:974,eventLocationId:54},
{date:"25/6/2021",price:1759,eventLocationId:55},
{date:"1/11/2022",price:1502,eventLocationId:56},
{date:"2/11/2022",price:1942,eventLocationId:57},
{date:"1/11/2023",price:932,eventLocationId:58},
{date:"12/9/2023",price:997,eventLocationId:59},
{date:"18/9/2022",price:1191,eventLocationId:60},
{date:"11/8/2022",price:1785,eventLocationId:61},
{date:"19/7/2025",price:1850,eventLocationId:62},
{date:"15/1/2025",price:664,eventLocationId:63},
{date:"22/5/2023",price:728,eventLocationId:64},
{date:"4/2/2022",price:1452,eventLocationId:65},
{date:"19/5/2024",price:528,eventLocationId:66},
{date:"30/7/2021",price:508,eventLocationId:67},
{date:"23/2/2024",price:1017,eventLocationId:68},
{date:"4/5/2023",price:1598,eventLocationId:69},
{date:"2/10/2022",price:1852,eventLocationId:70},
{date:"30/1/2024",price:1300,eventLocationId:71},
{date:"1/3/2024",price:958,eventLocationId:72},
{date:"6/9/2025",price:1883,eventLocationId:73},
{date:"11/10/2023",price:1097,eventLocationId:74},
{date:"20/11/2025",price:709,eventLocationId:75},
{date:"3/11/2021",price:1271,eventLocationId:76},
{date:"6/7/2022",price:1587,eventLocationId:77},
{date:"7/7/2023",price:990,eventLocationId:78},
{date:"6/10/2024",price:1590,eventLocationId:79},
{date:"5/4/2025",price:1686,eventLocationId:80},
{date:"16/1/2023",price:784,eventLocationId:81},
{date:"28/3/2022",price:1070,eventLocationId:82},
{date:"22/6/2025",price:963,eventLocationId:83},
{date:"5/3/2025",price:1056,eventLocationId:84},
{date:"24/1/2022",price:1054,eventLocationId:85},
{date:"1/1/2022",price:747,eventLocationId:86},
{date:"17/1/2026",price:580,eventLocationId:87},
{date:"29/7/2021",price:1620,eventLocationId:88},
{date:"11/2/2022",price:1521,eventLocationId:89},
{date:"12/7/2022",price:1001,eventLocationId:90},
{date:"31/1/2025",price:1429,eventLocationId:91},
{date:"24/12/2021",price:728,eventLocationId:92},
{date:"21/1/2022",price:1729,eventLocationId:93},
{date:"14/3/2023",price:1467,eventLocationId:94},
{date:"8/4/2023",price:1761,eventLocationId:95},
{date:"11/11/2022",price:1114,eventLocationId:96},
{date:"16/6/2021",price:1051,eventLocationId:97},
{date:"27/6/2025",price:748,eventLocationId:98},
{date:"17/7/2024",price:1900,eventLocationId:99},
{date:"22/7/2025",price:1913,eventLocationId:100}
]

const categories = [
{name: "Infantil"},
{name: "Deportes"},
{name: "Musical"},
{name: "Teatro"},
{name: "Especiales"}
]

const cities = [
{name:"Chile"},
{name:"Argentina"},
{name:"Russia"},
{name:"China"},
{name:"Croatia"}
]

const {Event, Date, Organization, EventLocation,Ticket, User, Location, Category, EventCategory, City, UserRole} = sequelize.models

export async function MockData(){

    Promise.all([Organization.bulkCreate(organization), City.bulkCreate(cities), Category.bulkCreate(categories)])
    .then(async result => {

		await Location.bulkCreate(locations)
    let eventcreated = await Event.bulkCreate(events)
		await EventLocation.bulkCreate(eventLocations)
		await Date.bulkCreate(dates)
		
		let categoriesId = [3,1,3,5,2,4,1,1,2,3,4,1,3,4,2,5,5,4,3,2]
		for (let i = 0; i < eventcreated.length; i++) {
			await EventCategory.create({eventId: eventcreated[i].getDataValue("id"), categoryId: Math.floor(Math.random() * (6 - 1) + 1)})
		}

    })
}