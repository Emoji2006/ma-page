// Liste des fichiers (MP3 et MP4) dans le même dossier
const playlist = [
    { file: "./chanson/KIDZ BOP Kids Vampire.mp3", title: "KIDZ BOP Kids Vampire"},
    { file: "./chanson/The Citizens of Halloween - This Is Halloween.mp4", title: "The Citizens of Halloween - This Is Halloween"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/01 - Abandoned Warehouse.mp3", title: "Abandoned Warehouse"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/02 - Ghost Awaken.mp3", title: "Ghost Awaken"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/03 - Dont Fall A Sleep.mp3", title: "Dont Fall A Sleep"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/04 - Haunted Church.mp3", title: "Haunted Church"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/05 - Haunted Moans.mp3", title: "Haunted Moans"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/06 - Dark Night.mp3", title: "Dark Night"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/07 - Haunted Fun House.mp3", title: "Haunted Fun House"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/08 - Dark Visions.mp3", title: "Dark Visions"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/09 - Haunted Dreams.mp3", title: "Haunted Dreams"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/10 - Haunted Ambience.mp3", title: "Haunted Ambience"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/11 - Don't Make A Sound.mp3", title: "Don't Make A Sound"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/12 - Cemetary Birds.mp3", title: "Cemetary Birds"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/13 - Ancient Ceremony.mp3", title: "Ancient Ceremony"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/14 - Demons In Flight.mp3", title: "Demons In Flight"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/15 - Grandfather Time.mp3", title: "Grandfather Time"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/16 - Morbid Minds.mp3", title: "Morbid Minds"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/17 - Black Forest.mp3", title: "Black Forest"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/18 - Broken Dreams.mp3", title: "Broken Dreams"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/19 - No Escape.mp3", title: "No Escape"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/20 - Into The Darkness.mp3", title: "Into The Darkness"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/21 - Graveyard.mp3", title: "Graveyard"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/22 - Cult Chants.mp3", title: "Cult Chants"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/23 - Haunted.mp3", title: "Haunted"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/24 - Alone In A Dark Alley.mp3", title: "Alone In A Dark Alley"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/25 - Creepy Whispers.mp3", title: "Creepy Whispers"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/26 - Empty Lot.mp3", title: "Empty Lot"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/27 - Plucked Organs.mp3", title: "Plucked Organs"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/28 - Exercist.mp3", title: "Exercist"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/29 - Creepy Tunnel In Basement.mp3", title: "Creepy Tunnel In Basement"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/30 - Haunted Trolly.mp3", title: "Haunted Trolly"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/31 - Outside The Gate.mp3", title: "Outside The Gate"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/32 - Research Lab.mp3", title: "Research Lab"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/33 - Grave Digger.mp3", title: "Grave Digger"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/34 - Fantasy.mp3", title: "Fantasy"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/35 - Errie Drones.mp3", title: "Errie Drones"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/36 - Secret Society.mp3", title: "Secret Society"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/37 - Time Is Running Out.mp3", title: "Time Is Running Out"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/38 - Scary Sounds.mp3", title: "Scary Sounds"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/39 - Evil Thoughts.mp3", title: "Evil Thoughts"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/40 - Death Screams.mp3", title: "Death Screams"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/41 - CreepyHouse.mp3", title: "CreepyHouse"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/42 - Terror.mp3", title: "Terror"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/43 - Creatures.mp3", title: "Creatures"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/44 - Bloody Murder.mp3", title: " Bloody Murder"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/45 - Blood In The Air.mp3", title: "Blood In The Air"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/46 - NightTerrors.mp3", title: "NightTerrors"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/47 - Insects.mp3", title: "Insects"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/48 - Crowded Horror.mp3", title: "Crowded Horror"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/49 - Dark Fantasy.mp3", title: "Dark Fantasy"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/50 - Fairgrounds.mp3", title: "Fairgrounds"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/51 - Deadly Basement.mp3", title: "Deadly Basement"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/52 - Ritual.mp3", title: "Ritual"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/53 - Outbreak.mp3", title: "Outbreak"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/54 - Errie.mp3", title: "Errie"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/55 - Bloody Mass.mp3", title: "Bloody Mass"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/56 - Great American Haunting.mp3", title: "Great American Haunting"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/01 - Michael Jackson - Thriller (Single Version).mp3", title: "Michael Jackson - Thriller"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/02 - Ray Parker Jr. - Ghostbusters.mp3", title: "Ray Parker Jr. - Ghostbusters"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/03 - Rockwell - Somebody's Watching Me (Single Version).mp3", title: "Rockwell - Somebody's Watching Me"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/04 - AC_DC - Highway to Hell.mp3", title: "AC_DC - Highway to Hell"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/05 - Blue Öyster Cult - (Don't Fear) The Reaper.mp3", title: "Blue Öyster Cult - (Don't Fear) The Reaper"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/06 - Daryl Hall & John Oates - Maneater.mp3", title: "Daryl Hall & John Oates - Maneater"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/07 - Eurythmics - Sweet Dreams (Are Made of This) (Remastered).mp3", title: "Eurythmics - Sweet Dreams (Are Made of This)"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/08 - Dead Or Alive - You Spin Me Round (Like a Record).mp3", title: "Dead Or Alive - You Spin Me Round (Like a Record)"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/09 - Gaten Matarazzo - Never Ending Story.mp3", title: "Gaten Matarazzo - Never Ending Story"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/10 - Will Smith - Men In Black (From _Men In Black_ Soundtrack).mp3", title: "Will Smith - Men In Black"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/11 - Michael Jackson - Beat It.mp3", title: "Michael Jackson - Beat It"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/12 - Britney Spears - Toxic.mp3", title: "Britney Spears - Toxic"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/13 - Ke$ha - Cannibal.mp3", title: "Ke$ha - Cannibal"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/14 - Shakira - She Wolf.mp3", title: "Shakira - She Wolf"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/15 - Sophie Ellis-Bextor - Murder On The Dancefloor.mp3", title: "Sophie Ellis-Bextor - Murder On The Dancefloor"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/16 - Redbone - The Witch Queen Orleans.mp3", title: "Redbone - The Witch Queen Orleans"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/17 - Ozzy Osbourne - Crazy Train (2002 Version).mp3", title: "Ozzy Osbourne - Crazy Train"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/18 - The Rolling Stones - Sympathy For The Devil (Original Single Stereo Version).mp3", title: "The Rolling Stones - Sympathy For The Devil"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/19 - John Carpenter - Halloween Theme.mp3", title: "John Carpenter - Halloween Theme"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/20 - Michael Jackson - Blood on the Dance Floor.mp3", title: "Michael Jackson - Blood on the Dance Floor"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/21 - Talking Heads - Psycho Killer (2005 Remaster).mp3", title: "Talking Heads - Psycho Killer"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/22 - Glee Cast - Ding Dong The Witch Is Dead.mp3", title: "Glee Cast - Ding Dong The Witch Is Dead"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/23 - Harry Belafonte - Jump In The Line.mp3", title: "Harry Belafonte - Jump In The Line"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/24 - Elvis Presley - (You're The) Devil in Disguise.mp3", title: "Elvis Presley - (You're The) Devil in Disguise"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/25 - AC_DC - Back In Black.mp3", title: "AC_DC - Back In Black"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/26 - Screamin' Jay Hawkins - I Put a Spell On You.mp3", title: "Screamin' Jay Hawkins - I Put a Spell On You"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/27 - Johnny Cash - (Ghost) Riders in the Sky.mp3", title: "Johnny Cash - (Ghost) Riders in the Sky"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/28 - Sonya Belousova - Toss A Coin To Your Witcher.mp3", title: "Sonya Belousova - Toss A Coin To Your Witcher"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/29 - Santana - Black Magic Woman (Single Version).mp3", title: "Santana - Black Magic Woman"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/30 - Donovan - Season of the Witch.mp3", title: "Donovan - Season of the Witch"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/31 - Bow Wow Wow - I Want Candy.mp3", title: "Bow Wow Wow - I Want Candy"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/32 - Elle King - Where the Devil Don't Go.mp3", title: "Elle King - Where the Devil Don't Go"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/33 - Blue Öyster Cult - Godzilla.mp3", title: "Blue Öyster Cult - Godzilla"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/34 - Edgar Winter - Frankenstein.mp3", title: "Edgar Winter - Frankenstein"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/35 - Danny Elfman - Jack's Lament.mp3", title: "Danny Elfman - Jack's Lament"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/36 - Nick Cave & The Bad Seeds - Red Right Hand (2011 Remastered Version).mp3", title: "Nick Cave & The Bad Seeds - Red Right Hand"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/37 - The Charlie Daniels Band - The Devil Went Down to Georgia.mp3", title: "The Charlie Daniels Band - The Devil Went Down to Georgia"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/38 - Alice Cooper - Feed My Frankenstein.mp3", title: "Alice Cooper - Feed My Frankenstein"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/39 - AC_DC - Hells Bells.mp3", title: "AC_DC - Hells Bells"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/40 - Glee Cast - Time Warp.mp3", title: "Glee Cast - Time Warp"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/41 - Fifth Harmony - I'm In Love With a Monster.mp3", title: "Fifth Harmony - I'm In Love With a Monster"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/42 - Stevie Wonder - Superstition.mp3", title: "Stevie Wonder - Superstition"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/43 - Michael Jackson - Scream.mp3", title: "Michael Jackson - Scream"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/44 - OutKast - ATLiens.mp3", title: "OutKast - ATLiens"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/45 - Beyoncé - Haunted.mp3", title: "Beyoncé - Haunted"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/46 - Au_Ra - Panic Room.mp3", title: "Au_Ra -Panic Room"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/47 - Usher - My Boo.mp3", title: "Usher - My Boo"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/48 - Loïc Nottet - Doctor.mp3", title: "Loïc Nottet - Doctor"}, 
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/49 - Sia - Alive.mp3", title: "Sia - Alive"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/50 - Lil Peep - witchblades.mp3", title: "Lil Peep - witchblades"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/51 - E. Power Biggs - Toccata & Fugue in D Minor, BWV 565_ Toccata.mp3", title: "E. Power Biggs - Toccata & Fugue in D Minor, BWV 565_ Toccata"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/52 - G-Eazy - Saw It Coming (from the _Ghostbusters_ Original Motion Picture Soundtrack) (feat. Jeremih).mp3", title: "G-Eazy - Saw It Coming"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/53 - TLC - Creep.mp3", title: "TLC - Creep"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/54 - Fugees - The Mask.mp3", title: "Fugees - The Mask"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/55 - Michael Jackson - Dangerous.mp3", title: "Michael Jackson - Dangerous"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/56 - Britney Spears - Freakshow.mp3", title: "Britney Spears - Freakshow"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/57 - Whodini - Freaks Come Out at Night.mp3", title: "Whodini - Freaks Come Out at Night"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/58 - DJ Jazzy Jeff & The Fresh Prince - A Nightmare on My Street.mp3", title: "DJ Jazzy Jeff & The Fresh Prince - A Nightmare on My Street"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/59 - The Jacksons - Torture.mp3", title: "The Jacksons - Torture"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/60 - Travis Scott - SICKO MODE (Skrillex Remix).mp3", title: "Travis Scott - SICKO MODE"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/61 - 21 Savage Ghostbusters.mp3", title: "21 Savage Ghostbusters"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/62 - Mark Ayres - Tubular Bells (From _The Exorcist_).mp3", title: "Mark Ayres - Tubular Bells"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/63 - WALK THE MOON - Ghostbusters.mp3", title: "WALK THE MOON - Ghostbusters"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/64 - Mark Ronson - Get Ghost.mp3", title: "Mark Ronson - Get Ghost"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/65 - Loïc Nottet - Candy", title: "Loïc Nottet - Candy"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/66 - OutKast - Dracula's Wedding (feat. Kelis).mp3", title: "OutKast - Dracula's Wedding"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/67 - Michael Jackson - Ghosts.mp3", title: "Michael Jackson - Ghosts"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/68 - Elle King - Good Girls (from the _Ghostbusters_ Original Motion Picture Soundtrack).mp3", title: "Elle King - Good Girls"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/69 - Maître Gims - Zombie.mp3", title: "Maître Gims - Zombie"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/70 - Barbra Streisand - Ding-Dong! The Witch Is Dead (feat. Harold Arlen).mp3", title: "Barbra Streisand - Ding-Dong! The Witch Is Dead"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/71 - Henry Jackman - Rescue Mission.mp3", title: "Henry Jackman - Rescue Mission"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/72 - The Cranberries - Zombie.mp3", title: "The Cranberries - Zombie"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/73 - Ozzy Osbourne - Bark at the Moon.mp3", title: "Ozzy Osbourne - Bark at the Moon"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/74 - Electric Light Orchestra - Evil Woman.mp3", title: "Electric Light Orchestra - Evil Woman"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/75 - The Cure - Lullaby (Remastered).mp3", title: "The Cure - Lullaby"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/76 - The Psychedelic Furs - The Ghost In You.mp3", title: "The Psychedelic Furs - The Ghost In You"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/77 - Japan - Halloween.mp3", title: "Japan - Halloween"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/78 - Henry Jackman - First Class.mp3", title: "Henry Jackman - First Class"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/79 - Jean-Patrick Capdevielle - Halloween.mp3", title: "Jean-Patrick Capdevielle - Halloween"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/80 - Garou - La sorcière (Extrait du spectacle «Notre Dame de Paris 1998» Live).mp3", title: "Garou - La sorcière"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/81 - Camélia Jordana - Little Monsters.mp3", title: "Camélia Jordana - Little Monsters"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/82 - Camille Bertault - Dracula (Extrait de la bande originale du film Hotel Transylvanie 3).mp3", title: "Camille Bertault - Dracula"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/83 - MGMT - Of Moons, Birds & Monsters.mp3", title: "MGMT - Of Moons, Birds & Monsters"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/84 - Jeff Buckley - Witches' Rave.mp3", title: "Jeff Buckley - Witches' Rave"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/85 - The Neighbourhood - R.I.P. 2 My Youth.mp3", title: "The Neighbourhood - R.I.P. 2 My Youth"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/86 - Nothing But Thieves - Graveyard Whistling.mp3", title: "Nothing But Thieves - Graveyard Whistling"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/87 - The Raveonettes - Attack of the Ghost Riders.mp3", title: "The Raveonettes - Attack of the Ghost Riders"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/88 - Jimi Hendrix - Voodoo Child (Slight Return).mp3", title: "Jimi Hendrix - Voodoo Child"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/89 - Meat Loaf - Bat Out of Hell.mp3", title: "Meat Loaf - Bat Out of Hell"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/90 - Steve Stills - Season of the Witch.mp3", title: "Steve Stills - Season of the Witch"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/91 - Various Artists - The Dusty Attic.mp3", title: "Various Artists - The Dusty Attic"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/92 - Michael Jackson - Xscape.mp3", title: "Michael Jackson - Xscape"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/93 - Justin Timberlake - True Blood.mp3", title: "Justin Timberlake - True Blood"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/94 - 100 Greatest TV Themes - The Addams Family.mp3", title: "100 Greatest TV Themes - The Addams Family"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/95 - In This Moment - Blood.mp3", title: "In This Moment - Blood"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/96 - Accept - Aiming High (Album Version).mp3", title: "Accept - Aiming High"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/97 - Alice In Chains - Them Bones.mp3", title: "Alice In Chains - Them Bones"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/98 - Cradle Of Filth - Hallowed Be Thy Name.mp3", title: "Cradle Of Filth - Hallowed Be Thy Name"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/99 - Henry Jackman - Frankenstein's Monster/mp3", title: "Henry Jackman - Frankenstein's Monster"},
    /* à completer les musiques*/
];

const player = document.getElementById("player");
const titleDisplay = document.getElementById("current-title");
const playlistNames = document.getElementById("playlist-names");
const playPauseBtn = document.getElementById("playpause");
const seekbar = document.getElementById("seekbar");
const muteToggleBtn = document.getElementById("mute-toggle");

let index = 0;

function updateMuteButton() {
    muteToggleBtn.textContent = player.muted ? "🔇 Muet" : "🔊 Son";
    muteToggleBtn.setAttribute("aria-pressed", String(player.muted));
}


function startPlayback() {
    const playPromise = player.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            if (error.name === "NotAllowedError") {
                console.info("Le navigateur bloque la lecture automatique avec le son.");
                return;
            }

            console.error("Impossible de lire le média :", error);
        });
    }
}



// Afficher la playlist cliquable
playlist.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    li.addEventListener("click", () => {
        index = i;
        playMedia();
    });
    playlistNames.appendChild(li);
});

// Jouer le média actuel
function playMedia() {
    const file = playlist[index].file;
    const ext = file.split('.').pop().toLowerCase();


    // Reset dimensions pour MP4 vs MP3
    if (ext === 'mp3') {
        player.src = file;
        // On cache la vidéo mais on garde les contrôles si natifs
        player.style.height = "50px";
        player.style.width = "100%";
    } else if (ext === 'mp4') {
        player.src = file;
        player.style.height = "auto";
        player.style.width = "100%";
    }

    titleDisplay.innerHTML = "<b>Fichier en cours :</b> " + playlist[index].title;
    startPlayback();
}
// Jouer le premier média
playMedia();

// Quand le média se termine → passer au suivant
player.addEventListener("ended", () => {
    index = (index + 1) % playlist.length;
    playMedia();
});

// Boutons suivant / précédent
document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % playlist.length;
    playMedia();
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + playlist.length) % playlist.length;
    playMedia();
});

// Bouton Play/Pause
playPauseBtn.addEventListener("click", () => {
    if (player.paused) {
        startPlayback();
        playPauseBtn.textContent = "⏸ Pause";
    } else {
        player.pause();
        playPauseBtn.textContent = "▶ Play";
    }
});

// Mettre à jour la barre de progression pendant la lecture
player.addEventListener("timeupdate", () => {
    if (!isNaN(player.duration)) {
        const value = (player.currentTime / player.duration) * 100;
        seekbar.value = value;
    }
});

// Changer la position via la barre
seekbar.addEventListener("input", () => {
    if (!isNaN(player.duration)) {
        const time = (seekbar.value / 100) * player.duration;
        player.currentTime = time;
    }
});

// Bouton Muet / Son
muteToggleBtn.addEventListener("click", () => {
    player.muted = !player.muted;
    updateMuteButton();
});

updateMuteButton();